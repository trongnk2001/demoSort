import { List, notification } from "antd";
import React, { useEffect, useState } from "react";
import { RedoOutlined } from '@ant-design/icons';
import {
  BlockScroll,
  ButtonBlock,
  ButtonStyled,
  HomeContainer,
  ListStyled,
} from "./style";

const Home = () => {
  const [randomArray, setRandomArray] = useState([]);

 useEffect(() => {
    // Tạo mảng ngẫu nhiên khi thành phần được tạo ra
    generateRandomArray();
  }, []);

  const generateRandomString = () => {
    const length = Math.floor(Math.random() * 5) + 1;
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    return result;
  };

  const generateRandomArray = () => {
    const newArray = Array.from({ length: 1000 }, () => generateRandomString());
    setRandomArray(newArray);
  };

  const bubbleSort = () => {
    let arr = [...randomArray];
    const n = arr.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Hoán đổi arr[i] và arr[i + 1]
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    notification.success({
          message: `Sắp xếp theo thuật toán Bubble Sort thành công`,
          placement: 'bottomLeft',
        })
    setRandomArray(arr);
  };

  const selectionSort = () => {
    let arr = [...randomArray];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        // Hoán đổi arr[i] và arr[minIndex]
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
 notification.success({
          message: `Sắp xếp theo thuật toán Selection Sort thành công`,
          placement: 'bottomLeft',
        })
    setRandomArray(arr);
  };

  const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  };

  const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };

  const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[Math.floor(Math.random() * arr.length)]; // Chọn ngẫu nhiên một phần tử làm pivot
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
  };

  const handleQuickSort = () => {
    const sortedArray = quickSort(randomArray.slice());
    setRandomArray(sortedArray);
    notification.success({
          message: `Sắp xếp theo thuật toán Quick Sort thành công`,
          placement: 'bottomLeft',
        })
  };

  const handleMergeSort = () => {
    const sortedArray = mergeSort(randomArray.slice());
    setRandomArray(sortedArray);
    notification.success({
          message: `Sắp xếp theo thuật toán Merge Sort thành công`,
          placement: 'bottomLeft',
        })
  };

  const handleSort = () => {
    const sortedArray = [...randomArray].sort();
    setRandomArray(sortedArray);

    notification.success({
          message: `Sắp xếp tăng dần theo phương pháp .sort() của JS thành công`,
          placement: 'bottomLeft',
        })
  };

  const handleSortDecrease = () => {
    const sortedArray = [...randomArray].sort((a, b) => b.localeCompare(a));
    setRandomArray(sortedArray);

    notification.success({
          message: `Sắp xếp giảm dần theo phương pháp .sort() của JS thành công`,
          placement: 'bottomLeft',
        })
  };
  return (
    <HomeContainer>
      <h1>Random</h1>
      <BlockScroll>
        <ListStyled
          itemLayout="horizontal"
          dataSource={randomArray}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta title={<p>{item}</p>} />
            </List.Item>
          )}
        />
      </BlockScroll>
      <ButtonStyled
        style={{ marginTop: '50px' }}
          icon={<RedoOutlined />}
        onClick={generateRandomArray}
        type="primary"
        danger
        >
          Reset Random !
        </ButtonStyled>
      <ButtonBlock>
        
        <ButtonStyled type="primary" onClick={bubbleSort}>Bubble Sort</ButtonStyled>
        <ButtonStyled type="primary" onClick={selectionSort}>Selection Sort</ButtonStyled>
        <ButtonStyled type="primary" onClick={handleMergeSort}>Merge Sort</ButtonStyled>
        <ButtonStyled type="primary" onClick={handleQuickSort}>Quick Sort</ButtonStyled>
        <ButtonStyled type="primary" onClick={handleSort}>Sort JS Ascending</ButtonStyled>
        <ButtonStyled type="primary" onClick={handleSortDecrease}>Sort JS Decrease</ButtonStyled>
    
      </ButtonBlock>
    </HomeContainer>
  );
};

export default Home;

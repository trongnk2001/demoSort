import { Button, List } from "antd";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BlockScroll = styled.div`
  width: 800px;
  height: 500px;
  overflow-y: scroll;
  border: 1px solid rgba(140, 140, 140, 0.35);
`;

export const ListStyled = styled(List)`
  .ant-list-item {
    padding: 12px !important;
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

export const ButtonStyled = styled(Button)``;

import styled from "styled-components";

export const MainDiv = styled.div`
  && h1 {
    padding: 20px;
    width: 1140px;
    margin: auto;
  }
`;

export const KanbanDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  padding: 50px;
  box-sizing: border-box;
  width: 1140px;
  overflow-x: scroll;
  margin: auto;
  background: #1b1b2e;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DroppableDiv = styled.div`
  flex: 0 0 220px;
  height: 100%;
  /* background-color: #fdab3d; */
  margin-right: 20px;
  border-radius: 5px;
`;

export const DraggableDiv = styled.div`
  height: 100%;
  border-radius: 4px;
  background: #ffffff;
  position: relative;
  padding: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.29);
  font-size: 13px;
  font-weight: 400;
  color: #333333;
  cursor: pointer;
  margin: 10px;
  min-height: 100px;
`;

export const Header = styled.span`
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1 1 auto;
  color: #ffffff;
  margin: 11px 11px 0px;
`;

export const AddTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 5px;
`;

export const TaskInput = styled.input`
  border: 0;
  padding: 5px 0px 5px 5px;
  border-radius: 5px;
  width: 75%;
`;

export const TaskButton = styled.button`
  background: #fdab3d;
  border: 0;
  color: #fff;
  padding: 5px 5px;
  cursor: pointer;
  border-radius: 5px;
`;

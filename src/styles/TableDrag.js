import styled from "styled-components";

export const TableDiv = styled.div`
  & main {
    color: #000;
    padding: 10px;
    width: 1140px;
    margin: 0 auto 50px;
  }

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & ul li {
    background-color: #f5f6f8;
    padding: 0px 20px;
    position: relative;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 1;
    border-bottom: 1px solid #e6e9ef;
    border-left: 5px solid #2196f3;
  }
  & li .drag {
    margin-right: 15px;
    cursor: move;
    display: flex;
    width: 100%;
    align-items: center;
  }

  & li div svg {
    height: 2rem;
    color: #fff;
  }

  & li div span {
    flex: 0 0 17%;
    padding: 7px 0px;
  }

  & li div span img {
    width: 40px;
    object-fit: contain;
  }
`;

export const HeaderList = styled.li`
  border-left: 0px solid !important;
  background: #fff !important;
  & span {
    flex: 0 0 17%;
    padding: 7px 0px;
  }
`;

export const PriorityDiv = styled.span`
  background: ${(props) => props.colors};
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex: 0 0 16% !important;
  color: #fff;
`;

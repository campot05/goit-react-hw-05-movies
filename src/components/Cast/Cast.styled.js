import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  margin: 20px auto 0px auto;
  padding: 0;
  justify-contect: center;
  li {
    width: 175px;
    margin-right: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    text-align: center;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 0px 0px 4px 4px;
  }

  img {
    width: 100%;
    display: block;
    height: 260px;
  }
  p {
    font-size: 18px;
  }
  b {
    font-size: 22px;
  }
`;

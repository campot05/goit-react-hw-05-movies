import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  gap: 20px;
  width: 900px;
  justify-contect: center;
  li {
    width: calc((100% - 80px) / 5);
  }

  img {
    width: 175px;
    display: block;
    height: 260px;
  }
  p {
    font-size: 20px;
  }
`;

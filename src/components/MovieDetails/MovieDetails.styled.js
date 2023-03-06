import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const GoBack = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 24px;
`;

export const Container = styled.div`
  display: flex;
  img {
    width: 275px;
    height: 400px;
    margin-right: 20px;
  }
  div {
    h2 {
      margin: 0px 0px 20px 0px;
      font-size: 36px;
    }
    h3 {
      font-size: 28px;
      margin: 0px 0px 15px 0px;
      font-weight: 700;
    }
  }
  p {
    margin: 0px 0px 15px 0px;
    font-size: 18px;
  }
`;

export const Genres = styled.div`
  display: flex;
  span {
    margin-right: 15px;
    font-size: 18px;
  }
`;
export const Additional = styled.div`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    align-items: center;
    li {
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  h3 {
    margin: 0px 0px 20px 0px;
    font-size: 24px;
  }
`;

export const AdditionalLink = styled(NavLink)`
  color: black;
  padding: 4px 8px;
  text-decoration: none;
  font-size: 22px;
  border-radius: 5px;
  border: 1px solid black;
  &.active {
    color: white;
    background-color: black;
  }
`;

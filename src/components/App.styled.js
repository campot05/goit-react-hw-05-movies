import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: black;
  padding: 5px 10px;
  text-decoration: none;
  font-size: 24px;
  border-radius: 5px;
  margin-right: 10px;
  &.active {
    color: white;
    background-color: black;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: -25px;
  margin-right: -25px;
  padding: 0px 25px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  margin-bottom: 20px;
  height: 75px;
`;

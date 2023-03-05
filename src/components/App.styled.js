import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: black;
  padding: 5px 10px;
  text-decoration: none;
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
  padding: 10px 20px;
  margin-bottom: 20px;
  height: 75px;
`;

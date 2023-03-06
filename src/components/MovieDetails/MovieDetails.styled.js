import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBack = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 24px;
`;

export const Container = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 275px;
  height: 400px;
  margin-right: 20px;
`;

export const Title = styled.h2`
  margin: 0px 0px 20px 0px;
  font-size: 36px;
`;

export const Overview = styled.p`
  font-size: 28px;
  margin: 0px 0px 15px 0px;
  font-weight: 700;
`;

export const Genres = styled.span`
  display: block;
  font-weight: 600;
  font-size: 24px;
  margin: 0px 0px 15px 0px;
`;

export const Genre = styled.span`
  margin-right: 10px;
`;

export const Text = styled.p`
  margin: 0px 0px 15px 0px;
  font-size: 18px;
`;

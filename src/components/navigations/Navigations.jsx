import React from 'react';
import { StyledNavigate } from './styled';
import { UpCircleOutlined } from '@ant-design/icons';

const Navigation = ({ onClick, left, bottom }) => (
  <StyledNavigate onClick={onClick} left={left} bottom={bottom}>
    <UpCircleOutlined />
  </StyledNavigate>
);

export default Navigation;

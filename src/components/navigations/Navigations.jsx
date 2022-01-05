import React from 'react';
import { StyledNavigate } from './styled';
import { UpCircleOutlined } from '@ant-design/icons';

const Navigation = ({ left, bottom }) => (
  <StyledNavigate left={left} bottom={bottom}>
    <UpCircleOutlined />
  </StyledNavigate>
);

export default Navigation;

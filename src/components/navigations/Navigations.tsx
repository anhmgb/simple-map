import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavigate } from './styled';
import { UpCircleOutlined } from '@ant-design/icons';

interface NavigationProps {
  onClick: Function,
  left: number,
  bottom: number
}

const Navigation = ({ onClick, left, bottom }: NavigationProps) => (
  <StyledNavigate onClick={onClick} left={left} bottom={bottom}>
    <UpCircleOutlined />
  </StyledNavigate>
);

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired,
  left: PropTypes.number.isRequired,
  bottom: PropTypes.number.isRequired
}

export default Navigation;

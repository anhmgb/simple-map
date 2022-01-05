import styled from 'styled-components';

export const StyledNavigate = styled.div`
  position: absolute;
  z-index: 2;
  font-size: 3rem;
  bottom: ${props => props.bottom}px;
  left: ${props => props.left}px;
  user-select: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`

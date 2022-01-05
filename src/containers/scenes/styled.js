import styled from 'styled-components';

export const ScenesStyled = styled.div`
  overflow: scroll;
  position: relative;
  width: 100%;
  user-select: none;
`

export const StyledNavigate = styled.div`
  position: absolute;
  z-index: 2;
  font-size: 3rem;
  bottom: 10%;
  left: ${props => props.position}px;
`

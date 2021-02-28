import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 8px 0;
  background-color: #e485c4;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
  transition: all 0.4s;
  border-radius: 4px;
  filter: brightness(90%);
  border: solid 2px #e485c4;
  &:hover {
    transition: all 0.4s;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.7);
    filter: brightness(100%);
    transform: scale(1.05);
    border: solid 2px #fff;
  }
  header {
    font-weight: bold;
  }
  p {
    font-size: 16px;
  }
`;

const StyledActiveFlag = styled.b`
  color: ${(props) => (props.isActive ? '#fff' : '#bbb')}; ;
`;

const StyledComponent = (props) => {
  return (
    <StyledWrapper>
      <header>StyledComponents</header>
      <p>Necessário instalar NPM INSTALL STYLED-COMPONENTS, muito similar ao inline styles, <br></br> contudo me parece ser uma escrita mais amigável dos estilos. Sem contar que é mais modular </p>
      <StyledActiveFlag isActive={props.isActive}>Is Active</StyledActiveFlag>
    </StyledWrapper>
  );
};

export default StyledComponent;
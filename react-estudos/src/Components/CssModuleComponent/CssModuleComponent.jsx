import React from 'react';
import classes from './componentStyles.module.css';

const CssModuleComponent = (props) => {
  const { isActive } = props;
  const { container, flag, activeFlag } = classes;
  return (
    <div className={container}>
      <header>CssModuleComponent</header>
      <p>Folha de estilos separada, que sobrescreve a da aplicação. Exemplo no .container:hover</p>
      <b className={isActive ? activeFlag : flag}>Is Active</b>
    </div>
  );
};

export default CssModuleComponent;
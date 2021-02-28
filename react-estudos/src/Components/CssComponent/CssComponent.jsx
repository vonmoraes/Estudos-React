import React from 'react';
import './componentStyles.css';

const CssComponent = (props) => {
  const { isActive } = props;

  return (
    <div className="my-style-with-css">
      <header>CssComponent</header>
      <p>Puxa o CSS de uma folha de estilos própria. Sem sobrescrever nada que já foi feito, <br/> apenas criando novos. </p>
      <p>Não entendi muito bem o funcionamento do isActive aqui não, "!isActive ? 'flag' : ''", fica zerado quando true? </p>

      <b className={!isActive ? 'flag' : ''}>Is Active</b>
    </div>
  );
};

export default CssComponent;
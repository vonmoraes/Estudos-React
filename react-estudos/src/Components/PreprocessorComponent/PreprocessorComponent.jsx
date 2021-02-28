import React from 'react';
import './componentStyles.scss';

const PreprocessorComponent = (props) => {
  const { isActive } = props;
  return (
    <div className="my-style-with-prepreocessor">
      <header>PreprocessorStyles</header>
      <p>Não entendi muito bem a diferença deste para o primeiro, <br></br> acho que basicamente a notação utilizada com o SASS sendo diferente </p>
      <b className={!isActive ? 'flag' : ''}>Is Active</b>
    </div>
  );
};

export default PreprocessorComponent;
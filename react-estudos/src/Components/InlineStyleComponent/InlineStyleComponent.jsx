import React, { useState } from "react";

const InlineStyleComponent = (props) => {

// Criou o estado de isHover e setHover para fazer o efeito ao passar o mouse por cima do card
// Se reparar bem neste isActive por exemplo, se ele estiver setado como TRUE lá em baixo troca a cor do texto. :D 
// Anotar como desafio talvez, um botão que altera o estado de isActive? 

    const [isHover, setHover] = useState(false);
    const { isActive } = props;
  
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: '8px 0',
          backgroundColor: '#9d7ce2',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
          transition: '0.4s',
          color: '#fff',
          borderRadius: 4,
          filter: isHover ? 'brightness(100%)' : 'brightness(70%)',
          border: isHover ? 'solid 2px #fff' : 'solid 2px #9d7ce2',
          transform: isHover ? 'scale(1.05)' : 'unset',
          boxShadow: isHover ? '0 8px 16px 0 rgba(0, 0, 0, 0.7)' : 'unset',
        }}
      >
        <header style={{ fontWeight: 'bold' }}>InlineStyles</header>
        <p
          style={{
            fontSize: 16,
            filter: 'brightness(100%)',
          }}
        >
          Criou o estado de isHover e setHover para fazer o efeito ao passar o mouse por cima do card
        </p>
        <p
          style={{
            fontSize: 16,
            filter: 'brightness(100%)',
          }}
        >
          Se reparar bem neste isActive por exemplo, se ele estiver setado como TRUE lá em baixo troca a cor do texto. :D 
        </p>
        <b style={{ color: isActive ? '#fff' : '#bbb' }}>Is Active</b>
      </div>
    );
  };
  
  export default InlineStyleComponent;
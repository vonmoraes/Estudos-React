import React from 'react';
import { makeStyles } from '@material-ui/styles';

const MaterialUIStyleComponent = (props) => {
  const { isActive } = props;
  const classes = useStyles(isActive);

  return (
    <div className={classes.container}>
      <header>MaterialUIStyles</header>
      <p>A const classes recebe o estilo da página, e além disso nela é enviado o isActive.</p>
      <p> Nota necessário instalar o MATERIALUISTYLES no npm </p>
      <b className={classes.flag}>Is Active</b>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    padding: '8px 0',
    backgroundColor: '#4ea09b',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    color: '#fff',
    transition: 'all 0.4s',
    borderRadius: 4,
    filter: 'brightness(90%)',
    border: 'solid 2px  #4ea09b',

    '&:hover': {
      transition: 'all 0.4s',
      boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.7)',
      filter: 'brightness(100%)',
      transform: 'scale(1.05)',
      border: 'solid 2px blue',
    },

    '& > header': {
      fontWeight: 'bold',
    },

    '& > p': {
      fontSize: 16,
    },
  },
  flag: (isActive) => ({
    color: isActive ? '#fff' : '#bbb',
  }),
});

export default MaterialUIStyleComponent;
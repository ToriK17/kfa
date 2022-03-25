import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';

const HomeButton = () => {

  const large = useSizedIconButtonStyles({ padding: 10, childSize: 48 });
  const logo =  require("../../assets/images/avatar.png")
  return (
    <div className='button-box'>
      <IconButton classes={large}>
        <Avatar src={logo} alt='artist self portriat'/>
        <div className='home-button'>Kafati Fine Art</div>
      </IconButton>
    </div>
  );
};

export default HomeButton;

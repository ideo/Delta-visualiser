import React, { useEffect, useState } from 'react';
import { getAllData } from '../../services/getData'
import './Header.scss';

const Header = () => {

  return (
    <div className="Header">
      <h1 className='title'>
        Pulse <br/>Check
      </h1>
      <div className='subtitle'>
        How has it been working remotely?
      </div>
      <div className='subtitle-bold'>
        Here’s what we learned, along with some suggestions on helpful tips and references.
      </div>
    </div>
  );
}

export default Header;

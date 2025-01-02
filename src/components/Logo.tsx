import React from 'react';
import logo from '../assets/logo.png'
export function Logo() {
  return (
    <img
      src={logo}
      alt="Costify Logo"
      className="h-16 md:h-20 mx-auto mb-6 animate-fadeIn"
    />
  );
}
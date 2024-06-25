import React from 'react';
import logo from '../img/logo.png';

const Footer = () => {
  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="flex flex-col items-center justify-between p-6 mx-auto space-y-4">
          <img class="w-32 h-auto" src={logo} alt="" />
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1>Բարի գալուստ</h1>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Էլեկտրաէներգիա</div>
          <span className='subtitle'>Գնել</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Բարձավոլտ</div>
          <span className='subtitle'>Գնել</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Արդյունաբերական</div>
          <span className='subtitle'>Գնել</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Հեռահաղորդակցություն</div>
          <span className='subtitle'>Գնել</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Տնային տնտեսություն</div>
          <span className='subtitle'>Գնել</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;

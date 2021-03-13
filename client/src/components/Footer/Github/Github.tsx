/* eslint-disable arrow-body-style */
import React from 'react';
import githubLogo from '../../../assets/logo/github.svg';
import './styles.scss';

export interface GithubProps {
  github: string;
}

const Github: React.FC<GithubProps> = ({ github }) => {
  return (
    <div className='github'>
      <a href={`https://github.com/${github}`} className='github__logo'>
      <img src={githubLogo} alt='logo' className='github' />
      </a>
      <a href={`https://github.com/${github}`} className='github__name'>{github}</a>
    </div>
  );
};

export default Github;

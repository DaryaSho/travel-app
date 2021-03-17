/* eslint-disable arrow-body-style */
/* eslint import/no-unresolved: 2 */
import React from 'react';
import './styles.scss';
import { useTranslation, Trans } from 'react-i18next';
import Button from '../Button';

const Explore: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className='explore parallax'>
      <div className='container'>
        <h1 className='explore__title'>
        <Trans i18nKey="Discover the planet">
          Discover the<br />planet
        </Trans>
        </h1>
        <a href='#explore'>
          <Button text={t('Explore')} onClick={() => null}/>
        </a>
      </div>
    </section>
  );
};

export default Explore;

/* eslint-disable arrow-body-style */
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Search from '../Search';
import './styles.scss';

const BeInspiredSection: React.FC<{search: any}> = ({ search }) => {
  const { t, i18n } = useTranslation();
  return (
    <section className='text-section parallax' id='explore'>
      <div className='container'>
        <p className='text text__greeting'>
        <Trans i18nKey="Be inspired Travel">
          Be inspired. <br /> Travel.
        </Trans>
        </p>
        <div className='search-wrapper'>
          <Search setSearch={search} />
        </div>
      </div>
    </section>
  );
};

export default BeInspiredSection;

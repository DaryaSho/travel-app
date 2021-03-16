/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import i18n from '../../localization/i18n';

const Lang: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleChange = (event: any) => {
    changeLanguage(event.target.value);
  };

  return (
    <div className="lang">
      <select value={i18n.language} onChange={handleChange}>
        <option value='eng' >{t('English')}</option>
        <option value='rus' >{t('Russian')}</option>
        <option value='bel' >{t('Belarusian')}</option>
      </select>
    </div>
  );
};

export default (Lang);

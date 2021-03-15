/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import i18n from '../../localization/i18n';

const Lang: React.FC = () => {
  // const [t, i18n] = i18n.changeLanguage('eng');
  const { t, i18n } = useTranslation();
  // const { t, i18n } = this.props;
  const changeLanguage = (lng: string) => {
    // console.log(i18n.language);
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
      </select>
    </div>
  );
};

// onChange={() => changeLanguage('eng')}

export default (Lang);
// export default translate("translations")(App);

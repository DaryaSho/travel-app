/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import eng from '../../localization/eng';

const Lang: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event: any) => {
    setSelectedOption(event.value);
    changeLanguage(event.value);
  };

  const options = [
    { value: 'eng', label: t('English').toUpperCase() },
    { value: 'rus', label: t('Russian').toUpperCase() },
    { value: 'bel', label: t('Belarusian').toUpperCase() },
  ];

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: '1px dotted grey',
      color: state.isSelected ? 'red' : 'blue',
      padding: 10,
      cursor: 'pointer',
    }),
    control: () => ({
      width: '130px',
      display: 'flex',
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  return (
    <div className='lang'>
      <Select
        placeholder={ t('Language').toUpperCase() }
        value={selectedOption}
        options={options}
        onChange={handleChange}
        styles={customStyles}
      />
    </div>
  );
};

export default Lang;

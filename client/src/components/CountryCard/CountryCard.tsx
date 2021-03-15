/* eslint-disable arrow-body-style */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import Button from '../Button';
import './styles.scss';

interface ICountyCard {
  name: string;
  capital: string;
  image: string;
  id: string;
}

const CountyCard: React.FC<ICountyCard> = ({
  name, capital, image, id,
}) => {
  const history = useHistory();
  const { t, i18n } = useTranslation();

  const toCountry = () => {
    history.push({
      pathname: `/countries/${name}`,
      state: {
        id,
      },
    });
  };

  return (
    <div
      onClick={toCountry}
      className='country-card'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='container'>
        <h2 className='country-card__name'>{name}</h2>
        <h3 className='country-card__capital'>{capital}</h3>
        <Button text={t('Find out more')} onClick={toCountry} />
      </div>
    </div>
  );
};

export default CountyCard;

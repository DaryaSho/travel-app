/* eslint import/no-unresolved: 2 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import App from './components/App';
import './styles/main.scss';

import i18n from './localization/i18n';

ReactDOM.render(
  <Router>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Router>,
  document.getElementById('root'),
);

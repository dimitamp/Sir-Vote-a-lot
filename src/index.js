import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Sentry from '@sentry/browser';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
 const whyDidYouRender = require('@welldone-software/why-did-you-render');
 whyDidYouRender(React);
} else {
 Sentry.init({dsn: process.env.SENTRY_DSN});
}

ReactDOM.render(<App />, document.getElementById('root'));

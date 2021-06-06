import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as customHooks from 'hooks';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');

  whyDidYouRender(React, {
    // trackAllPureComponents: true,
    trackHooks: true,
    trackExtraHooks: [
      [ReactRedux, 'useSelector', customHooks],
    ],
  });
}

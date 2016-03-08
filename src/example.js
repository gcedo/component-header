import 'babel-polyfill';
import Header from './';
import React from 'react';
/* globals location: false */
let base = '';
if (typeof location !== 'undefined' && /github.io\//.test(String(location))) {
  base = '.';
}

export default (
  <div>
    <Header
      className="header--blog21003976"
      image={`${ base }/assets/header-democracyinamerica.svg`}
      mobileImage={`${ base }/assets/header-democracyinamerica-mobile.svg`}
      flyTitle="Some type here"
      title="Blog name goes here"
      text="There are many reasons why sceptics might find fault with the 17 for
      a new world order, were enough for the good Lord."
      itemType="http://schema.org/Blog"
      itemProp="blog"
      link={{
        href: 'http://www.google.com',
        title: 'Clicke here and go somewhere',
      }}
    />
  </div>
);

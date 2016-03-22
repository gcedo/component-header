import 'babel-polyfill';
import Header from './';
import React from 'react';
/* globals location: false */
let base = '';
if (typeof location !== 'undefined' && /github.io\//.test(String(location))) {
  base = '.';
}

const blogs = [
  {
    slug: 'democracyinamerica',
    id: '21003976',
    title: 'Democracy in America',
  },
  {
    slug: 'bagehot',
    id: '21003990',
    title: 'Bagehot\'s notebook',
  },
  {
    slug: 'buttonwood',
    id: '21003991',
    title: 'Buttonwood\'s notebook',
  },
  {
    slug: 'economist-explains',
    id: '21573751',
    title: 'The Economist explains',
  },
  {
    slug: 'erasmus',
    id: '21572045',
    title: 'Erasmus',
  },
  {
    slug: 'freeexchange',
    id: '21003975',
    title: 'Free exchange',
  },
  {
    slug: 'gametheory',
    id: '21528117',
    title: 'Game theory',
  },
  {
    slug: 'graphicdetail',
    id: '21011894',
    title: 'Graphic detail',
  },
  {
    slug: 'gulliver',
    id: '21003986',
    title: 'Gulliver',
  },
  {
    slug: 'prospero',
    id: '21008659',
    title: 'Prospero',
  },
];
export default (
  <div>
    {
      blogs.map((blog, index) =>
        <Header
          className={`header--blog header--blog-${ blog.slug } banner--${ blog.slug }`}
          key={index}
          image={`${ base }/banners/${ blog.slug }.svg`}
          flyTitle="Some type here"
          title={blog.title}
          text="There are many reasons why sceptics might find fault with the 17 for
          a new world order, were enough for the good Lord."
          itemType="http://schema.org/Blog"
          itemProp="blog"
          link={{
            href: 'http://www.google.com',
            title: 'Clicke here and go somewhere',
          }}
        />
      )
    }
  </div>
);

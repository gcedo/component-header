import 'babel-polyfill';
import Header from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();
describe('Header', () => {

  it('renders a React element', () => {
    React.isValidElement(<Header />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let header = null;
    beforeEach(() => {
      rendered = mount(<Header />);
      header = rendered.find('.header');
    });

    it('renders a top level header.header[role=header]', () => {
      header.should.have.tagName('header');
      header.should.have.className('header');
      header.should.have.attr('role', 'header');
    });

    it('renders top level with Schema.org support', () => {
      header.should.have.attr('itemprop', 'article');
      header.should.have.attr('itemtype', 'http://schema.org/Article');
    });

    it('renders top level with .header--small-mode if props.smallMode is true', () => {
      mount(<Header smallMode />).find('.header').should.have.className('header--small-mode');
    });

    it('renders top level with .header--large-mode if props.smallMode is false', () => {
      mount(<Header smallMode={false} />).find('.header').should.have.className('header--large-mode');
    });

    it('renders title h1[itemProp=headline] tag', () => {
      rendered.find('.header__title').should.have.tagName('h1');
      rendered.find('.header__title').should.have.attr('itemprop', 'headline');
    });

    it('renders the title text inside .header__title', () => {
      mount(<Header title="foo" />).find('.header__title').should.have.text('foo');
    });

    it('renders title wrapped in a link, if given link prop', () => {
      rendered.find('.header__title-link').should.not.be.present();

      rendered = mount(<Header link={{ href: 'http://foo.com' }} />);
      rendered.find('.header__title').should.have.exactly(1).descendants('.header__title-link');
      rendered.find('.header__title-link').should.have.attr('href', 'http://foo.com');
    });

    it('renders flytitle if given flyTitle text', () => {
      rendered.find('.header__flytitle').should.not.be.present();

      rendered = mount(<Header flyTitle="foo bar" />);
      rendered.find('.header__flytitle').should.be.present().and.have.text('foo bar');
      rendered.find('.header__flytitle').should.have.attr('itemProp', 'alternativeHeadline');
    });

    it('renders children in a div.header__additional-element', () => {
      rendered.find('.header__additional-element').should.not.be.present();

      rendered = mount(<Header flyTitle="foo bar"><div className="mychild">foo</div></Header>);
      rendered.find('.header__additional-element').should.be.present().and.contain(<div className="mychild">foo</div>);
    });

  });

});

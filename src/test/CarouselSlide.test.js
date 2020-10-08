import React from 'react';
import { shallow, mount } from 'enzyme';
import CarouselSlide from '../CarouselSlide';
import styled from 'styled-components';

describe('CarouselSlide', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CarouselSlide
        imgUrl="https://example.com/default.jpg"
        description="Default test image"
      />
    );
  });
  it('renders a <figure>', () => {
    expect(wrapper.type()).toBe('figure');
  });
  it('renders an <img> and a <figcaption> as children', () => {
    expect(wrapper.childAt(0).type()).toBe(CarouselSlide.defaultProps.Img);
    expect(wrapper.childAt(1).type()).toBe('figcaption');
  });
  it('passes `imgUrl` through to the <img>', () => {
    const imgUrl = 'https://example.com/image.png';
    wrapper.setProps({ imgUrl });
    const img = wrapper.find(CarouselSlide.defaultProps.Img);
    expect(img.prop('src')).toBe(imgUrl);
  });
  it('uses `description` and `attribution` as the <figcaption>', () => {
    const description = 'An example image';
    const attribution = 'Example Ple';
    wrapper.setProps({ description, attribution });
    expect(wrapper.find('figcaption').text()).toBe(
      `${description} ${attribution}`
    );
  });
  it('passes other props through to the <figure>', () => {
    const style = {};
    const onClick = () => {};
    const className = 'my-carouselslide';
    wrapper.setProps({ style, onClick, className });
    expect(wrapper.prop('style')).toBe(style);
    expect(wrapper.prop('onClick')).toBe(onClick);
    expect(wrapper.prop('className')).toBe(className);
  });

  describe('Img', () => {
    let mounted;
    const imgUrl = 'https://example.com/default.jpg';
    beforeEach(() => {
      const Img = CarouselSlide.defaultProps.Img;
      mounted = mount(<Img src={imgUrl} imgHeight={500} />);
    });
    it('renders an <img> with the given src', () => {
      expect(mounted.containsMatchingElement(<img src={imgUrl} />)).toBe(true);
    });
    it('has the expected static styles', () => {
      expect(mounted).toHaveStyleRule('object-fit', 'cover');
      expect(mounted).toHaveStyleRule('width', '100%');
    });
    it('uses the imgHeight as the height style property', () => {
      expect(mounted).toHaveStyleRule('height', '500px');
      mounted.setProps({ imgHeight: 'calc(100vh-100px)' });
      expect(mounted).toHaveStyleRule('height', 'calc(100vh-100px)');
    });
    it('allows to be overriden', () => {
      const TestImg = styled(CarouselSlide.defaultProps.Img)`
        width: auto;
        height: auto;
        object-fit: fill;
      `;

      mounted = mount(
        <CarouselSlide
          Img={TestImg}
          imgUrl={imgUrl}
          description="Example.com"
        />
      );
      expect(mounted.find(TestImg)).toHaveStyleRule('width', 'auto');
      expect(mounted.find(TestImg)).toHaveStyleRule('height', 'auto');
      expect(mounted.find(TestImg)).toHaveStyleRule('object-fit', 'fill');
    });
  });
});

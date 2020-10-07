import React from 'react';
import { shallow } from 'enzyme';
import CarouselSlide from '../CarouselSlide';

describe('CarouselSlide', () => {
  it('renders a <figure>', () => {
    const wrapper = <CarouselSlide />;
    expect(wrapper.type()).toBe('figure');
  });
});

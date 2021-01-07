import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

it('Should render phone number', () => {
    const wrapper = shallow(<Footer />);
    const span = wrapper.find('span');
    const result = span.text();

    expect(result).toBe('Customer service:  +395 898 000 555');
    // expect(span.text()).toBe('Customer service:  +395 898 000 555');
    // expect(result).toContain('Customer service:  +395 898 000 555')
})

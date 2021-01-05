import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

// const headerComponent = (props = {}) => {
//     const component = shallow(<Header {...props} />);
//     return component;
// }

// const findByAttr = (component, attr) => {
//     const wrapper = component.find(`[data-test=${attr}]`);
//     return wrapper;
// }
describe('This is my header component', () => {
    // let component;
    // beforeEach(() => {
    //     component = headerComponent();
    // });

    it('Should render once', () => {
        const component = shallow(<Header />);
        const wrapper = component.find('.app-header');

        expect(wrapper.length).toBe(1);
    })

    it('Should render logo', () => {
        const component = shallow(<Header />);
        const wrapper = component.find(`[data-test='logo']`); // img

        expect(wrapper.length).toBe(1);
    })
})
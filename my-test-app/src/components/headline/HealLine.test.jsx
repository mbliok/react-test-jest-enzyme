import React from 'react';
import { shallow } from 'enzyme';

import HeadLine from './HeadLine';
import { findByAttr } from '../../utils/arrt';

const setUp = (props = {}) => {
    const component = shallow(<HeadLine {...props} />);
    return component;
}
describe('Headline component', () => {

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test header',
                description: 'asd'
            };
            wrapper = setUp(props)
        })

        it('Should render without errors', () => {
            const component = findByAttr(wrapper, 'header-line');
            expect(component.length).toBe(1);
        })

        it('Should render H1', () => {
            const component = findByAttr(wrapper, 'header');
            expect(component.length).toBe(1);
        })
    })




    describe('Have NO props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp() // !! whitout props
        })
        it('Should not render', () => {
            const component = findByAttr(wrapper, 'header-line');
            expect(component.length).toBe(0);
        })

    })
})

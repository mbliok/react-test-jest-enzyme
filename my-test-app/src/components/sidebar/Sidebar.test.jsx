import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from './Sidebar';
import { findByAttr } from '../../utils/arrt';

// const setUp = (props = {}) => {
//     const component = shallow(<Sidebar {...props} />);
//     return component;
// }
describe('Sidebar component', () => {

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(
                <Sidebar
                    header="Test header"
                    price="asda"
                />
            );
            // const props = {
            //     header: 'Test header',
            //     price: 'asd'
            // };
            // wrapper = setUp(props)
        })

        it('Should render without errors', () => {
            const component = findByAttr(wrapper, 'header-line');
            expect(component.length).toBe(1);
        })

        it('Should render H1', () => {
            const component = findByAttr(wrapper, 'header');
            expect(component.length).toBe(1);
        })

        // it('Shuld show  text when the btn is clicked', () => {

        //     const button = findByAttr(wrapper, 'btn');
        //     button.simulate('click');
        //     const textInfo = findByAttr(wrapper, 'text-info');
        //     expect(textInfo.length).toBe(1);
        // })
    })




    describe('Have NO props', () => {
        let wrapper;
        beforeEach(() => {
            //  wrapper = setUp() // !! whitout props
            wrapper = shallow(<Sidebar />);
        })
        it('Should not render', () => {
            const component = findByAttr(wrapper, 'header-line');
            expect(component.length).toBe(0); //.toBeTruthy();

            //има шест фалшиви стойности: false, 0, '', null, undefined и NaN. Всичко останало е истинско.
        })

    })


})

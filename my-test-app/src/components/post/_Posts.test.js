import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { Posts } from './Posts';




const mockStore = configureMockStore();
const store = mockStore({});
describe("Posts Component", () => {

    it("should render without throwing an error", () => {
        const props = {

        }
        expect(
            shallow(
                <Provider store={store}>
                    <Posts {...props} />
                </Provider>
            ).exists(<h1>Test page</h1>)
        ).toBe(1);
    });
});
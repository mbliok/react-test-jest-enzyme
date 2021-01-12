
import * as types from '../actions/types';
import postReducer from './postReducer';

describe('Post reducer', () => {

    let newState;

    it('Should return default state', () => {
        newState = postReducer(undefined, {});
        expect(newState).toEqual({ items: [] });
    })

    // it('Should return new state', () => {
    //     const posts = [{ title: 'Title 1' }, { title: 'Title 2' }]
    //     newState = postReducer(initialState, {
    //         type: types.FETCH_POSTS,
    //         payload: posts
    //     });
    //     expect(newState).toEqual(posts);
    // })
})


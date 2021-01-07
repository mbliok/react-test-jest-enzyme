import { FETCH_POSTS } from './types';

export const fetchPosts = () => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/posts')
    console.log('ff')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts,
            }))

}
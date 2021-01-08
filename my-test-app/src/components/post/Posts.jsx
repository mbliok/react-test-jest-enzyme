
import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postAction';

type Props = {}

type State = {}

class Posts extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            //  posts: [0,]
        }
    }
    // componentWillMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(data => this.setState({ posts: data }))

    // }
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props.posts);
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                {post.title}
                <p>  {post.body}</p>
            </div>
        ))
        return (
            <div data-test="post">
                {postItems}
            </div>
        )
    }
}


const mapStateToProps = state => ({ posts: state.posts.items });

export default connect(mapStateToProps, { fetchPosts })(Posts);


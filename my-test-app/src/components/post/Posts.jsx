
import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postAction';

type Props = {}

type State = {}

class Posts extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <article key={post.id} className="list-item">
                <div className="list-content">

                    <h2> {post.id} {post.title}</h2>

                    <p>{post.body}</p>
                </div>
            </article>
        ))
        return (
            <div data-test="post" className="list">
                {postItems}
            </div>
        )
    }
}


const mapStateToProps = state => ({ posts: state.posts.items });

export default connect(mapStateToProps, { fetchPosts })(Posts);


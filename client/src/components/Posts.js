import React from 'react';

const Posts = props => {
    // const {contents, title } = props.posts
    return (
        <div>
            {props.posts.map(post => {
                return (
                    <div key={post.id}>
                        <h3>{post.contents}</h3>
                        <p>{post.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Posts;
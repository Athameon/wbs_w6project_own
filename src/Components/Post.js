import React from 'react';

const Post = (item) => {
  return (
    <div className='.post'>
      <p>{item.fields.title}</p>
    </div>
  )
}

export default Post;
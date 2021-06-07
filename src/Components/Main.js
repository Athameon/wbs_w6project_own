import React from 'react';
import Post from './Post';

const Main = ({content}) => {
  console.log(content.items);
  const posts = content.items.filter(item => item.sys.contentType.sys.id === 'post');
  return(
    <main>
      <h1>This is the Main</h1>
      {posts.map(item => <Post key={item.sys.id} {...item} />)}
    </main>
  )
}

export default Main;
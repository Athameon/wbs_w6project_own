import React from 'react';
import './Post.css'
import marked from 'marked'
import { Link } from 'react-router-dom';
var { DateTime } = require('luxon');


const Post = (item) => {
  const author = item.fields.author && item.fields.author.fields;
  const picture = author && author.profilePicture.fields.file.url;

  const postText = marked(item.fields.myText);
  console.log(item);
  return (
    <div className='post'>
      <div className='post_header'>
        <Link className='user' to={author && author.name}>
          <img src={picture && picture} alt={author && author.name} />
          <p className='username'>{author && author.name}</p>
        </Link>
        <p className='data'>{DateTime.fromISO(item.sys.createdAt).setLocale('de').toLocaleString(DateTime.DATETIME_SHORT)}</p>
      </div>
      <h2 className='title'>{item.fields.title}</h2>
      <p className='shortText'>{item.fields.shortText}</p>
      {item.fields.file && <img className='postImage' src={item.fields.file.fields.file.url} alt={item.fields.file.fields.description} />}
      <section dangerouslySetInnerHTML={{ __html: postText}} />
    </div>
  )
}

export default Post;
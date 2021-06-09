import React from 'react';
import Post from './Post';
import { useParams } from 'react-router-dom';
import marked from 'marked'
import './Author.css'

const Author = ({items}) => {
  const { name } = useParams();
  const author = items.filter(item => item.sys.contentType.sys.id === 'author')
    .filter(item => item.fields.name === name)[0];
  
  const picture = author.fields.profilePicture.fields.file.url;
  const posts = items.filter(item => item.sys.contentType.sys.id === 'post')
    .filter(item => item.fields.author && item.fields.author.fields.name === name);

  return( 
    <>
      <h1>{author.fields.name}</h1>
      <img className='profilePicture' src={picture && picture} alt={author && author.name} />
      <section className='aboutText' dangerouslySetInnerHTML={{ __html: marked(author.fields.about)}} />
      <hr className='articleSeparator' />
      <h2>Articles composed by {name}:</h2>
      {posts.map(item => <Post key={item.sys.id} {...item} />)}
    </>
  )
}

export default Author;
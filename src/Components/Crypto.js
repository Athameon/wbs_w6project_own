import React from 'react';
import CryptoInfo from './CryptoInfo';
import { useParams } from 'react-router-dom';
import './Crypto.css'


const Crypto = ({items}) => {
  const { id } = useParams();
  console.log(id);
  const crypto = items.filter(item => item.sys.contentType.sys.id === 'crypto')
    .filter(item => item.fields.id === id)[0];
  console.log(crypto);

  const image = crypto.fields.image.fields;
  console.log(image.file.url);
  
  if (crypto) {
    return (
      <div className='cryptoContainer'>
        <div className='cryptoInfoContainer'>
          <CryptoInfo />
        </div>
        <div className='cryptoDescription'>
          <h1>{crypto.fields.title}</h1>
          <img src={image.file.url} alt={image.title} />
          <p>{crypto.fields.description}</p>
        </div>
      </div>
    )
  } else {
    return <div>Empty</div>
  }
} 

export default Crypto;
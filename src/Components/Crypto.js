import React from 'react';
import CryptoInfo from './CryptoInfo';
import { useParams } from 'react-router-dom';
import marked from 'marked'

import './Crypto.css'

const Crypto = ({items, currentData}) => {
  const { id } = useParams();
  console.log(id);
  const crypto = items.filter(item => item.sys.contentType.sys.id === 'crypto')
    .filter(item => item.fields.id === id)[0];
  console.log(crypto);

  const image = crypto && crypto.fields.image.fields;
  console.log(image && image.file.url);

  const currentCryptoInfo = currentData && currentData.filter(item => item.id.toLowerCase() === id)[0];

  return (
    <div className='cryptoContainer'>
      <div className='cryptoInfoContainer'>
        <CryptoInfo cryptoInfos={currentCryptoInfo} />
      </div>
      <div className='cryptoDescription'>
        {crypto ?
          <div>
            <h1>{crypto.fields.title}</h1>
            <img src={image.file.url} alt={image.title} />
            <section dangerouslySetInnerHTML={{ __html: marked(crypto.fields.description)}} />
          </div>
        :
          <div>
            <h2>Sorry, but we don't have data for the selected crypto currency.</h2>
          </div>
      }
      </div>
    </div>
  )
} 

export default Crypto;
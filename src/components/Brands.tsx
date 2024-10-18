import React from 'react';
import Image from 'next/image';
import styles from '../styles/Brands.module.css';

const logos = [
  '/images/ethereum.png',
  '/images/polkadot.png',
  '/images/hedera.png',
  '/images/solana.png',
  '/images/icp.png',
  '/images/near.png',
  '/images/polygon.png',

];

const BlockchainLogos: React.FC = () => {
  return (
    <div className={styles.brands}>
      <div className={styles.brand_logos}>
        <div className={styles.image_container}>
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className={styles.logo_wrapper}>
              <Image 
                src={logo} 
                alt={`Blockchain logo ${index}`} 
                layout="responsive"
                width={100}
                height={50}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainLogos;
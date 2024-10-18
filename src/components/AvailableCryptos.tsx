import React from 'react';
import Image from 'next/image';

const cryptos = [
  'Bitcoin', 'Ethereum', 'USDT', 'USDC', 'BNB',
  'XRP', 'Cardano', 'Solana', 'Polkadot', 'Dogecoin',
  'Avalanche', 'Polygon', 'Litecoin', 'Chainlink', 'Stellar'
];

const AvailableCryptos: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Popular tokens available
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {cryptos.map((crypto, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 relative mb-2">
                <Image src={`/images/${crypto.toLowerCase()}.svg`} alt={crypto} layout="fill" objectFit="contain" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">{crypto}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableCryptos;


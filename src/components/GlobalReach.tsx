import React from 'react';
import Image from 'next/image';

const GlobalReach: React.FC = () => {
  const features = [
    { title: 'Global coverage', description: 'Support for users from over 180 countries' },
    { title: 'Major payment methods', description: 'Credit cards, bank transfers, and more' },
    { title: 'Most popular assets', description: 'Support for major cryptocurrencies and tokens' },
  ];

  const paymentMethods = ['visa', 'mastercard', 'amex', 'gpay', 'applepay'];
  const cryptoAssets = ['bitcoin', 'ethereum', 'usdt', 'usdc', 'bnb'];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Global reach with no hassle
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          {paymentMethods.map((method, index) => (
            <div key={index} className="w-16 h-16 relative">
              <Image src={`/images/${method}.svg`} alt={method} layout="fill" objectFit="contain" />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {cryptoAssets.map((asset, index) => (
            <div key={index} className="w-16 h-16 relative">
              <Image src={`/images/${asset}.svg`} alt={asset} layout="fill" objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;


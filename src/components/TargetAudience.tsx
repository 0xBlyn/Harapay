import React from 'react';

const audiences = [
  { title: 'Web2 enterprises', description: 'We provide you with the crypto onboarding toolkit you need to start tapping into a growing web3 market.' },
  { title: 'High risk Industries', description: 'Our payment solution is optimized to support high-risk e-commerce ventures.' },
  { title: 'Web3 games', description: 'We empower your play-to-earn game to realize your full economic potential without breaking the gaming experience.' },
  { title: 'Defi platforms', description: 'We help your DeFi project put your financial innovation front and center, while we handle the more mundane "fiat payments" part.' },
  { title: 'NFT marketplaces', description: 'We allow NFT Marketplaces to focus on the experience of actually creating and trading NFTs, instead of how to buy crypto to pay for them.' }
];

const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-4">
          Support for all businesses, crypto native or not
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">Who is it for?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;


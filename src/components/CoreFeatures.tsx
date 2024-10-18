import React from 'react';
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";

const audiences = [
  { title: 'Wallet', description: 'A USSD-based Crypto wallet management system which enables token transactions.' },
  { title: 'USSD Integration', description: 'A local bank & mobile money service integrated platform to enable fast fiat transactions.' },
  { title: 'Authentication', description: 'A hashgraph distributed ledger technology with additional PIN-based authentication.' },
  { title: 'Security and Lower Transaction Fees', description: 'Complete your transactions safely and enjoy low fees while doing it.' },
  { title: 'NFT Trading', description: 'Get to trade and mint your favorite NFTs via USSD. Coming Soon!' },
  { title: 'DeFi Integration', description: 'Interating your favorites and making it a lot easier. Coming Soon!' }
];

const CoreFeatures: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-2">
          Our Core Features
        </h2>
        <p className="text-center overflow-hidden text-xl text-gray-400 dark:text-gray-300 mb-12">What we are offering?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <MagicCard
              key={index}
              className="h-full min-h-[11rem] transition-all duration-300 hover:shadow-xl"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">{audience.description}</p>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;

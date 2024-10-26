import React from 'react';
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import { Icon } from '@iconify/react';

const audiences = [
  { 
    title: 'Wallet', 
    description: 'A USSD-based Crypto wallet management system which enables token transactions.',
    icon: 'mdi:wallet-outline'
  },
  { 
    title: 'USSD Integration', 
    description: 'A local bank & mobile money service integrated platform to enable fast fiat transactions.',
    icon: 'mdi:cellphone-link'
  },
  { 
    title: 'Authentication', 
    description: 'A hashgraph distributed ledger technology with additional PIN-based authentication.',
    icon: 'mdi:shield-lock-outline'
  },
  { 
    title: 'Security & Lower Transaction Fees', 
    description: 'Complete your transactions safely and enjoy low fees while doing it.',
    icon: 'mdi:security'
  },
  { 
    title: 'NFT Trading', 
    description: 'Get to trade and mint your favorite NFTs via USSD. Coming Soon!',
    icon: 'ri:nft-fill'
  },
  { 
    title: 'DeFi Integration', 
    description: 'Interating your favorites and making it a lot easier. Coming Soon!',
    icon: 'ri:currency-line'
  }
];

const CoreFeatures: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-2">
          Core Features
        </h2>
        <p className="text-center lg:max-w-[60%] mx-auto text-gray-500 dark:text-gray-400 mb-7">Explore why our product stands out: adaptability, durability, and innovation. Enjoy reliable customer support and precision in every detail.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {audiences.map((audience, index) => (
            <MagicCard
              key={index}
              className="h-full bg-white transition-all duration-300 hover:shadow-xl"
              gradientColor={theme === "dark" ? "#262626" : "#ffffff"}
            >
              <div className="p-4 flex flex-col h-full">
                <div className="flex items-center">
                  <Icon 
                    icon={audience.icon} 
                    width="60" 
                    height="60" 
                    color="#9E1F64"
                    className="mr-3"
                  />
                  <h3 className="text-base font-semibold">{audience.title} <br/><p className="text-gray-600 font-normal dark:text-gray-300 text-sm">{audience.description}</p></h3>
                </div>
                
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;

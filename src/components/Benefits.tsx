import React from 'react';
import { LineChartIcon, LightningBoltIcon, LayersIcon, HeadsetIcon, LockClosedIcon } from '@radix-ui/react-icons';

const benefits = [
  { title: 'New revenue streams', description: 'Unlock new opportunities for your business', Icon: LineChartIcon },
  { title: 'Lightning-fast transactions', description: 'Process payments quickly and efficiently', Icon: LightningBoltIcon },
  { title: 'Seamless flow', description: 'Provide a smooth experience for your users', Icon: LayersIcon },
  { title: 'Outstanding support', description: '24/7 customer support for your needs', Icon: HeadsetIcon },
  { title: 'Security by design', description: 'Built with top-notch security measures', Icon: LockClosedIcon }
];

const BenefitCard: React.FC<{ title: string; description: string; Icon: React.ElementType }> = ({ title, description, Icon }) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
    <div className="text-brand mb-4">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          A friendly, full-stack crypto toolkit for business
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

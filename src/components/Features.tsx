import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-4">
          One free integration, two powerful ramps
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">Making crypto onboarding invisible</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Fiat to crypto on-ramp</h3>
            <p className="text-gray-600 dark:text-gray-300">Onboard new users without hassle with our end-to-end, non-custodial on-ramp.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Crypto to fiat off-ramp</h3>
            <p className="text-gray-600 dark:text-gray-300">Give users the freedom to move back to fiat in just a few clicks with our truly global off-ramp.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;


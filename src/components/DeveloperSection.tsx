import React from 'react';

const DeveloperSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Just a few lines of code
        </h2>
        <div className="bg-gray-800 rounded-lg p-6 overflow-x-auto">
          <pre className="text-green-400">
            <code>
              {`import { MyXspend } from '@myxspend/sdk';

const myxspend = new MyXspend({
  apiKey: 'YOUR_API_KEY',
  environment: 'production'
});

// Initialize the widget
myxspend.initialize();

// Open the widget
myxspend.open();`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;


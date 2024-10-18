import React, { ReactNode } from 'react';

interface BentoCardProps {
  className?: string;
  children: ReactNode;
}

export const BentoCard: React.FC<BentoCardProps> = ({ className, children }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export const BentoGrid: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
};
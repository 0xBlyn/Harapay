"use client";

import React, { ReactNode } from 'react';

export interface AnimatedListProps {
  className?: string;
  children: ReactNode;
}

export const AnimatedList: React.FC<AnimatedListProps> = ({ className, children }) => {
  return (
    <ul className={`space-y-2 ${className}`}>
      {React.Children.map(children, (child, index) => (
        <li key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
          {child}
        </li>
      ))}
    </ul>
  );
};

import React from 'react';

interface TweetCardProps {
  className?: string;
}

export const TweetCard: React.FC<TweetCardProps> = ({ className }) => {
  return <div className={className}>Tweet Card Placeholder</div>;
};
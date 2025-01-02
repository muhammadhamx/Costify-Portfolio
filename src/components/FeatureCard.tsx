import React from 'react';
import { cn } from '../utils/cn';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

export function FeatureCard({ icon, title, description, className, style }: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition",
        "transform hover:scale-105 hover:-translate-y-1",
        className
      )}
      style={style}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
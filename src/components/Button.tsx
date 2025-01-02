import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', icon, children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-8 py-3 rounded-lg flex items-center gap-2 transition transform hover:scale-105',
        'animate-fadeIn hover:-translate-y-0.5 active:translate-y-0',
        variant === 'primary' 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50',
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
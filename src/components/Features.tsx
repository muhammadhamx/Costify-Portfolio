import React from 'react';
import { BarChart3, PieChart, Target, Calendar, Lock, Plus } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const features = [
    {
      icon: <BarChart3 className="text-blue-500" size={24} />,
      title: "Monthly Expense Charts",
      description: "Visualize your spending patterns with interactive charts and graphs"
    },
    {
      icon: <Plus className="text-blue-500" size={24} />,
      title: "Quick Expense Entry",
      description: "Add expenses on the go - both spent and upcoming payments"
    },
    {
      icon: <PieChart className="text-blue-500" size={24} />,
      title: "Category Management",
      description: "Organize expenses by categories for better tracking and analysis"
    },
    {
      icon: <Target className="text-blue-500" size={24} />,
      title: "Monthly Goals",
      description: "Set and track your monthly expense targets effectively"
    },
    {
      icon: <Calendar className="text-blue-500" size={24} />,
      title: "Monthly Insights",
      description: "Get detailed insights and analytics of your monthly spending"
    },
    {
      icon: <Lock className="text-blue-500" size={24} />,
      title: "Secure Lock Screen",
      description: "Keep your financial data private with built-in security"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-12 animate-slideDown">
        Powerful Features for Smart Expense Management
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            className="animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
      </div>
    </section>
  );
}
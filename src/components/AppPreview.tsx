import React from 'react';
import { DollarSign, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export function AppPreview() {
  const handleDownload = () => {
    window.location.href = 'https://drive.google.com/file/d/1hBKngkqDXVmxyrnkw-bpYZaHB2JY7VhZ/view?usp=sharing';
  };

  return (
    <section className="bg-gradient-to-br from-primary-teal to-primary-orange text-white py-16 mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Start Saving Today</h2>
            <p className="text-white/90 mb-8">
              Join thousands of users who are already managing their expenses smarter with Costify
            </p>
          </div>

          <div className="relative group animate-slideUp">
            <img
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80"
              alt="App Preview"
              className="rounded-lg shadow-2xl mb-8 transition transform group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-primary-teal opacity-0 group-hover:opacity-10 transition rounded-lg" />
          </div>

          <Button
            variant="primary"
            className="bg-white text-black  mx-auto animate-bounce hover:bg-white/90"
            icon={<DollarSign size={20} />}
            onClick={handleDownload}
          >
            Start Managing Your Expenses
            <ArrowRight size={20} />
          </Button>

          <div className="mt-16 text-white/80 text-sm">
            © {new Date().getFullYear()} Costify. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}

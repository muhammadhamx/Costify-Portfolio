import React from 'react';
import { FileDown, Mail } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';

export function Header() {
  const handleDownload = () => {
    window.location.href = 'https://drive.google.com/file/d/1hBKngkqDXVmxyrnkw-bpYZaHB2JY7VhZ/view?usp=sharing';
  };

  const handleGetCode = () => {
    window.location.href = 'https://wa.me/923061170448';
  };

  return (
    <header className="container mx-auto px-4 py-8 md:py-16 text-center">
      <div className="animate-fadeIn">
        <Logo />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-teal mb-6 animate-slideDown">
          Costify
          <span className="text-primary-orange animate-pulse">.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slideUp">
          Take control of your finances with our intelligent expense management solution
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="primary" 
            icon={<FileDown size={20} />}
            onClick={handleDownload}
            className="bg-primary-teal hover:bg-primary-teal/90"
          >
            Download Now
          </Button>
          <Button 
            variant="outline" 
            icon={<Mail size={20} />}
            onClick={handleGetCode}
            className="border-primary-teal text-primary-teal hover:bg-primary-teal/10"
          >
            Get Confirmation Code
          </Button>
        </div>
      </div>
    </header>
  );
}

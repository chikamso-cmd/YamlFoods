import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
      <span className="hover:text-gray-700 cursor-pointer">Home</span>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <span className="hover:text-gray-700 cursor-pointer">My Basket</span>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <span className="font-semibold text-gray-900">Checkout</span>
    </nav>
  );
};

export default Breadcrumbs;
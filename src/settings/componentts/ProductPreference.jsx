import React, { useState } from "react";
import { ChevronLeft, ShoppingBag, ChevronDown } from "lucide-react";
import {Link} from 'react-router-dom'

// --- Reusable UI Components Internal to this file for single-file portability ---

// interface ToggleProps {
//   checked: boolean;
//   onChange: (checked: boolean) => void;
// }

const Toggle = ({ checked, onChange }) => {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
        checked ? "bg-green-500" : "bg-gray-300"
      }`}
      role="switch"
      aria-checked={checked}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          checked ? "translate-x-[22px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
};

// interface SectionCardProps {
//   title?: string;
//   icon?: React.ReactNode;
//   children: React.ReactNode;
//   className?: string;
// }

const SectionCard = ({
  title,
  icon,
  children,
  className = "",
}) => (
  <div
    className={`bg-white rounded-xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-gray-100 ${className}`}
  >
    {title && (
      <div className="flex items-center gap-2 mb-4">
        {icon && <span className="text-gray-500">{icon}</span>}
        <h3 className="text-[15px] font-bold text-gray-800">{title}</h3>
      </div>
    )}
    {children}
  </div>
);

// --- Main Screen Component ---

const ProductPreferenceScreen = () => {
  // State
  const [category, setCategory] = useState  ("");
  const [lowStockNotif, setLowStockNotif] = useState (true);
  const [lowStockThreshold, setLowStockThreshold] = useState  ("10");
  const [autoHide, setAutoHide] = useState  (false);
  const [expiryNotif, setExpiryNotif] = useState  (true);
  const [expiryDays, setExpiryDays] = useState ("7");

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] text-gray-900 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200 shrink-0 sticky top-0 z-10">
       <Link to="/storekeeper/settings">
       
        <button className="p-1 -ml-1 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button></Link>
        <h1 className="text-[17px] font-bold text-gray-800">
          Product Preference
        </h1>
        <div className="w-6" /> {/* Spacer for centering title */}
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4 pb-24">
        {/* Default Settings Section */}
        <SectionCard
          title="Default Settings"
          icon={<ShoppingBag size={20} className="text-gray-500" />}
        >
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-gray-700">
              Default Category for a new Product
            </label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 text-gray-500 text-sm rounded-lg px-3 py-3 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="grocery">Grocery</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Stock Management Section */}
        <SectionCard title="Stock Management">
          <div className="space-y-6">
            {/* Low Stock Notifications */}
            <div className="flex items-center justify-between border-b border-gray-50 pb-4">
              <div className="pr-4">
                <h4 className="text-[14px] font-medium text-gray-800">
                  Low Stock Notifications
                </h4>
                <p className="text-[12px] text-gray-500 mt-0.5">
                  Get alerts when products run low
                </p>
              </div>
              <Toggle checked={lowStockNotif} onChange={setLowStockNotif} />
            </div>

            {/* Low Stock Threshold */}
            <div className="border-b border-gray-50 pb-4">
              <label className="text-[13px] font-medium text-gray-800 block mb-2">
                Low Stock Threshold
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={lowStockThreshold}
                  onChange={(e) => setLowStockThreshold(e.target.value)}
                  className="w-full max-w-[200px] border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                />
                <span className="text-[13px] text-gray-800 font-medium">
                  Units
                </span>
              </div>
              <p className="text-[11px] text-gray-500 mt-1.5">
                Notify when stock falls bellow this number
              </p>
            </div>

            {/* Auto-Hide Out of Stock */}
            <div className="flex items-center justify-between">
              <div className="pr-4">
                <h4 className="text-[14px] font-medium text-gray-800">
                  Auto-Hide Out of Stock Items
                </h4>
                <p className="text-[12px] text-gray-500 mt-0.5">
                  Hide products with zero stock from catalog
                </p>
              </div>
              <Toggle checked={autoHide} onChange={setAutoHide} />
            </div>
          </div>
        </SectionCard>

        {/* Expiry Management Section */}
        <SectionCard title="Expiry Management">
          <div className="space-y-6">
            {/* Expiry Date Notifications */}
            <div className="flex items-center justify-between border-b border-gray-50 pb-4">
              <div className="pr-4">
                <h4 className="text-[14px] font-medium text-gray-800">
                  Expiry Date Notifications
                </h4>
                <p className="text-[12px] text-gray-500 mt-0.5">
                  Alert before products expire
                </p>
              </div>
              <Toggle checked={expiryNotif} onChange={setExpiryNotif} />
            </div>

            {/* Notify before Expiry */}
            <div>
              <label className="text-[13px] font-medium text-gray-800 block mb-2">
                Notify before Expiry
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={expiryDays}
                  onChange={(e) => setExpiryDays(e.target.value)}
                  className="w-full max-w-[200px] border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                />
                <span className="text-[13px] text-gray-800 font-medium">
                  days
                </span>
              </div>
              <p className="text-[11px] text-gray-500 mt-1.5">
                Get notified this many days before expiry
              </p>
            </div>
          </div>
        </SectionCard>
      </main>

      {/* Footer */}
      <footer className="shrink-0 p-4 bg-[#F8F9FA] space-y-3 pb-8">
        <button className="w-full bg-[#4CAF50] hover:bg-[#43a047] active:bg-[#388e3c] text-white font-semibold py-2 rounded-lg text-[15px] shadow-sm transition-colors">
          Save Preferences
        </button>
        <button className="w-full bg-[#E6E6E6] hover:bg-[#dcdcdc] active:bg-[#d0d0d0] text-gray-800 font-semibold py-2 rounded-lg text-[15px] transition-colors">
          Cancel
        </button>
      </footer>
    </div>
  );
};

export default ProductPreferenceScreen;

import React, { useState } from 'react';
import { ChevronLeft, Truck, Bell, ChevronDown } from 'lucide-react';
import { Switch } from '../ui/Switch';
import { SectionCard } from '../ui/SectionCard';
import {Link} from 'react-router-dom'

// -- Types --

// interface DeliveryOption {
//   id: string;
//   label: string;
//   sublabel: string;
//   enabled: boolean;
// }

// interface NotificationSetting {
//   id: string;
//   label: string;
//   sublabel: string;
//   enabled: boolean;
// }

// -- Main Component --

const OrderManagement = () => {
  // State for Delivery Options
  const [deliveryOptions, setDeliveryOptions] = useState([
    { id: 'standard', label: 'Standard Delivery', sublabel: '2-3 business days', enabled: true },
    { id: 'express', label: 'Express Delivery', sublabel: 'Same day or next day', enabled: true },
    { id: 'scheduled', label: 'Scheduled Delivery', sublabel: 'Customer picks date & time', enabled: true },
    { id: 'pickup', label: 'In-Store Pickup', sublabel: 'Pickup from store location', enabled: true },
  ]);

  // State for Notification Settings
  const [notifications, setNotifications] = useState([
    { id: 'new-order', label: 'New Order Received', sublabel: 'Instant notification for new orders', enabled: true },
    { id: 'processing', label: 'Order Processing', sublabel: 'When order is being prepared', enabled: true },
    { id: 'ready', label: 'Ready for Pickup/Delivery', sublabel: 'Order ready to be dispatched', enabled: true },
    { id: 'delivered', label: 'Order Delivered', sublabel: 'Confirmation of delivery', enabled: false }, // Default off as per image
  ]);

  // State for Cancellation Policy
  const [allowCancellations, setAllowCancellations] = useState(true);
  const [timeWindow, setTimeWindow] = useState('30');
  const [cancellationFee, setCancellationFee] = useState('10');
  const [refundTime, setRefundTime] = useState('3-5 business days');

  // -- Handlers --

  const toggleDelivery = (id) => {
    setDeliveryOptions(prev => prev.map(opt => 
      opt.id === id ? { ...opt, enabled: !opt.enabled } : opt
    ));
  };

  const toggleNotification = (id) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === id ? { ...notif, enabled: !notif.enabled } : notif
    ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20 sm:pb-8 sm:rounded-2xl sm:overflow-hidden sm:shadow-lg">
      
      {/* Header */}
      <header className="bg-white px-4 py-4 flex items-center shadow-sm sticky top-0 z-10">
        <Link to="/storekeeper/settings">
        <button className="text-gray-500 hover:text-gray-700 p-1 -ml-1">
          <ChevronLeft className="w-6 h-6" />
        </button>
        </Link>
        <h1 className="flex-1 text-center text-lg font-bold text-gray-800 mr-5">
          Order Management
        </h1>
      </header>

      {/* Content Scrollable Area */}
      <main className="flex-1 p-4 space-y-4">
        
        {/* Delivery Options Section */}
        <SectionCard>
          <div className="flex items-center gap-2 mb-4">
            <Truck className="w-5 h-5 text-gray-500" />
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Delivery Options</h2>
          </div>
          
          <div className="space-y-6">
            {deliveryOptions.map((option) => (
              <div key={option.id} className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800">{option.label}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{option.sublabel}</span>
                </div>
                <Switch 
                  checked={option.enabled} 
                  onChange={() => toggleDelivery(option.id)} 
                />
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Order Notification Settings Section */}
        <SectionCard>
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-gray-500" />
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Order Notification Settings</h2>
          </div>

          <div className="space-y-6">
            {notifications.map((notif) => (
              <div key={notif.id} className="flex items-center justify-between">
                <div className="flex flex-col max-w-[80%]">
                  <span className="text-sm font-semibold text-gray-800">{notif.label}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{notif.sublabel}</span>
                </div>
                <Switch 
                  checked={notif.enabled} 
                  onChange={() => toggleNotification(notif.id)} 
                />
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Cancellation Policy Section */}
        <SectionCard>
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-gray-500" />
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Cancellation Policy</h2>
          </div>

          <div className="space-y-6">
            {/* Toggle Row */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">Allow Order Cancellations</span>
                <span className="text-xs text-gray-500 mt-0.5">Let customers cancel orders</span>
              </div>
              <Switch 
                checked={allowCancellations} 
                onChange={setAllowCancellations} 
              />
            </div>

            <hr className="border-gray-100" />

            {/* Time Window Input */}
            <div>
              <label htmlFor="timeWindow" className="block text-xs font-bold text-gray-700 mb-2">
                Cancellation Time Window
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="timeWindow"
                  type="number"
                  value={timeWindow}
                  onChange={(e) => setTimeWindow(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 shadow-sm"
                  disabled={!allowCancellations}
                />
                <span className="text-sm text-gray-600 whitespace-nowrap">minutes</span>
              </div>
              <p className="mt-1.5 text-[10px] text-gray-500">
                Customers can cancel within this time after placing order
              </p>
            </div>

            {/* Fee Input */}
            <div>
              <label htmlFor="cancellationFee" className="block text-xs font-bold text-gray-700 mb-2">
                Cancellation Fee
              </label>
              <input
                id="cancellationFee"
                type="number"
                value={cancellationFee}
                onChange={(e) => setCancellationFee(e.target.value)}
                className="w-full bg-white border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 shadow-sm"
                disabled={!allowCancellations}
              />
              <p className="mt-1.5 text-[10px] text-gray-500">
                Fee charged for the late cancellations (after time window)
              </p>
            </div>

            {/* Refund Processing Time Dropdown */}
            <div className="relative">
              <label htmlFor="refundTime" className="block text-xs font-bold text-gray-700 mb-2">
                Refund Processing Time
              </label>
              <div className="relative">
                <select
                  id="refundTime"
                  value={refundTime}
                  onChange={(e) => setRefundTime(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 pr-10 shadow-sm appearance-none cursor-pointer"
                  disabled={!allowCancellations}
                >
                  <option>1-2 business days</option>
                  <option>3-5 business days</option>
                  <option>5-7 business days</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-1.5 text-[10px] text-gray-500">
                How long refunds take to process
              </p>
            </div>
          </div>
        </SectionCard>
      </main>

      {/* Footer Actions */}
      <footer className="bg-gray-50 p-4 pt-2 pb-6 space-y-3  sm:static sm:bg-transparent">
        <button 
          className="w-full bg-[#4CAF50] hover:bg-[#43a047] text-white font-semibold py-3.5 px-4 rounded-lg shadow-sm transition-colors duration-200 text-sm"
        >
          Save Settings
        </button>
        <button 
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3.5 px-4 rounded-lg transition-colors duration-200 text-sm"
        >
          Cancel
        </button>
      </footer>
    </div>
  );
};

export default OrderManagement;
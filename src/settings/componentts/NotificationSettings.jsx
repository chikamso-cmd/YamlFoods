import React, { useState } from "react";
import {
  ChevronLeft,
  Bell,
  Mail,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import { Switch } from "../ui/NotificationSwitch";
import { Link } from "react-router-dom";

// interface ToggleItemProps {
//   title: string;
//   description: string;
//   checked: boolean;
//   onChange: (val: boolean) => void;
//   icon?: React.ReactNode;
//   iconBgColor?: string;
//   borderBottom?: boolean;
// }

const ToggleItem = ({
  title,
  description,
  checked,
  onChange,
  icon,
  iconBgColor = "bg-gray-100",
  borderBottom = true,
}) => {
  return (
    <div
      className={`flex items-center justify-between py-4 ${
        borderBottom ? "border-b border-gray-100" : ""
      }`}
    >
      <div className="flex items-center gap-4 flex-1">
        {icon && (
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${iconBgColor}`}
          >
            {icon}
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-900">{title}</span>
          <span className="text-xs text-gray-500 mt-0.5">{description}</span>
        </div>
      </div>
      <div className="pl-4">
        <Switch checked={checked} onChange={onChange} />
      </div>
    </div>
  );
};

const SectionHeader = ({ title, icon }) => (
  <div className="flex items-center gap-2 mb-2 mt-2">
    {icon}
    <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wide">
      {title}
    </h2>
  </div>
);

const NotificationSettings = () => {
  // State Management
  const [channels, setChannels] = useState({
    email: true,
    sms: false,
  });

  const [orderAlerts, setOrderAlerts] = useState({
    newOrder: true,
    processing: true,
    ready: true,
    delivered: false,
    cancelled: true,
  });

  const [reports, setReports] = useState({
    sales: true,
    inventory: true,
  });

  const [reportConfig, setReportConfig] = useState({
    day: "Monday",
    time: "09:00",
  });

  const handleSave = () => {
    alert("Settings Saved Successfully!");
  };

  const handleCancel = () => {
    // Reset or navigate back logic here
    console.log("Cancelled");
  };

  return (
    <div className="flex flex-col h-full bg-[#FAFAFA]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 h-14 flex items-center justify-between shadow-sm">
        <Link to="/storekeeper/settings">
          <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
            <ChevronLeft size={20} />
          </button>
        </Link>
        <h1 className="text-base font-bold text-gray-800">Notifications</h1>
        <div className="w-8" /> {/* Spacer for centering */}
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-2 lg:p-6 md:p-6 pb-10 space-y-6">
        {/* Notification Channels Section */}
        <section className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-gray-100">
          <SectionHeader
            title="Notification Channels"
            icon={<Bell size={16} className="text-gray-600" />}
          />

          <ToggleItem
            title="Email Notification"
            description="Sarahjohnson@greenvalley.com"
            checked={channels.email}
            onChange={(val) => setChannels((prev) => ({ ...prev, email: val }))}
            icon={<Mail size={20} className="text-blue-500" />}
            iconBgColor="bg-blue-50"
          />

          <ToggleItem
            title="SMS Notifications"
            description="+ 1 234-567-8900"
            checked={channels.sms}
            onChange={(val) => setChannels((prev) => ({ ...prev, sms: val }))}
            icon={<MessageSquare size={20} className="text-green-600" />}
            iconBgColor="bg-green-50"
            borderBottom={false}
          />
        </section>

        {/* Order Status Alerts Section */}
        <section className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-gray-100">
          <SectionHeader title="Order Status Alerts" />

          <div className="flex flex-col">
            <ToggleItem
              title="New Order Received"
              description="Instant notification for new orders"
              checked={orderAlerts.newOrder}
              onChange={(val) =>
                setOrderAlerts((prev) => ({ ...prev, newOrder: val }))
              }
            />
            <ToggleItem
              title="Order Processing"
              description="When order is being prepared"
              checked={orderAlerts.processing}
              onChange={(val) =>
                setOrderAlerts((prev) => ({ ...prev, processing: val }))
              }
            />
            <ToggleItem
              title="Order Ready"
              description="Ready for pickup or delivery"
              checked={orderAlerts.ready}
              onChange={(val) =>
                setOrderAlerts((prev) => ({ ...prev, ready: val }))
              }
            />
            <ToggleItem
              title="Order Delivered"
              description="Successfully delivered to customer"
              checked={orderAlerts.delivered}
              onChange={(val) =>
                setOrderAlerts((prev) => ({ ...prev, delivered: val }))
              }
            />
            <ToggleItem
              title="Order Cancelled"
              description="Customer cancelled order"
              checked={orderAlerts.cancelled}
              onChange={(val) =>
                setOrderAlerts((prev) => ({ ...prev, cancelled: val }))
              }
              borderBottom={false}
            />
          </div>
        </section>

        {/* Weekly Summary Reports Section */}
        <section className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-gray-100">
          <SectionHeader title="Weekly Summary Reports" />

          <div className="flex flex-col mb-4">
            <ToggleItem
              title="Sales Report"
              description="Revenue, orders, top products"
              checked={reports.sales}
              onChange={(val) =>
                setReports((prev) => ({ ...prev, sales: val }))
              }
            />
            <ToggleItem
              title="Inventory Report"
              description="Stock levels, low items"
              checked={reports.inventory}
              onChange={(val) =>
                setReports((prev) => ({ ...prev, inventory: val }))
              }
            />
          </div>

          {/* Report Configuration Inputs */}
          <div className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 ml-1">
                Report day
              </label>
              <div className="relative">
                <select
                  value={reportConfig.day}
                  onChange={(e) =>
                    setReportConfig((prev) => ({
                      ...prev,
                      day: e.target.value,
                    }))
                  }
                  className="w-full appearance-none bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all cursor-pointer"
                >
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 ml-1">
                Report Time
              </label>
              <input
                type="time"
                value={reportConfig.time}
                onChange={(e) =>
                  setReportConfig((prev) => ({ ...prev, time: e.target.value }))
                }
                className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Footer Actions */}
      <div className=" bg-white border-t border-gray-200 p-4 space-y-3 z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button
          onClick={handleSave}
          className="w-full bg-green-500 hover:bg-primary-600 text-white text-sm font-semibold py-3.5 rounded-xl shadow-sm transition-all active:scale-[0.98]"
        >
          Save Settings
        </button>
        <button
          onClick={handleCancel}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-semibold py-3.5 rounded-xl transition-all active:scale-[0.98]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;

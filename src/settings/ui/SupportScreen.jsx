import React, { useState } from "react";
import {
  ChevronLeft,
  Mail,
  AlertCircle,
  Phone,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "./Icons";
import {Link} from 'react-router-dom'


// --- Data ---
const supportOptions = [
  {
    id: "contact",
    title: "Contact Support",
    subtitle: "Get help from our support team",
    icon: Mail,
    iconBgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "report",
    title: "Report a Problem",
    subtitle: "Report bugs or issues",
    icon: AlertCircle,
    iconBgColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: "call",
    title: "Call Support",
    subtitle: "+ 1 234-567-8900",
    icon: Phone,
    iconBgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: "chat",
    title: "Live Chat",
    subtitle: "Chat with us now",
    icon: MessageSquare,
    iconBgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
];

const faqItems = [
  {
    id: "1",
    question: "How do I add new products to my inventory?",
    answer:
      'Go to the product tab and click the "+" button. Fill in product details including name, price, category, and stock quantity. You can also add product variants for different sizes or weights.',
  },
  {
    id: "2",
    question: "How do I manage incoming orders?",
    answer:
      "Navigate to the orders screen where you can view all orders. Tap on any order to see details, update status (pending, in progress, delivered), and manage delivery information.",
  },
  {
    id: "3",
    question: "Can I set up delivery zones and fees?",
    answer:
      "Yes! Go to settings - Order Management - Delivery Options. You can configure delivery zones, set fees, enable express delivery, and manage in-store pickup options.",
  },
  {
    id: "4",
    question: "How do I track low stock items?",
    answer:
      "Enable stock notifications in settings - Product preference. Set your low stock threshold (e.g., 10 units) and you'll receive alerts when products run low.",
  },
  {
    id: "5",
    question: "How do I change store operating hours?",
    answer:
      "Go to settings - Store Information - Operating Hours. You can set different hours for each day of the week and mark days as closed.",
  },
  {
    id: "6",
    question: "Can customers cancel orders?",
    answer:
      "Yes, you can configure cancellation policies in settings - Order Management - Cancellation Policy. Set the time window, fees, and refund processing times.",
  },
];

// --- Sub-Components ---

const SupportCard = ({ option }) => {
  return (
    <button className="w-full flex items-center p-4 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors text-left group">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${option.iconBgColor} ${option.iconColor} mr-4 flex-shrink-0 group-hover:scale-110 transition-transform`}
      >
        <option.icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-900">{option.title}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{option.subtitle}</p>
      </div>
    </button>
  );
};

const FAQItemComponent = ({ item, isOpen, onToggle, isLast }) => {
  return (
    <div className={`border-gray-100 bg-white ${!isLast ? "border-b" : ""}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between py-4 text-left focus:outline-none"
      >
        <span className="text-sm font-semibold text-gray-800 pr-4 leading-tight">
          {item.question}
        </span>
        <span className="flex-shrink-0 text-gray-400 mt-0.5">
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-xs text-gray-600 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---

const SupportScreen = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState();

  const handleToggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[480px] bg-white sm:rounded-3xl shadow-xl overflow-hidden min-h-screen sm:min-h-0 sm:h-[90vh] flex flex-col relative">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
        <Link to='/storekeeper/settings'>
            <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
              <ChevronLeft className="w-5 h-5" />
            </button>
        </Link>
        <h1 className="text-base font-bold text-gray-900 absolute left-1/2 transform -translate-x-1/2">
          Security & Privacy
        </h1>
        <div className="w-9"></div> {/* Spacer to balance the layout */}
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">
        <div className="p-4 space-y-6">
          {/* Support Options List */}
          <div className="space-y-3">
            {supportOptions.map((option) => (
              <SupportCard key={option.id} option={option} />
            ))}
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 px-1">
              <HelpCircle className="w-5 h-5 text-gray-500" />
              <h2 className="text-sm font-bold text-gray-800">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="bg-white rounded-xl px-1">
              {faqItems.map((item, index) => (
                <FAQItemComponent
                  key={item.id}
                  item={item}
                  isOpen={openFAQIndex === index}
                  onToggle={() => handleToggleFAQ(index)}
                  isLast={index === faqItems.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Need More Help Banner */}
          <div className="bg-[#eff8f1] rounded-xl p-5 mb-6">
            <h3 className="text-sm font-bold text-gray-900 mb-2">
              Need More Help?
            </h3>
            <p className="text-xs text-gray-600 mb-3 leading-relaxed">
              Check out our comprehensive documentation and video tutorials
            </p>
            <button className="flex items-center text-xs font-bold text-green-600 hover:text-green-700 transition-colors group">
              Visit Help Center
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportScreen;

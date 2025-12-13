import React from 'react';
import { Smartphone, Monitor, Tablet, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
// import { DeviceSession } from '../types';

// interface SessionItemProps {
//   session: DeviceSession;
// }

export const SessionItem = ({ session }) => {
  const getDeviceIcon = () => {
    switch (session.type) {
      case 'mobile':
        return <Smartphone size={24} className="text-green-600" />;
      case 'desktop':
        return <Monitor size={24} className="text-sky-500" />;
      case 'tablet':
        return <Tablet size={24} className="text-sky-500" />;
      default:
        return <Smartphone size={24} className="text-gray-500" />;
    }
  };

  const getIconBgColor = () => {
    switch (session.type) {
      case 'mobile':
        return 'bg-green-100';
      case 'desktop':
      case 'tablet':
        return 'bg-sky-100';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/50 mb-4 last:mb-0">
      {/* Device Icon Box */}
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${getIconBgColor()}`}>
        {getDeviceIcon()}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate">
              {session.deviceName}
            </h3>
            {session.isCurrent && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">
                Current
              </span>
            )}
          </div>
          {!session.isCurrent && (
            <button className="text-red-500 text-xs font-semibold hover:text-red-600 transition-colors">
              Logout
            </button>
          )}
        </div>

        <div className="mt-1 space-y-1">
          <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm">
            <MapPin size={14} className="shrink-0" />
            <span className="truncate">{session.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm">
            <Calendar size={14} className="shrink-0" />
            <span>{session.lastActive}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
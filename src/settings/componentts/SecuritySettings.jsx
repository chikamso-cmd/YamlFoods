import React, { useState } from "react";
import { ChevronLeft, MessageSquare, Shield, Lock } from "lucide-react";
import { Toggle } from "../ui/Toggle";
import { SessionItem } from "../ui/Security";
import {Link} from 'react-router-dom'
// import { DeviceSession } from "./types";

const sessions = [
  {
    id: "1",
    deviceName: "iphone 14 Pro",
    type: "mobile",
    location: "Awka, Anambra Nigeria",
    lastActive: "2 mins ago",
    isCurrent: true,
  },
  {
    id: "2",
    deviceName: "MacBook Pro",
    type: "desktop",
    location: "Awka, Anambra Nigeria",
    lastActive: "1 hour ago",
    isCurrent: false,
  },
  {
    id: "3",
    deviceName: "ipad Air",
    type: "tablet",
    location: "Awka, Anambra Nigeria",
    lastActive: "2 days ago",
    isCurrent: false,
  },
];

const SecuritySettings= () => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center text-gray-900 font-sans">
      <div className="w-full max-w-md bg-[#F8FAFC] min-h-screen sm:min-h-0 sm:my-8 sm:shadow-xl sm:rounded-3xl sm:border border-gray-100 overflow-hidden flex flex-col">
        {/* Header */}
        <header className="px-4 py-4 flex items-center bg-white sm:bg-[#F8FAFC] sticky top-0 z-10">
          <Link to='/storekeeper/settings'>
          <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          </Link>
          <h1 className="flex-1 text-center font-bold text-lg text-gray-900 mr-8">
            Security & Privacy
          </h1>
        </header>

        <main className="flex-1 px-2 md:px-4 lg:px-4 pb-6 overflow-y-auto">
          {/* Feedback Icon Float */}
          <div className="flex justify-end mb-2 mt-2">
            <MessageSquare className="w-5 h-5 text-gray-700" />
          </div>

          {/* Notification Channels Card */}
          <section className="bg-white rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Shield className="w-5 h-5 text-gray-500" />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-gray-900 text-[15px] leading-tight">
                  Notification Channels
                </h2>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">
                      {is2FAEnabled ? "2FA Enabled" : "2FA Disabled"}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">
                      Add an extra layer of security
                    </p>
                  </div>
                  <Toggle enabled={is2FAEnabled} onChange={setIs2FAEnabled} />
                </div>
              </div>
            </div>
          </section>

          {/* Active Sessions Card */}
          <section className="bg-white rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-5">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-gray-500" />
              <h2 className="font-bold text-gray-900 text-[15px]">
                Active Sessions
              </h2>
            </div>

            <div className="space-y-3">
              {sessions.map((session) => (
                <SessionItem key={session.id} session={session} />
              ))}
            </div>

            <button className="w-full mt-5 bg-red-50 text-red-500 font-semibold py-3.5 rounded-xl text-sm hover:bg-red-100 transition-colors">
              Logout from All Other Devices
            </button>
          </section>

          {/* Privacy Card */}
          <section className="bg-white rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <h2 className="font-bold text-gray-900 text-[15px] mb-4">
              Privacy
            </h2>

            <div className="cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-2 rounded-lg transition-colors">
              <h3 className="text-gray-900 font-medium text-sm">
                Delete Account
              </h3>
              <p className="text-gray-500 text-xs mt-0.5">
                Permanently delete your account
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SecuritySettings;

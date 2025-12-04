import React from "react";
// import Logo from "../assets/LOGO.png";

export default function Footer() {
  return (
    <div className="bg-green-900 text-white px-9 py-5">
      {/* Footer */}
      <div className="bg-green-900 text-white p-10 grid grid-cols-4 gap-6">
        <div>
          <div className="text-xl font-bold mb-2">LOGO</div>
          <p className="text-sm">
            Your trusted online grocery store for fresh, quality products
            delivered fast.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="text-sm space-y-1">
            <li>About Us</li>
            <li>How it works</li>
            <li>Delivery Info</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Follow Us</div>
          <ul className="text-sm space-y-1">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>X (Twitter)</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact Info</div>
          <ul className="text-sm space-y-1">
            <li>Call: +234 700 123 4567</li>
            <li>support@freshmart.ng</li>
          </ul>
        </div>
      </div>

      <hr className="text-gray-500" />

      <div className="text-center text-xs py-4 text-gray-400">
        © 2025 FreshMart. All rights reserved.
      </div>
    </div>
  );
}

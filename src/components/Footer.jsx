import React from 'react';
import BackButton from "../components/BackButton";

<BackButton />

function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-4 text-sm text-gray-700 mt-10">
      © {new Date().getFullYear()} AppUnlocker. All rights reserved.
    </footer>
  );
}

export default Footer;

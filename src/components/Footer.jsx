import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353f] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Link href="/">LOGO </Link>
        </span>

        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import { Facebook, Instagram, Linkedin, X, Plus } from "lucide-react";
import Link from "next/link";

const Contacts = () => {
  return (
    <div className="fab  fab-flower">
      {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
      <div
        tabIndex={0}
        role="button"
        className="btn btn-lg btn-circle bg-black"
      >
        <Plus />
      </div>

      {/* Main Action button replaces the original button when FAB is open */}
      <button className="fab-main-action btn btn-circle btn-lg">
        <X />
      </button>

      {/* buttons that show up when FAB is open */}
      <Link
        href="https://www.instagram.com/agsckarachi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn btn-lg btn-circle">
          <Instagram />
        </button>
      </Link>

      <Link
        href="https://www.facebook.com/agsckarachii"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn btn-lg btn-circle">
          <Facebook />
        </button>
      </Link>

      <Link
        href="https://www.linkedin.com/company/adamjee-govt-science-college-karachi/?originalSubdomain=pk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn btn-lg btn-circle">
          <Linkedin />
        </button>
      </Link>
    </div>
  );
};

export default Contacts;

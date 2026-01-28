import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 z-[999]">
      <div className="container mx-auto text-center space-x-4">
        <Link to="/policies?section=privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <span>|</span>
        <Link to="/policies?section=refund-returns" className="hover:underline">
          Refund & Returns
        </Link>
        <span>|</span>
        <Link to="/policies?section=shipping-cancellation" className="hover:underline">
          Shipping & Cancellation
        </Link>
        <span>|</span>
        <Link to="/policies?section=terms-conditions" className="hover:underline">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 z-[999]">
      <div className="container mx-auto text-center">
        <Link to="/policies" className="hover:underline">
          Policies
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-center">
          <hr className="border-gray-200 dark:border-gray-700 my-4" />

        {/* Social Media Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          {/* Instagram */}
          <a
            href="https://instagram.com/altamash_ali_26"
            target="_instagram"
            rel="noopener noreferrer"
            className="flex items-center text-pink-600 hover:underline gap-2"
          >
            <FaInstagram size={20} />
            @altamash_ali_26
          </a>

          {/* WhatsApp */}
          <a
            className="flex items-center text-green-600 hover:underline gap-2"
          >
            <FaWhatsapp size={20} />
            9834588923
          </a>
        </div>

       

        {/* Designed By Text */}
        <span className="block text-center font-lobster text-xl text-gray-700 dark:text-gray-300">
          Designed By Altamash Ali Sayyad
        </span>
          <hr className="border-gray-200 dark:border-gray-700 my-4" />
      </div>
    </footer>
  );
};

export default Footer;

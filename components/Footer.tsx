import React, { useState } from 'react';
import { Spotlight } from './ui/Spotlight';
import { MagicButton } from './ui/MagicButton';

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      console.log('Subscribed:', email);
      setEmail('');
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <footer className="relative w-full dark:bg-black  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] py-20">
      <Spotlight className="top-40 left-10 md:-left-32 md:-top-20 h-full" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-b  from-neutral-400 to-yellow-100">
              OpenMind Robotics ©
            </h2>
            <ul>
              <li><a href="#" className="hover:text-1xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-b  from-neutral-400 to-yellow-100"> Address: D10S Street, Oasis Riverside, Quarter 4, Thoi Hoa Industrial Parks, Ho Chi Minh City, VietNam</a></li>
              <li><a href="#" className="hover:text-1xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-b  from-neutral-400 to-yellow-100">Phone: (+84) 333-689-700</a></li>
              <li><a href="mailto:contact@openmindrobotics.com" className="hover:text-1xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-b  from-neutral-400 to-yellow-100">Email: contact@openmindrobotics.com</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-200">
              Quick Links
            </h3>
            <ul>
              <li><a href="#" className="hover:text-1xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-200">Home</a></li>
              <li><a href="#solutions_pick_place" className="hover:text-1xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-200">About</a></li>
              <li><a href="#technology" className="hover:text-1xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-200">Services</a></li>
              <li><a href="#contact_us" className="hover:text-1xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-200">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-200">
              Subscribe to Our Newsletter
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full md:w-2/3 p-2 text-gray-800 rounded-l bg-white/10 backdrop-blur-sm border border-white/20 ${!isValidEmail ? 'border-red-500' : ''}`}
                  value={email}
                  onChange={handleEmailChange}
                />
                <MagicButton title="Subscribe" icon={undefined} position={''} />
              </div>
              {!isValidEmail && <p className="text-red-500 mt-2">Please enter a valid email address.</p>}
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-8 flex flex-wrap justify-between items-center">
          <p className="text-sm text-neutral-400">&copy; 2024 OpenMind Robotics - Embodied AI Technology for Robotics. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
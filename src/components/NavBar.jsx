import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openClose = () => setIsOpen(!isOpen);

    return (
      <nav className='fixed w-full z-50 right-1 top-4 xs:right-4 xs:top-4 md:right-8 md:top-8'>
          <div className='flex items-center justify-end px-8 '>
            <button onClick={openClose} aria-expanded={isOpen} className='p-5 bg-black/80 backdrop-blur-sm border-2  text-white rounded-3xl hover:bg-gray-700 transition-all duration-300 shadow-lg hover:cursor-pointer'>
              <span className='sr-only'>Abrir menú</span>
              <svg className='w-6 h-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M4 6h16M4 12h16M4 18h16' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/>
              </svg>
            </button>
          </div>

          <div className={`absolute left-6 right-2 md:left-auto md:right-0 md:w-auto md:mx-0 mt-2 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <ul className=" text-white bg-black/95 md:bg-black/80 rounded-3xl p-3 flex flex-col gap-x-1 gap-y-5 w-full ">
                <li className='w-full transition-all duration-300 border-l-4 border-gray-200 hover:bg-gray-200 hover:rounded-r-3xl'>
                  <a onClick={openClose} href="/" className='block w-full text-2xl xsm:text-3xl text-white py-2 px-4 rounded-xl hover:text-myDark transition-colors duration-200 '>Inicio</a>
                </li>
                <li className='w-full transition-all duration-300 border-l-4 border-gray-200 hover:bg-gray-200 hover:rounded-r-3xl'>
                  <a onClick={openClose} href="/ingenieria-civil" className='block w-full text-2xl xsm:text-3xl text-white py-2 px-4 rounded-xl hover:text-myDark transition-colors duration-200 truncate'>Ingeniería Civil</a>
                </li>
                <li className='w-full transition-all duration-300 border-l-4 border-gray-200 hover:bg-gray-200 hover:rounded-r-3xl'>
                  <a onClick={openClose} href="/ingenieria-electromecanica" className='block w-full text-2xl xsm:text-3xl text-white py-2 px-4 rounded-xl hover:text-myDark transition-colors duration-200 truncate'>Ingeniería Electromecánica</a>
                </li>
                <li className='w-full transition-all duration-300 border-l-4 border-gray-200 hover:bg-gray-200 hover:rounded-r-3xl'>
                  <a onClick={openClose} href="/ingenieria-industrial" className='block w-full text-2xl xsm:text-3xl text-white py-2 px-4 rounded-xl hover:text-myDark transition-colors duration-200 truncate'>Ingeniería Industrial</a>
                </li>
                <li className='w-full transition-all duration-300 border-l-4 border-gray-200 hover:bg-gray-200 hover:rounded-r-3xl'>
                  <a onClick={openClose} href="/mantenimiento-industrial" className='block w-full text-2xl xsm:text-3xl text-white py-2 px-4 rounded-xl hover:text-myDark transition-colors duration-200 truncate'>Mantenimiento Industrial</a>
                </li>
              </ul>
            </div>
      </nav>
    );
};

export default NavBar;
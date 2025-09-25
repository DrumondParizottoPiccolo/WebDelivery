import {useState, useRef, useEffect} from 'react';
import logo from "../assets/icons/icone_branco.png"
import { Routes, Route, Link } from "react-router-dom";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
    <header className="bg-[#206138] flex justify-between items-center h-16 sm:h-18 md:h-20 
                      px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20">
        <nav className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 
                       text-white text-xs sm:text-sm md:text-base lg:text-lg">
            <img src={logo} alt="" className='w-8 sm:w-9 md:w-10 lg:w-11 xl:w-12' />

            <Link to="/" className="hover:underline font-bold whitespace-nowrap">Home</Link>
            <div className="relative" ref={dropdownRef}>
                <button 
                    onClick={toggleDropdown}
                    className="cursor-pointer font-bold hover:underline flex items-center whitespace-nowrap">
                    Menu
                    <svg className={`ml-1 w-3 h-3 sm:w-4 sm:h-4 transform transition-transform
                     ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>

                {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-32 sm:w-36 md:w-40 bg-[#206138] rounded-md shadow-lg z-50">
                        <div className="py-1">
                            <a href="/Hamburgueres" className="font-bold block px-2 sm:px-3 md:px-4 py-2 
                            text-xs sm:text-sm text-white hover:underline">
                                Hamburgueres
                            </a>
                            <a href="/Pratos variados" className="font-bold block px-2 sm:px-3 md:px-4 py-2 
                            text-xs sm:text-sm text-white hover:underline">
                                Pratos variados
                            </a>
                            <a href="/Vegano" className="font-bold block px-2 sm:px-3 md:px-4 py-2 
                            text-xs sm:text-sm text-white hover:underline">
                                Vegano
                            </a>
                        </div>
                    </div>
                )}
            </div>
            <Link to="/combos" className="font-bold hover:underline whitespace-nowrap">Combos</Link>
        </nav>

        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4">
            <button className="text-white font-bold hover:underline cursor-pointer whitespace-nowrap
                             text-xs sm:text-sm md:text-base lg:text-lg
                             px-1 sm:px-2 md:px-4 lg:px-6 xl:px-10">
                Entrar
            </button>
            <button className="text-black bg-white font-bold rounded-full cursor-pointer hover:scale-105 transition-transform whitespace-nowrap
                             text-xs sm:text-sm md:text-base lg:text-lg
                             py-1 px-3 sm:py-1.5 sm:px-4 md:py-2 md:px-5 lg:py-2 lg:px-6">
                Criar Conta
            </button>
        </div>
    </header>
)

}

export default Header;
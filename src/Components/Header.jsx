import {useState, useRef, useEffect} from 'react';


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
        <header className="bg-[#45835F] flex">
            <div className="ml-20 p-5 space-x-10 text-white flex text-lg">
                <nav className="space-x-10 flex flex-col mt-2">
                    <a href="/Home">
                        <img src="/FeedBetter.png" 
                        alt="Logo Food Better" 
                        className="w-15"/>
                    </a>
                </nav>

                <div>
                    <nav className="flex space-x-10">
                        <div className="relative" ref={dropdownRef}>
                            <button 
                            onClick={toggleDropdown}
                            className="mt-7 cursor-pointer hover:underline flex items-center">
                                Menu
                                <svg className={`ml-1 w-4 h-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
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
                                <div className="absolute left-0 mt-2 w-40 bg-[#45835F] rounded-md shadow-lg z-50">
                                    <div className="py-1">
                                        <a href="/Hamburgueres" className="block px-4 py-2 text-sm text-white cursor-pointer hover:underline">
                                        Hamburgueres
                                        </a>
                                        <a href="/Pratos variados" className="block px-4 py-2 text-sm text-white cursor-pointer hover:underline">
                                        Pratos variados
                                        </a>
                                        <a href="/Vegano" className="block px-4 py-2 text-sm text-white cursor-pointer hover:underline">
                                        Vegano
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <a href="" className="mt-7 hover:underline">
                            Combos
                        </a>
                    </nav>
                </div>

                <div className="flex flex-row items-center space-x-4 mt-5 ml-190">
                    <button className="cursor-pointer hover:underline">
                        Entrar
                    </button>
                    <button className="text-black bg-white py-2 w-30 rounded-full cursor-pointer transform translate-y-0 hover:translate-y-1 active:translate-y-2">
                        Criar Conta
                    </button>
                </div>
            </div>
            
        </header>
    )
}

export default Header;
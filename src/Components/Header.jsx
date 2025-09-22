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
                <nav className="space-x-10 flex mt-2">
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
                                        <a href="/Clássicos" className="block px-4 py-2 text-sm text-white cursor-pointer hover:underline">
                                        Clássicos
                                        </a>
                                        <a href="/Vegetariano" className="block px-4 py-2 text-sm text-white cursor-pointer hover:underline">
                                        Vegetariano
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

                <div className="flex items-center space-x-4">
                    <button className="hover:underline">
                        Entrar
                    </button>
                    <button className="">
                        Criar Conta
                    </button>
                </div>
            </div>
            
        </header>
    )
}

export default Header;
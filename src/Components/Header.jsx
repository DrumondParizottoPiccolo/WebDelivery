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
    <header className="bg-[#45835F] flex justify-between items-center h-20 px-20">
        <nav className="flex items-center space-x-10 text-white text-lg">
            <a href="/Home" className="hover:underline">Home</a>

            <div className="relative" ref={dropdownRef}>
                <button 
                    onClick={toggleDropdown}
                    className="cursor-pointer hover:underline flex items-center">
                    Menu
                    <svg className={`ml-1 w-4 h-4 transform transition-transform
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
                    <div className="absolute left-0 mt-2 w-40 bg-[#45835F] rounded-md shadow-lg z-50">
                        <div className="py-1">
                            <a href="/Hamburgueres" className="block px-4 py-2 text-sm text-white hover:underline">
                                Hamburgueres
                            </a>
                            <a href="/Pratos variados" className="block px-4 py-2 text-sm text-white hover:underline">
                                Pratos variados
                            </a>
                            <a href="/Vegano" className="block px-4 py-2 text-sm text-white hover:underline">
                                Vegano
                            </a>
                        </div>
                    </div>
                )}
            </div>

            <a href="" className="hover:underline ">Combos</a>
        </nav>

        {/* Botões de login/cadastro */}
        <div className="flex items-center space-x-4">
            <button className="text-white scale-115 mr-10 cursor-pointer color-white hover:underline">Entrar</button>
            <button className="text-black bg-white scale-105 py-2 px-6 rounded-full cursor-pointer 
            hover:scale-115 transition-transform">
                Criar Conta
            </button>
        </div>
    </header>
)

}

export default Header;
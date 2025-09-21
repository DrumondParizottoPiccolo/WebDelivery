
const Header = () => {
    return (
        <header className='bg-[#45835F] flex'>
           <div className='ml-20 p-8 space-x-10 text-white flex text-lg'>
             <nav className=' space-x-10 flex mt-2'>
                 <a href="">
                    Logo
                 </a>
                 <a href="" className="hover:underline">
                    Menu
                 </a>
                 <a href="" className="hover:underline">
                    Combos
                 </a>
             </nav>
             <nav className="flex space-x-3 ml-220">
                <button className="flex mt-2 hover:underline cursor-pointer ">
                    Criar Conta
                </button>
                <button className="bg-white p-2 w-20 rounded-full text-black transform translate-y-0 hover:translate-y-1 cursor-pointer active:translate-y-2">
                    Entrar
                </button>
             </nav>
           </div>
        </header>
    )
}

export default Header
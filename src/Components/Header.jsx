
const Header = () => {
    return (
        <header className='bg-orange-700 flex'>
           <div className='ml-20 p-8 space-x-10 text-white flex text-lg'>
             <a href="">
                Logo
            </a>
             <a href="" className="hover:underline ">
                Menu
             </a>
             <a href="" className="hover:underline">
                Combos
             </a>
           </div>
           <div className="space-x-5 mt-0.5 ml-220 flex items-center text-lg">
            <button className="text-white hover:underline cursor-pointer">
                Criar conta
            </button>
            <button className="bg-white p-2 rounded-full w-20 cursor-pointer transition transform translate-y-0 hover:translate-y-1 active:translate-y-2 ">
                Entrar
            </button>
           </div>
        </header>
    )
}

export default Header
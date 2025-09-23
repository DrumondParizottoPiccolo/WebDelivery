import React, {useState} from 'react'

const Footer =() =>{
    return(
        <footer className='p-5'>
            <div className='p-5 flex gap-20 border-t justify-between border-gray-300'>
                <div>
                    <img 
                        src="/FoodBetterBlack.png" 
                        alt="Logo Food Better" 
                        className='ml-15 w-35'
                    />
                </div >
                <div className='flex gap-35'>
                <div className=' flex-1 justify-center'>
                    <h1 className='pb-3 text-xl font-bold'>Feed Better</h1>
                    <p className='cursor-pointer pb-2'>Fale Conosco</p>
                    <p className='cursor-pointer'> Trabalhe Conosco</p>
                </div>

                <div className='flex-1'>
                    <h1 className='pb-3 text-xl font-bold'>Descubra</h1>
                    <p className='cursor-pointer pb-2'>Cadastre seu restaurante</p>
                    <p className='cursor-pointer pb-2'>Termos de uso</p>
                    <p></p>
                </div>

                <div className='flex-1'>
                    <h1 className='pb-3 text-xl font-bold'>Social</h1>
                    <p className='cursor-pointer pb-2'>Facebook</p>
                    <p className='cursor-pointer pb-2'>Instagram</p>
                    <p className='cursor-pointer'>Youtube</p>
                </div>
                </div>
            </div>

            <div  className='border-t border-gray-300 mt-8 pt-4 text-center text-gray-600'>
                &copy; {new Date().getFullYear()} Feed Better | Todos os direitos reservados
            </div>

        </footer>
    )
}

export default Footer
import React, {useState} from 'react'

const Footer =() =>{
    return(
        <footer className='p-5'>
            <div className='p-5 flex gap-20 border-t border-gray-300'>

                <div className='justify-center'>
                    <h1 className='pb-3 font-bold'>Feed Better</h1>
                    <p className='cursor-pointer pb-2'>fale conosco</p>
                    <p className='cursor-pointer pb-2'>conta e segurança</p>
                    <p className='cursor-pointer'> carreiras</p>
                </div>

                <div>
                    <h1 className='pb-3 font-bold'>Descubra</h1>
                    <p className='cursor-pointer pb-2'>Cadastre seu restaurante</p>
                    <p className='cursor-pointer pb-2'>Termos de uso</p>
                    <p></p>
                </div>

                <div>
                    <h1 className='pb-3 font-bold'>Social</h1>
                    <p className='cursor-pointer pb-2'>facebook</p>
                    <p className='cursor-pointer pb-2'>instagram</p>
                    <p className='cursor-pointer'>Youtube</p>
                </div>

                <div>
                    <img 
                        src="/FoodBetterBlack.png" 
                        alt="Logo Food Better" 
                        className='w-35'
                    />
                </div>

            </div>

            <div  className='border-t border-gray-300 mt-8 pt-4 text-center text-gray-600'>
                &copy; {new Date().getFullYear()} Feed Better | Todos os direitos reservados
            </div>

        </footer>
    )
}

export default Footer
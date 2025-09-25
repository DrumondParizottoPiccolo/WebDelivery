import React from 'react'
import imgaem from '../assets/vegano.png'
// {titulo, preco, restaurante, distancia, categoria, descricao}
function ItemCompra() {
return(
    <div className='flex w-full h-36 rounded-2xl border-1 border-gray-400 bg-white items-center'>
        <img src={imgaem} alt="Product displayed for purchase" 
        className='w-20 h-20 ml-5 rounded-sm'
        />
        <div className='flex flex-col p-2 w-full text-left' >
            <h1 className='font-medium text-lg p-4 text-gray-950'>Açai delicia hum resresres </h1>
            <div className='flex justify-between ml-3'>
                <p className='text-xs'>⭐4.6</p>
            </div>
            <div className='flex gap-2 justify-between px-4'>
                <p className=''>Bello res.</p>
                <p className='font-light'>22km</p>
            </div>
            <div className='flex gap-2 justify-between px-4'>
                <p className='font-thin'>Vegano</p>
                <p className='font-light'>R$23,59</p>
            </div>
        </div>
    </div>
)
}

export default ItemCompra
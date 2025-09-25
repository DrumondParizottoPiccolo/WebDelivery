import React from 'react'
import imgaem from '../assets/vegano.png'

function ItemCompra({titulo, preco, restaurante, distancia, categoria, descricao}) {
return(
    <div className='flex w-full h-40 rounded-2xl shadow-xl bg-white align-middle '>
        <img src={imgaem} alt="Product displayed for purchase" 
        className='w-30 h-30'
        />
        <div className='flex flex-col' >
            <h1 className='font-bold text-lg p-4 text-gray-950'>Teste</h1>
            <div className='flex flex-col gap-2'>
                <p>categoria</p>
                <p>distância</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p>restaurante</p>
                <p>preco</p>
            </div>
        </div>
    </div>
)
}

export default ItemCompra
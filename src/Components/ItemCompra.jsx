import React from 'react'
import imgaem from '../assets/vegano.png'


// // Lista 1: Pratos principais
// const pratosPrincipais = [
//   { titulo: "Bowl de Quinoa com Frango Grelhado", preco: 29.90, restaurante: "Leve & Sabor", distancia: "2.4 km", categoria: "Prato Principal", rev: 4.8 },
//   { titulo: "Salada Mediterrânea com Atum", preco: 32.50, restaurante: "Vida Verde", distancia: "1.8 km", categoria: "Prato Principal", rev: 4.6 },
//   { titulo: "Estrogonofe Vegano de Cogumelos", preco: 27.00, restaurante: "Veg & Fit", distancia: "3.2 km", categoria: "Prato Principal - Vegano", rev: 4.7 },
//   { titulo: "Bowl de Grãos e Legumes Assados", preco: 26.00, restaurante: "Sabor Vegano", distancia: "2.0 km", categoria: "Prato Principal - Vegano", rev: 4.5 }
// ];

// // Lista 2: Bebidas saudáveis
// const bebidasSaudaveis = [
//   { titulo: "Suco Detox de Couve, Maçã e Gengibre", preco: 12.00, restaurante: "Green Power", distancia: "2.0 km", categoria: "Bebida", rev: 4.5 },
//   { titulo: "Kombucha de Hibisco", preco: 14.90, restaurante: "BioBebidas", distancia: "3.5 km", categoria: "Bebida", rev: 4.4 },
//   { titulo: "Smoothie de Frutas Vermelhas com Proteína", preco: 16.50, restaurante: "FitBar", distancia: "1.2 km", categoria: "Bebida", rev: 4.9 },
//   { titulo: "Suco de Laranja e Cenoura com Gengibre (Vegano)", preco: 13.00, restaurante: "Naturale", distancia: "2.1 km", categoria: "Bebida - Vegano", rev: 4.6 }
// ];

// // Lista 3: Snacks e sobremesas saudáveis
// const snacksESobremesas = [
//   { titulo: "Cookies de Aveia com Banana", preco: 9.90, restaurante: "Snack Natural", distancia: "2.8 km", categoria: "Sobremesa", rev: 4.3 },
//   { titulo: "Brownie Vegano de Batata Doce", preco: 11.50, restaurante: "Doces do Bem", distancia: "1.5 km", categoria: "Sobremesa - Vegano", rev: 4.7 },
//   { titulo: "Mix de Castanhas com Frutas Secas", preco: 13.00, restaurante: "NatureBites", distancia: "2.0 km", categoria: "Snack", rev: 4.6 },
//   { titulo: "Pudim Vegano de Chia com Cacau", preco: 10.00, restaurante: "Delícias Veganas", distancia: "1.2 km", categoria: "Sobremesa - Vegano", rev: 4.8 }
// ];






// {titulo, preco, restaurante, distancia, categoria, rev}
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
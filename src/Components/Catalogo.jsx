import React from 'react'
import Carrossel from './Carrossel'
import ItemCompra from './ItemCompra'


// Lista 1: Pratos principais
const pratosPrincipais = [
  { id:1, titulo: "Bowl de Quinoa com Frango Grelhado", preco: 29.90, restaurante: "Leve & Sabor", distancia: "2.4 km", categoria: "Prato Principal", rev: 4.8 },
  { id:2, titulo: "Salada Mediterrânea com Atum", preco: 32.50, restaurante: "Vida Verde", distancia: "1.8 km", categoria: "Prato Principal", rev: 4.6 },
  { id:3, titulo: "Estrogonofe Vegano de Cogumelos", preco: 27.00, restaurante: "Veg & Fit", distancia: "3.2 km", categoria: "Prato Principal - Vegano", rev: 4.7 },
  { id:4, titulo: "Bowl de Grãos e Legumes Assados", preco: 26.00, restaurante: "Sabor Vegano", distancia: "2.0 km", categoria: "Prato Principal - Vegano", rev: 4.5 }
];

// Lista 2: Bebidas saudáveis
const bebidasSaudaveis = [
  { id:1, titulo: "Suco Detox de Couve, Maçã e Gengibre", preco: 12.00, restaurante: "Green Power", distancia: "2.0 km", categoria: "Bebida", rev: 4.5 },
  { id:2, titulo: "Kombucha de Hibisco", preco: 14.90, restaurante: "BioBebidas", distancia: "3.5 km", categoria: "Bebida", rev: 4.4 },
  { id:3, titulo: "Smoothie de Frutas Vermelhas com Proteína", preco: 16.50, restaurante: "FitBar", distancia: "1.2 km", categoria: "Bebida", rev: 4.9 },
  { id:4, titulo: "Suco de Laranja e Cenoura com Gengibre (Vegano)", preco: 13.00, restaurante: "Naturale", distancia: "2.1 km", categoria: "Bebida - Vegano", rev: 4.6 }
];

// Lista 3: Snacks e sobremesas saudáveis
const snacksESobremesas = [
  { id:1, titulo: "Cookies de Aveia com Banana", preco: 9.90, restaurante: "Snack Natural", distancia: "2.8 km", categoria: "Sobremesa", rev: 4.3 },
  { id:2, titulo: "Brownie Vegano de Batata Doce", preco: 11.50, restaurante: "Doces do Bem", distancia: "1.5 km", categoria: "Sobremesa - Vegano", rev: 4.7 },
  { id:3, titulo: "Mix de Castanhas com Frutas Secas", preco: 13.00, restaurante: "NatureBites", distancia: "2.0 km", categoria: "Snack", rev: 4.6 },
  { id:4, titulo: "Pudim Vegano de Chia com Cacau", preco: 10.00, restaurante: "Delícias Veganas", distancia: "1.2 km", categoria: "Sobremesa - Vegano", rev: 4.8 }
];






function Catalogo() {
  return (
    <div className='flex flex-col justify-center w-full'>
      <Carrossel
        items={pratosPrincipais}
        itemsPerPage={3}
        renderItem={(item)=>{<ItemCompra {...item}/>}}
      />

    </div>
  )
}

export default Catalogo
import React from 'react'
import AvaliationCard from './AvaliationCard'



function Section4() {
  const avaliationList = [
    {
        id:1,
        title: "Excelente Serviço",
        description: "O serviço foi rápido e eficiente. Recomendo a todos!",
        rating: 5,
        date:'09/04/2025',
        user:'Xibas'
    },
    {
        id:2,
        title: "Muito Bom",
        description: "A qualidade do produto superou minhas expectativas.",
        rating:4.5,
        date:'05/08/2024',
        user:'Pãnas' 
    }
  ]

  return (
    <div className='w-full h-1/3 bg-red-50 flex justify-center items-center flex-col gap-4'>
        <h1 className='font-extrabold font-sans text-3xl text-gray-800'>Título chamativo asdadasdasd</h1>
        <h2 className='font-sans text-2xl text-gray-800 font-medium'>Mais de não sei quantas avaliações</h2>
        <div className='flex-row flex gap-4 w-4/5 overflow-hidden border-2 border-gray-300 p-4 rounded-lg h-70 justify-center items-center'>
          {avaliationList.map((avaliation) => (
            <AvaliationCard
              key={avaliation.id}
              title={avaliation.title}
              description={avaliation.description}
              rating={avaliation.rating}
              date={avaliation.date}
              user={avaliation.user}
            />
          ))}
        </div>
            
    </div>
  )
}

export default Section4
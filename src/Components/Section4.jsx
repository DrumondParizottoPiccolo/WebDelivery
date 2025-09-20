import React, {useState} from 'react'
import EvaluationCard from './EvaluationCard'



function Section4() {
  const evaluationList = [
   {
    id: 1,
    title: "Excelente Serviço",
    description: "O atendimento foi rápido e muito atencioso. Resolveram meu problema em poucos minutos.",
    rating: 5,
    date: "09/04/2025",
    user: "Xibas",
  },
  {
    id: 2,
    title: "Muito Bom",
    description: "Gostei bastante, a entrega foi rápida e o produto veio bem embalado.",
    rating: 4.5,
    date: "10/04/2025",
    user: "Marina",
  },
  {
    id: 3,
    title: "Ótima Experiência",
    description: "Atendimento cordial e produto de excelente qualidade. Recomendo fortemente!",
    rating: 5,
    date: "11/04/2025",
    user: "Carlos",
  },
  {
    id: 4,
    title: "Serviço Confiável",
    description: "Tudo correu conforme prometido, e me senti seguro durante todo o processo.",
    rating: 4,
    date: "12/04/2025",
    user: "Fernanda",
  },
  {
    id: 5,
    title: "Superou Expectativas",
    description: "Fiquei impressionado com a qualidade do atendimento e do produto final.",
    rating: 5,
    date: "13/04/2025",
    user: "João",
  },
  {
    id: 6,
    title: "Recomendo",
    description: "Equipe atenciosa, serviço de qualidade e entrega antes do prazo. Gostei muito!",
    rating: 4.5,
    date: "14/04/2025",
    user: "Beatriz",
  },
  {
    id: 7,
    title: "Experiência Incrível",
    description: "Não esperava que fosse tão bom! Tudo funcionou perfeitamente e voltarei a contratar.",
    rating: 5,
    date: "15/04/2025",
    user: "Ricardo",
  }]

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + itemsPerPage, evaluationList.length - itemsPerPage)
    );
  };

  const visibleItems = evaluationList.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className='w-full h-1/3 bg-red-50 flex justify-center items-center flex-col gap-4'>
        <h1 className='font-extrabold font-sans text-3xl text-gray-800'>Título chamativo asdadasdasd</h1>
        <h2 className='font-sans text-2xl text-gray-800 font-medium'>Mais de não sei quantas avaliações</h2>
        <div className='flex-row flex gap-4 w-4/5 overflow-hidden  p-4 rounded-lg h-70 justify-center items-center'>
        <button onClick={handlePrev} disabled={startIndex === 0}>ANTERIOR</button>
          {visibleItems.map((evaluation) => (
            <EvaluationCard
              key={evaluation.id}
              {...evaluation}
            />
          ))}
          <button onClick={handleNext} disabled={startIndex + itemsPerPage >= evaluationList.length}>PRÓXIMO</button>
        </div>
            
    </div>
  )
}

export default Section4
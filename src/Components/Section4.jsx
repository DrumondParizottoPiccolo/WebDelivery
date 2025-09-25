import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EvaluationCard from "./EvaluationCard";
import left from "../assets/icons/left-arrow.png";
import right from "../assets/icons/right-arrow.png";

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
    },
  ];

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
    <div className="w-full h-full mt-25 text-center bg-red-50 flex justify-center items-center flex-col gap-4">
      <h1 className="font-extrabold font-sans text-3xl text-gray-800 ">
        Mais saúde, mais sabor, mais confiança!
      </h1>
      <h2 className="font-sans text-2xl text-gray-800 font-medium">
        Saudável, saboroso e confiável: descubra a experiência de nossos clientes
      </h2>

      <div className="w-full flex-col sm:flex-row flex gap-4 sm:w-4/5 p-4 rounded-lg sm:h-70 justify-center items-center relative overflow-hidden">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="hover:scale-140 transition-transform bg-white w-11 h-11 flex justify-center items-center rounded-4xl px-2 shadow-sm border-b-gray-400 z-1"
        >
          <img
            src={left}
            alt="Seta para esquerda"
            className="w-9 h-9 cursor-pointer object-contain"
            
          />
        </button>

        <div className="flex gap-4">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((evaluation) => (
              <motion.div
              className="hover:scale-105 transition-transform"
                key={evaluation.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <EvaluationCard {...evaluation} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= evaluationList.length}
          className="hover:scale-140 transition-transform  bg-white w-11 h-11 flex justify-center items-center rounded-4xl px-2 shadow-sm border-b-gray-400 z-1"
        >
          <img
            src={right}
            alt="Seta para direita"
            className="w-9 h-9 cursor-pointer object-contain"
          />
        </button>
      </div>
    </div>
  );
}

export default Section4;

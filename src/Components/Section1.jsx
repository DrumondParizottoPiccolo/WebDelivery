import comum2 from '../assets/icons/comum2.png';

const Section1 = () => {
    return(
      <div className="flex flex-col w-full h-130 bg-cover bg-center"
      style={{backgroundImage: `url(${comum2})`}}>
        <div className="flex flex-col mt-20 ml-220">
            <h1 className="flex flex-col font-bold text-3xl">
                Peça em minutos com o Feed Better
            </h1>
            <p className="flex flex-col mt-2 text-lg font-bold space-y-2">
                Pratos exclusivos preparados para você aproveitar o melhor da gastronomia gourmet sem sair de casa.
            </p>
            <p className="flex flex-col mt-1 text-lg font-bold space-y-2">
                Basta escolher no app, pedir e saborear-de forma prática, rápida e sofisticada, como você merece.
            </p>
            <div>
                <button className="flex flex-col text-lg text-white font-bold mr-200 mt-3 bg-black p-2 w-40 rounded-full transform translate-y-0 hover:translate-y-1 active:translate-y-2">
                    Baixar
                </button>
            </div>
        </div>
      </div>
    )
}
export default Section1
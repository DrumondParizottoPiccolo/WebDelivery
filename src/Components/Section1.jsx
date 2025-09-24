import comum2 from '../assets/section2_1_food.png';


const Section1 = () => {
    return(
    <section className="flex flex-col w-full h-150">
        <div className="flex flex-col w-full h-150 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url(${comum2})`}}>
            <div className="flex flex-col w-1/2 h-50 mt-30 ml-3 text-white">
            <h1 className="flex flex-col font-bold text-3xl">
                Peça em minutos com o Feed Better
            </h1>
            <p className="flex flex-col  mt-2 text-lg font-bold space-y-2">
                Pratos exclusivos preparados para você aproveitar o melhor da gastronomia gourmet sem sair de casa.
                Basta escolher no app, pedir e saborear de forma prática, rápida e sofisticada, como você merece.
            </p>
            <button className="flex flex-col text-lg text-white
                font-bold   mt-3 bg-black p-2 w-40 rounded-full 
                hover:scale-110 transition-transform cursor-pointer">
                    Baixar
            </button>
            </div>
        </div>
    </section>
    )
}
export default Section1;
import React, { useState, useEffect } from 'react';

const Curiosidades = () => {
    const [curiosidade, setCuriosidade] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // aplicar uma api x:
        const apiUrl = 'https://raw.githubusercontent.com/fernando-martins/gastronomia-curiosidades/main/curiosidades.json'; 

        const fetchCuriosidade = async () => {
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`Erro ao carregar a curiosidade: ${response.status}`);
                }

                const data = await response.json();
                
                const randomFact = data[Math.floor(Math.random() * data.length)].curiosidade;
                
                setCuriosidade(randomFact); 
                setIsLoading(false);
            } catch (err) {
                setError('Não foi possível carregar a curiosidade. Tente novamente mais tarde.');
                setIsLoading(false);
                console.error('Erro ao buscar curiosidade:', err);
            }
        };

        fetchCuriosidade();
    }, []);

    return (
        <div className="flex justify-center items-center py-12 px-4 md:px-8 bg-red-50 min-h-[300px]">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Você Sabia?
                </h2>
                {isLoading && (
                    <p className="text-gray-600 animate-pulse">Carregando uma curiosidade...</p>
                )}
                {error && (
                    <p className="text-red-500 font-medium">{error}</p>
                )}
                {!isLoading && !error && (
                    <p className="text-gray-800 text-lg md:text-xl italic">
                        "{curiosidade}"
                    </p>
                )}
            </div>
        </div>
    );
};

export default Curiosidades;
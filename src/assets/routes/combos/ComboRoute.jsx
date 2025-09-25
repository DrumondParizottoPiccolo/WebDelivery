import { useState } from 'react';

const ComboRoute = () => {
   const [open, setOpen] = useState(false);

  return (
    <div className='w-auto h-20 flex justify-left p-4'>
      <p onClick={()=>setOpen(true)} className='cursor-pointer bg-green-300 rounded-2xl p-2 text-center w-20 h-10 text-black/70 shadow-2xs'>
        Filtrar
      </p>

      {open && (
        <div className='w-full h-full top-0 left-0 flex justify-center items-center fixed z-10 bg-black/20 shadow-2xl'>
          <div className='w-full sm:w-2/3 h-70 flex flex-col justify-between gap-2 p-4 bg-white rounded-2xl items-center'>
            <h3 className='text-center font-medium text-green-900/90 text-lg'>Filtros</h3>
            <p className='text-sm border-1 border-gray-400/80 shadow p-2 rounded-3xl text-center cursor-pointer w-1/2'>Vegano</p>
            <p className='text-sm border-1 border-gray-400/80 shadow p-2 rounded-3xl text-center cursor-pointer w-1/2'>Preço Crescente</p>
            <p className='text-sm border-1 border-gray-400/80 shadow p-2 rounded-3xl text-center cursor-pointer w-1/2'>Preço Decrescente</p>
            <p className='text-sm border-1 border-gray-400/80 shadow p-2 rounded-3xl text-center cursor-pointer w-1/2'>Ordem Alfabética</p>
            <button className='cursor-pointer font-thin text-red-800' onClick={() => setOpen(false)}>❌Fechar</button>
          </div>
        </div>
      )}
    </div> 
  );
}

export default ComboRoute;

import { useState } from 'react';
import Filtro from '../../../Components/Filtro';

const ComboRoute = () => { 
   const [open, setOpen] = useState(false);

  return (
    <div className='w-auto h-150 flex justify-left p-4'>
      <Filtro></Filtro>
    </div> 
  );
}

export default ComboRoute;

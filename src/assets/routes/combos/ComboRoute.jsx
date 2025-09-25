import Filtro from '../../../Components/Filtro';
import Catalogo from '../../../Components/Catalogo';

const ComboRoute = () => {
  return (
    <div className='w-auto h-150 flex flex-col justify-left'>
      <h1>Combo Route</h1>
      <Filtro/>
      <Catalogo/>
    </div> 
  );
}

export default ComboRoute;

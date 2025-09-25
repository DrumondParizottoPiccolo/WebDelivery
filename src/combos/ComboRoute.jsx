import Filtro from '../Components/Filtro';
import Container from '@mui/material/Container';
import Carrossel from '../Components/Carrossel';
import Catalogo from '../Components/Catalogo';
import ItemCompra from '../Components/ItemCompra';

const ComboRoute = () => {
  return (
    <div className='w-auto h-150 flex flex-col justify-left'>
      <Filtro/>
      <Catalogo/>
    </div> 
  );
}

export default ComboRoute;

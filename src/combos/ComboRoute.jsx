import Filtro from "../Components/Filtro";
import Container from "@mui/material/Container";
import Carrossel from "../Components/Carrossel";
import Catalogo from "../Components/Catalogo";
import ItemCompra from "../Components/ItemCompra";

const ComboRoute = () => {
  return (
    <Container disableGutters className="w-auto flex flex-col justify-left">
      <Filtro />
      <Catalogo />
    </Container>
  );
};

export default ComboRoute;

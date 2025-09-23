import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import food_img from "../assets/doce_wallpaper.jpg";

const Formulario = () => {
    return(
        <Container sx={{ 
        my: 4, display: 'flex', flexDirection: 'row', 
        gap: 2, maxWidth: 500, height: '70vh', alignItems: 'end', justifyContent: 'center',}}>
        <Box
        sx={{
        borderRadius: 5, 
        backgroundImage: `url(${food_img})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        display: "flex",
        justifyContent: "end",
        alignItems: "end",
        }}
        width={ '100%' } height= '70vh'
        >
        
        <Box width={ '50%' } height= '70vh'
        sx={{ 
            backgroundColor: '#206138',
            display: 'flex', flexDirection: 'column',
            p: 4, justifyContent: 'space-around', 
            borderRadius: " 0 15px 15px 0",
        }}
        >
        <TextField
            label="Nome"
            variant="outlined"
            sx={{ backgroundColor: 'white' }}

        />
        <TextField
            sx={{ backgroundColor: 'white' }}
            label="Email"
            variant="outlined"/>
        <TextField
            sx={{ backgroundColor: 'white' }}
            label="Telefone"
            variant="outlined"
            backgroundColor= 'white'
        />
        <Button
        onClick={() => alert('Mensagem enviada com sucesso!')}
        variant="contained"
        sx={{ backgroundColor: '#181818ff', '&:hover': { backgroundColor: "#68a36bff" } }}
        >
        Enviar
        </Button>
        </Box>
        </Box>
        </Container>
    )
}

export default Formulario;

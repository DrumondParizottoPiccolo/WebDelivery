import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import food_img from "../assets/frutas_wallpaper.png";
import Alert from '@mui/material/Alert';
import { useState } from 'react';

const Formulario = () => {  
    const [showAlert, setShowAlert] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telefone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        setSuccess('');

        try {
            const response = await fetch('https://formspree.io/f/mrbybkje', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar mensagem!');
            }

            setSuccess('Mensagem enviada com sucesso!');
            setFormData({ name: '', email: '', telefone: '' });
        } catch (err) {
            setError('Ocorreu um erro ao enviar sua mensagem.');
        }
    };

    return (
        <Container sx={{ 
            my: 4, display: 'flex', flexDirection: 'column', 
            gap: 2, maxWidth: 500, height: '70vh', alignItems: 'end', justifyContent: 'center',
        }}>
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
                width={'100%'} height='70vh'
            >
                <Box 
                    width={'50%'} height='70vh'
                    sx={{ 
                        backgroundColor: '#206138',
                        display: 'flex', flexDirection: 'column',
                        p: 4, justifyContent: 'space-around', 
                        borderRadius: "0 15px 15px 0",
                    }}
                >
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <TextField
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nome"
                            variant="outlined"
                            sx={{ 
                                backgroundColor: 'white',
                                borderRadius: "10px", 
                                "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                        borderColor: "black",
                                    },
                                },
                            }}
                        />
                        <TextField
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            variant="outlined"
                            sx={{ 
                                backgroundColor: 'white',
                                borderRadius: "10px", 
                                "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                        borderColor: "black",
                                    },
                                },
                            }}
                        />
                        <TextField
                            required
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            placeholder="Telefone"
                            variant="outlined"
                            sx={{ 
                                backgroundColor: 'white',
                                borderRadius: "10px", 
                                "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                        borderColor: "black",
                                    },
                                },
                            }}
                        />

                        {success && (
                            <Alert severity="success" onClose={() => setShowAlert(false)}>
                                {success}
                            </Alert>
                        )}

                        {error && (
                            <Alert severity="error" onClose={() => setShowAlert(false)}>
                                {error}
                            </Alert>
                        )}

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ 
                                backgroundColor: '#181818ff', 
                                '&:hover': { backgroundColor: "#68a36bff" } 
                            }}
                        >
                            Enviar
                        </Button>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};

export default Formulario;

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Typography from "@mui/material/Typography";
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
        <Container
        disableGutters
        sx={{ 
            my: 4, display: 'flex', flexDirection: 'column', 
            gap: 2, maxWidth: 1000, minHeigh: '70vh', alignItems: 'end', justifyContent: 'center', maxHeight:"150",
        }}>
            <Box
                disableGutters
                sx={{
                    borderRadius: 5, 
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    flexDirection: { xs: "column-reverse", md: "row" },
                    maxHeight:"150vh",
                }}
                width={'100%'}
            >   

                <Box  width={'auto'} height='70vh' minWidth={"50%"} maxWidth={"100%"}
                        sx={{ 
                        backgroundColor: '  #e9ffdb',
                        display: 'flex', flexDirection: 'column',
                        p: 4, justifyContent: 'space-around', 
                        borderRadius: "0px 15px 0px",
                        border: "solid",
                        borderColor: "#5ad186"
        
                    }}>
                        
                    <Typography variant="h3" color="black" textAlign={"center"} fontWeight={700}
                    sx={{padding: 2}}
                    fontSize={"5vmax"}
                    >
                        Curiosidades
                    </Typography>
                    <Box
                      width={'100%'} height='80vh'
                        sx={{ 
                        backgroundColor: '  #fdfdfd',
                        border: "solid",
                        borderRadius: "10px",
                        display: 'flex', flexDirection: 'column',
                        p: 4, justifyContent: 'space-around', 
                    }}
                    >

                    </Box>
                    
                </Box>
                <Box 
                    width={'auto'} height='70vh'
                    sx={{ 
                        backgroundColor: '#e9ffdb',
                        display: 'flex', flexDirection: 'column',
                        p: 4, justifyContent: 'space-around', 
                        borderRadius: "15px 0px 15px",
                        border: "solid",
                        borderColor: "#5ad186"
                    }}
                    minWidth={"50%"} maxWidth={"100%"}
                >   
                    <Typography variant="h3" color="black" textAlign={"center"} fontWeight={700} fontSize={"5vmax"}>
                        Formulario
                    </Typography>
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
                                        borderColor: "#5ad186",
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
                                        borderColor: "#5ad186",
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
                                        borderColor: "#5ad186",
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

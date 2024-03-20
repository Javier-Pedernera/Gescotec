import { useState } from 'react';
import { TextField, Checkbox, Button, FormControlLabel, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { css } from '@emotion/react';
import '../sass/components/_contactoForm.scss'

const FormContainer = styled('form')({
    marginTop: 16,
    padding: 20,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
});

const RowContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
});

const FormControl = styled(TextField)(
    ({ theme }) => css`
        width: 100%;
        ${theme.breakpoints.down('sm')} {
            grid-column: span 2;
        }
    `
);

const SubmitButton = styled(Button)(
    ({ theme }) => css`
        width: 30%;
        ${theme.breakpoints.down('sm')} {
            grid-column: span 2;
        }
    `
);

const ContactoForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        empresa: '',
        productoServicio: '',
        email: '',
        movil: '',
        pais: '',
        descripcion: '',
        consentimiento: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            nombre: '',
            apellidos: '',
            empresa: '',
            productoServicio: '',
            email: '',
            movil: '',
            pais: '',
            descripcion: '',
            consentimiento: false
        });
    };

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>Contáctanos</Typography>
            <FormContainer onSubmit={handleSubmit}>
                <RowContainer>
                    <FormControl label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    <FormControl label="Apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
                </RowContainer>
                <RowContainer>
                    <FormControl label="Empresa" name="empresa" value={formData.empresa} onChange={handleChange} required />
                    <FormControl label="Producto / Servicio" name="productoServicio" value={formData.productoServicio} onChange={handleChange} />
                </RowContainer>
                <FormControl label="Correo electrónico" type="email" name="email" value={formData.email} onChange={handleChange} required />
                <FormControl label="Móvil" type="tel" name="movil" value={formData.movil} onChange={handleChange} required />
                <FormControl label="País" name="pais" value={formData.pais} onChange={handleChange} required />
                <FormControl label="Descripción" name="descripcion" value={formData.descripcion} onChange={handleChange} multiline />
                <FormControlLabel
                    control={<Checkbox checked={formData.consentimiento} onChange={handleChange} name="consentimiento" color="primary" />}
                    label="Consentimiento de recibir Email Marketing"
                />
                <hr />
                <div className='div_Form'>
                    <SubmitButton type="submit" variant="contained" className='submit_btn'>Enviar</SubmitButton>
                </div>

            </FormContainer>
        </Container>
    );
}

export default ContactoForm;
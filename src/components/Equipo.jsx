import { Typography, Container, Grid, Card, CardContent } from '@mui/material';
import MiembroEquipo from './miembroEquipoCard';
import '../sass/components/_Equipo.scss';

const Equipo = () => {
    // Definimos la información de cada miembro del equipo
    const equipoData = [
        { nombre: 'Pablo Charras', cargo: 'CEO', experiencia: '1 años en la industria', foto: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710947151/GescotecPage/1651870975631_bnlvqs.jpg', linkedin: "https://www.linkedin.com/in/pablo-charras-700a962" },
        { nombre: 'Marcos Celiz', cargo: 'Desarrollador Full Stack', experiencia: '8 años en desarrollo web', foto: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710947181/GescotecPage/1575496059804_f3clx4.jpg', linkedin: "https://www.linkedin.com/in/marcos-celiz-ab271110" },
        // Agrega más miembros del equipo según sea necesario
    ];

    return (
        <div className="equipo">
            <Container maxWidth="lg">
                {/* Introducción del equipo */}
                <div className="equipo-intro">
                    <Typography variant="h4" align="center" gutterBottom>
                        Conoce a nuestro talentoso equipo
                    </Typography>
                    <Typography variant="body1" align="center">
                        Nuestro equipo está formado por profesionales apasionados y con experiencia en diversas áreas. Estamos comprometidos a brindar soluciones de alta calidad y a superar las expectativas de nuestros clientes.
                    </Typography>
                </div>

                {/* Lista de miembros del equipo */}
                <Grid container spacing={3}>
                    {equipoData.map((miembro, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <MiembroEquipo className="cardMiembro" {...miembro} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Equipo;

import { useState } from "react";
import { Box, useTheme, Typography, Button, Grid, Container, TextField, InputAdornment, Divider, Drawer, IconButton, Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow, TableHead } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import CloseIcon from '@mui/icons-material/Close';



const Movimientos = () => {

    const theme = useTheme();
    const colors = theme.palette;

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleExportButtonClick = () => {
        setIsDrawerOpen(true);
    };

    return (
        <Container fluid maxWidth={false} sx={{ width: '100%' }} >
            <Typography variant="h6" py={3}>Movimientos</Typography>
            
            <Box display="flex" backgroundColor={colors.primary.contrastText}>

            <Grid container sx={{
                p: '20px'
            }}>
                <Grid item  xs={8} sm={10} lg={11} >
                    <TextField
                    placeholder="Búsqueda"
                    variant="outlined"
                    size="small"
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon fontSize="small" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        width: '316px'
                      }}
                />
                </Grid>
                <Grid item  xs={4} sm={2} lg={1} >
                    <Button variant="text" endIcon={<DownloadIcon />} sx={{
                        color: colors.primary.dark
                    }} onClick={handleExportButtonClick}>
                      Exportar
                    </Button>
                </Grid>
                <Grid item sm={12} sx={{
                    mt: '20px'
                }}>
                    <Divider />
                        <TableContainer sx={{
                            pt: '20px'
                        }}>
                            <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ columns: '1'}}>
                                        <Button variant="text" endIcon={<UnfoldMoreIcon />}>
                                        Fecha de movimiento
                                        </Button>
                                    </TableCell>
                                    <TableCell sx={{ columns: '1'}}>
                                        <Button variant="text" endIcon={<UnfoldMoreIcon />}>
                                        Nro de transacción
                                        </Button>
                                    </TableCell>
                                    <TableCell sx={{ columns: '5'}}>
                                        <Button variant="text" endIcon={<UnfoldMoreIcon />}>
                                        Descripción
                                        </Button>
                                    </TableCell>
                                    <TableCell sx={{ columns: '1'}}>
                                        <Button variant="text" endIcon={<UnfoldMoreIcon />}>
                                        Monto
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                                <TableBody>

                                    <TableRow>
                                        <TableCell>
                                            2023-01-02
                                        </TableCell>
                                        <TableCell>
                                            1245987450
                                        </TableCell>
                                        <TableCell>
                                            Suscripción a fondo común de inversión
                                        </TableCell>
                                        <TableCell>
                                            AR$ 10.506.941
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>
                                            2023-01-02
                                        </TableCell>
                                        <TableCell>
                                            1245987450
                                        </TableCell>
                                        <TableCell>
                                            Suscripción a fondo común de inversión
                                        </TableCell>
                                        <TableCell>
                                            AR$ 10.506.941
                                        </TableCell>
                                    </TableRow>

                                
                                    <TableRow>
                                    <TableCell colSpan={6} />
                                    </TableRow>
                                </TableBody>
                                <TableFooter>
                                <TableRow>
                                    <TablePagination
                                    label="Filtro"
                                    rowsPerPageOptions={[15, 30, 50, { label: 'Todos', value: -1 }]}
                                    colSpan={4}
                                    count={2}
                                    rowsPerPage={15}
                                    page={0}
                                    />
                                </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                    </Grid>
            </Grid>

           


            </Box>

            <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box sx={{ width: 357 }} >
                    <Grid container sx={{
                        p: '20px'
                    }}>
                        <Grid alignContent="center" item  xs={8} sm={10} lg={11} >
                            <Typography variant="h5" align="center">
                                Exportar
                            </Typography>
                        </Grid>
                        <Grid item  xs={4} sm={2} lg={1} >
                            <IconButton onClick={() => setIsDrawerOpen(false)} sx={{
                                color: '#000000'
                            }} >
                                <CloseIcon />
                            </IconButton>
                        </Grid>

                        <Grid item  xs={12} sx={{
                            m: '30px 0 0 0'
                        }}>
                            <Typography variant="body1" align="center">
                                * Por defecto la descarga de tus movimientos corresponde los últimos 30 días, en caso de querer modificarla ingresa las fechas debajo.
                            </Typography>
                        </Grid>

                        <Grid item  xs={6} sx={{
                            m: '30px 0'
                        }}>
                            <TextField
                                label="Fecha desde"
                                type="date"
                                defaultValue="2023-01-01"
                            />
                        </Grid>
                        <Grid item  xs={6} sx={{
                            m: '30px 0'
                        }}>
                            <TextField
                                label="Fecha hasta"
                                type="date"
                                defaultValue="2023-01-01"
                            />
                        </Grid>
                        
                        
                    
                    <Grid item  xs={12}>
                            <Button variant="contained" onClick={() => setIsDrawerOpen(false)}  backgroundColor={colors.primary.main} sx={{
                                width: '90%',
                                p: '8px',
                                bottom: '30px',
                                position: 'absolute',
                                color: colors.primary.contrastText,
                                ':hover': {
                                    bgcolor: colors.primary.dark, // theme.palette.primary.main
                                    color: 'white',
                                  },
                            }}>Enviar</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Drawer>

        </Container>
        
        
        
    );
}

export default Movimientos;
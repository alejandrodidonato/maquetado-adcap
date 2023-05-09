import React, { useState } from 'react';
import { Tabs, Tab, Typography, Box, Container, useTheme, TableContainer, Table, TableCell, TableBody, TableRow, Button, Checkbox } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

const Configuraciones = () => {

  const theme = useTheme();
  const colors = theme.palette;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container fluid maxWidth={false} sx={{
        p: '40px',
        width: '100%'
    }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Seguridad"/>
            <Tab label="Comunicaciones" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Typography variant="h6" sx={{ pt: '20px'}}>
              Datos de usuario
        </Typography>
        <TableContainer fluid sx={{ maxWidth: 392, backgroundColor: colors.primary.contrastText, mt: '20px', p: '20px' }}>
          <Table >
            <TableBody>   
                <TableRow sx={{borderBottom: '1px solid rgba(0,0,0,0.3)'}}>
                  <TableCell variant='head' sx={{ p: '0' }} >
                    <Typography variant='subtitle1'>Nombre</Typography> 
                  </TableCell>
                  <TableCell sx={{ textAlign: 'right', pr: '0' }}>
                  <Typography variant='body1'>Juan Francisco</Typography>
                  </TableCell>
                </TableRow>
                <TableRow sx={{borderBottom: '1px solid rgba(0,0,0,0.3)'}}>
                  <TableCell variant='head' sx={{ p: '0' }} >
                    <Typography variant='subtitle1'>Apellido</Typography> 
                  </TableCell>
                  <TableCell sx={{ textAlign: 'right', pr: '0' }}>
                  <Typography variant='body1'>Francisco</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant='head' sx={{ p: '0' }} >
                    <Typography variant='subtitle1'>Correo electrónico</Typography> 
                  </TableCell>
                  <TableCell sx={{ textAlign: 'right', pr: '0' }}>
                  <Typography variant='body1'>jperez@challenge.com.ar</Typography>
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer flex sx={{ maxWidth: 392, backgroundColor: colors.primary.contrastText, mt: '20px', p: '20px' }}>
          <Table >
            <TableBody>   
                <TableRow>
                  <TableCell variant='head' sx={{ p: '0' }} >
                    <Typography variant='subtitle1'>Contraseña</Typography> 
                    <Typography variant='subtitle1'>********************</Typography> 
                  </TableCell>
                  <TableCell sx={{ textAlign: 'right', pr: '0' }}>
                    <Button variant="text" sx={{
                        color: colors.primary.dark
                    }}>
                      Modificar
                    </Button>
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      
      <TabPanel value={value} index={1}>
        
      <TableContainer fluid sx={{ width: '95%', backgroundColor: colors.primary.contrastText, mt: '20px', p: '20px' }}>
          <Table >
            <TableBody>   

                <TableRow sx={{borderBottom: '1px solid rgba(0,0,0,0.3)'}} >
                  <TableCell variant='head' sx={{ pb: '15px', width: '30%' }} sm={1}>
                    <Typography variant='body1' fontWeight="500">Alertas</Typography> 
                  </TableCell>
                  <TableCell variant='head' sx={{ pb: '15px', width: '30%' }} sm={1}>
                    <Typography variant='body1' fontWeight="500">Mail</Typography> 
                  </TableCell>
                  <TableCell variant='head' sx={{ pb: '15px', width: '30%' }} sm={1}>
                    <Typography variant='body1' fontWeight="500">Teléfono(sms)</Typography> 
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell variant='head' sx={{ pl: '15px' }} >
                    <Typography variant='body1'>Inicio de sesión</Typography> 
                  </TableCell>
                  <TableCell>
                    <Checkbox  defaultChecked />
                  </TableCell>
                  <TableCell>
                    <Checkbox  defaultChecked />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell variant='head' sx={{ pl: '15px' }} >
                    <Typography variant='body1'>Reporte diario movimientos</Typography> 
                  </TableCell>
                  <TableCell>
                    <Checkbox  defaultChecked />
                  </TableCell>
                  <TableCell>
                    <Checkbox  defaultChecked />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell variant='head' sx={{ pl: '15px' }} >
                    <Typography variant='body1'>Acreditacion de sueldo</Typography> 
                  </TableCell>
                  <TableCell>
                    <Checkbox  defaultChecked />
                  </TableCell>
                  <TableCell>
                    <Checkbox  defaultChecked />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell variant='head' sx={{ pl: '15px' }} >
                    <Typography variant='body1'>Noticias</Typography> 
                  </TableCell>
                  <TableCell>
                    <Checkbox  defaultChecked />
                  </TableCell>
                  <TableCell>
                    <Checkbox  defaultChecked />
                  </TableCell>
                </TableRow>
                
            </TableBody>
          </Table>
        </TableContainer>      
        
      </TabPanel>

    </Container>
  );
}

export default Configuraciones;
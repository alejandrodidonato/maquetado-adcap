import { NavLink } from 'react-router-dom';
import { Box, useTheme, Typography, Button } from "@mui/material";



const MainSidebar = () => {

    const theme = useTheme();
    const colors = theme.palette;

    return (
        <Box 
            display="flex" flexDirection="column" justifyContent="flex-start"
            backgroundColor={colors.primary.dark} 
            sx={{ 
                boxShadow: '8px 0px 16px 0px rgba(0,0,0,0.16)',
                p: '24px 0px 32px', 
                width: '16.5%',
                minWidth: '180px',
                columnGap: '32px'
            }}
        >
            <Box 
            display="flex" alignSelf="start" order="0"
            flexGrow={0}
            sx={{ 
                p: '0px 30px'
            }}
            >
                <Typography variant="caption" color={colors.primary.contrastText}>
                    General
                </Typography>
            </Box>
            <Box 
            display="flex" 
            alignSelf="start" 
            order="0"
            flexGrow={0}
            sx={{ 
                p: '20px 30px'
            }}
            >
                <NavLink to="/">
                    <Button 
                    variant="text" 
                    sx={{
                        color: colors.primary.contrastText,
                        pl: '10px'
                    }}>
                        Movimientos
                    </Button>
                </NavLink>
            </Box>
            <Box 
            display="flex" 
            alignSelf="start" 
            order="0"
            flexGrow={0}
            sx={{ 
                p: '10px 30px'
            }}
            >
                <NavLink to="/configuraciones" >
                    <Button 
                        variant="text" 
                        sx={{
                            color: colors.primary.contrastText,
                            pl: '10px'
                        }}
                    >
                        Configuraciones
                    </Button>
                </NavLink>
            </Box>
            
        </Box>
    );
}

export default MainSidebar;
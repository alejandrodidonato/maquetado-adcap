import { Box, useTheme, IconButton, Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const MainNavbar = () => {

    const theme = useTheme();
    const colors = theme.palette;

    return (
        <Box 
            display="flex" flexDirection="row" justifyContent="flex-end" alignItems="center"
            backgroundColor={colors.primary.contrastText} 
            sx={{ 
                p: '16px 48px', 
                boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.08)',
                height: '40px'
            }}
        >

                <IconButton 
                    sx={{
                        color: '#1A1A1A',
                        width: 20,
                        height: 20
                    }}>
                    <AccountCircleIcon></AccountCircleIcon>
                    
                </IconButton>
                <Button variant="text" >
                    jperez
                </Button>

        </Box>
    );
}

export default MainNavbar;
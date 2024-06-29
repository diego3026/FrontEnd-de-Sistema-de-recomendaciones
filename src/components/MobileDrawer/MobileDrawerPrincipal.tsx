import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/Context/AuthContext';
import Ubicacion from '@/components/Principal/Ubicacion/Ubicacion_selectMobile';
import './MobileDrawerMobile.css';

export default function DrawerMobileNavigation() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const handleNavigate = (url:string) => {
    navigate(url);
  }

  const handleLogout = () => {
    auth.logoutUser();
  }

  return (
      
    <React.Fragment>
      <IconButton size='lg' color="warning" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            fontSize="sm"
            fontWeight="lg"
            sx={{ cursor: 'pointer' }}
          >
            Close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
        <List
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            marginTop: '15px',
            '& > div': { justifyContent: 'center' },
          }}
        >
          <div className='content__ubicacion'>
            <Ubicacion/>
          </div>
          <ListItemButton onClick={() => handleNavigate("/favoritos")}>Favoritos</ListItemButton>
          <ListItemButton onClick={() => handleNavigate("/perfil")}>Perfil</ListItemButton>
          <ListItemButton onClick={handleLogout}>Cerrar Sesion</ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
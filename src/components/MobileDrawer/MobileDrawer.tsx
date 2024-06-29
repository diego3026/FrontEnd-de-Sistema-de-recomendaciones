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
import Button from '@mui/joy/Button';

export default function DrawerMobileNavigation() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleNavigate = (url:string) => {
    navigate(url);
  }

  return (
      
    <React.Fragment>
      <IconButton color="warning" onClick={() => setOpen(true)}>
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
            '& > div': { justifyContent: 'center' },
          }}
        >
          <ListItemButton onClick={() => handleNavigate("/")}>Inicio</ListItemButton>
          <ListItemButton onClick={() => handleNavigate("/sobre-nosotros")}>Sobre nosotros</ListItemButton>
          <ListItemButton onClick={() => handleNavigate("/servicios")}>Servicios</ListItemButton>
          <ListItemButton onClick={() => handleNavigate("/contactanos")}>Contacto</ListItemButton>
        </List>
        <Button sx={{ backgroundColor: 'var(--darkOrange)', margin: '0 20px' }} className='button__drawer' onClick={()=> handleNavigate("/principal")}>Ingresar</Button>
      </Drawer>
    </React.Fragment>
  );
}
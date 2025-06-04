import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import useLocales from 'src/locales/use-locales';
import Iconify from 'src/components/iconify';
import { useState } from 'react';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const theme = useTheme();
  const { t } = useLocales();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const MENU_ITEMS = [
    {
      label: "Home",
      path: '/',
    },
    {
      label: "Foundation",
      path: '/foundation',
    },
    {
      label: "Ventures",
      path: '/ventures',
    },
    {
      label: "Liquidity",
      path: '/liquidity',
    },
    {
      label: "About",
      path: '/about',
    },
    {
      label: "Team",
      path: '/team',
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {MENU_ITEMS.map((item) => (
          <ListItem key={item.path}>
            <Button
            onClick={() => {
              navigate(item.path);
              setMobileOpen(false);
            }}
            sx={{
              fontFamily: '"Martel", serif',
              fontWeight: 600, // DemiBold = 600
              fontSize: 18,
              lineHeight: '22px',
              letterSpacing: 0,
              color: location.pathname === item.path ? '#51B949' : 'black',
              width: '100%',
              justifyContent: 'flex-start',
              textTransform: 'none',
              px: 0,
              background: 'none',
            }}
          >
            {item.label}
          </Button>
                    </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: 'linear-gradient(90deg, rgba(168,220,164,0.15) 0%, rgba(255,255,255,0.8) 100%)',
        boxShadow: '0 2px 12px 0 rgba(80, 130, 80, 0.08)',
        px: { xs: 1, md: 4 },
        py: 1,
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar sx={{ minHeight: 72, p: 0, width: '100%' }}>
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      px: { xs: 1, md: 4 },
    }}
  >
    {/* Logo bên trái */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "60px",
        pl: { xs: 3, md: 9 },
        flexShrink: 0,
      }}
    >
      <img
        src="/logo/Logo.png"
        alt="SR Labs"
        style={{
          height: "85%",
          width: "auto",
          display: "block",
        }}
      />
    </Box>

    {/* Menu giữa */}
    <Box
      sx={{
        flex: 1,
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'center',
        ml: "-20px",
      }}
    >
            <Tabs 
              value={location.pathname}
              onChange={(e, newValue) => navigate(newValue)}
              sx={{ 
                ml: "-25px",
                minHeight: 72,
                '& .MuiTabs-indicator': {
                  display: 'none',
                },
                '& .MuiTab-root': {
                  minHeight: 72,
                  fontFamily: '"Martel", serif',
                  fontWeight: 600, // DemiBold = 600
                  fontSize: 18,
                  lineHeight: '22px',
                  letterSpacing: 0,
                  textTransform: 'none',
                  color: '#000',
                  position: 'relative',
                  overflow: 'visible',
                  '&.Mui-selected': {
                    color: '#51B949',
                  },
                  '&:hover': {
                    '& .reveal-text': {
                      transform: 'scaleY(1)',
                    }
                  }
                },
              }}
            >
              {MENU_ITEMS.map((item) => (
                <Tab
                  key={item.path}
                  value={item.path}
                  label={
                    <Box sx={{ position: 'relative', whiteSpace: 'nowrap' }}>
                      {/* Chữ mặc định */}
                      <Box sx={{ visibility: 'hidden', lineHeight: 1.1 }}>{item.label}</Box>
                      {/* Chữ đen */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#000',
                          zIndex: 1,
                          lineHeight: 1.1,
                        }}
                      >
                        {item.label}
                      </Box>
                      {/* Chữ xanh lá (active) */}
                      <Box
                        className="reveal-text"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#96fd88',
                          zIndex: 2,
                          transform: location.pathname === item.path ? 'scaleY(1)' : 'scaleY(0)',
                          transformOrigin: 'bottom',
                          transition: 'transform 0.4s cubic-bezier(.4,0,.2,1)',
                          lineHeight: 1.1,
                        }}
                      >
                        {item.label}
                      </Box>
                    </Box>
                  }
                />
              ))}
            </Tabs>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LanguageToggle />
              {/* Hamburger menu cho mobile */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', ml: 1 }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                >
                  <Iconify icon="eva:menu-fill" />
                </IconButton>
              </Box>
            </Box>
        </Box>
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        <Box sx={{ px: 2, py: 2 }}>
          {drawer}
        </Box>
      </Drawer>
    </AppBar>
  );
}

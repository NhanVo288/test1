import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, Tab, Tabs, useTheme
} from '@mui/material';
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
    { label: "Home", path: '/' },
    { label: "Foundation", path: '/foundation' },
    { label: "Ventures", path: '/ventures' },
    { label: "Liquidity", path: '/liquidity' },
    { label: "About", path: '/about-us' },
    { label: "Team", path: '/team' },
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {MENU_ITEMS.map((item) => (
          <ListItem key={item.path} disablePadding>
            <Button
              onClick={() => {
                navigate(item.path);
                setMobileOpen(false);
              }}
              sx={{
                fontFamily: '"Martel", serif',
                fontWeight: 600,
                fontSize: { xs: 16, sm: 18 },
                lineHeight: '22px',
                color: location.pathname === item.path ? '#51B949' : 'black',
                width: '100%',
                justifyContent: 'flex-start',
                textTransform: 'none',
                px: 0,
                background: 'none',
                minHeight: 48,
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
        px: { xs: 0.5, sm: 2, md: 4 },
        py: { xs: 0.5, md: 1 },
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 56, sm: 64, md: 72 },
          px: 0,
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            px: { xs: 1, sm: 2, md: 4 },
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: { xs: 44, sm: 56, md: 60 },
              pl: { xs: 1.5, sm: 2, md: 3 },
              pr: { xs: 2, sm: 3, md: 4 },
              flexShrink: 0,
            }}
          >
            <img
              src="/logo/Logo.png"
              alt="SR Labs"
              style={{
                height: "90%",
                maxHeight: 48,
                width: "auto",
                display: "block",
              }}
            />
          </Box>


          {/* Menu - Desktop */}
          <Box
            sx={{
              flex: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Tabs
              value={location.pathname}
              onChange={(e, newValue) => navigate(newValue)}
              sx={{
                minHeight: { xs: 48, md: 72 },
                '& .MuiTabs-indicator': {
                  display: 'none',
                },
                '& .MuiTab-root': {
                  minHeight: { xs: 48, md: 72 },
                  fontFamily: '"Martel", serif',
                  fontWeight: 600,
                  fontSize: { xs: 14, sm: 16, md: 18 },
                  textTransform: 'none',
                  color: '#000',
                  position: 'relative',
                  overflow: 'visible',
                  px: { xs: 1, sm: 2.5 },
                  '&.Mui-selected': {
                    color: '#51B949',
                  },
                  '&:hover .reveal-text': {
                    transform: 'scaleY(1)',
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
                      <Box sx={{ visibility: 'hidden', lineHeight: 1.1 }}>{item.label}</Box>
                      {/* Normal text */}
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
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
                      {/* Green text */}
                      <Box
                        className="reveal-text"
                        sx={{
                          position: 'absolute',
                          inset: 0,
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

          {/* Language & Hamburger */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1.5 } }}>
            <LanguageToggle />
            {/* Hamburger for mobile */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', ml: 1 }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ p: 1.2 }}
              >
                <Iconify icon="eva:menu-fill" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Toolbar>

      {/* Drawer for Mobile */}
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

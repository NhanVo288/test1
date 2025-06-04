import { Box, Typography, Grid } from '@mui/material';

export default function PartnersSection() {
  const logos = [
    { src: '/logo/partner/binance.png', alt: 'Binance' },
    { src: '/logo/partner/bitget.png', alt: 'Bitget' },
    { src: '/logo/partner/bybit.png', alt: 'Bybit' },
    { src: '/logo/partner/coinbase.png', alt: 'Coinbase' },
    { src: '/logo/partner/gateio.png', alt: 'Gate.io' },
    { src: '/logo/partner/okx.png', alt: 'OKX' },
    { src: '/logo/partner/mexc.png', alt: 'MEXC' },
    { src: '/logo/partner/kucoin.png', alt: 'KuCoin' },
    { src: '/logo/partner/bingx.png', alt: 'BingX' },
    { src: '/logo/partner/bscs.png', alt: 'BSCS' },
    { src: '/logo/partner/lbank.png', alt: 'LBank' },
    { src: '/logo/partner/blockchaintoday.png', alt: 'Blockchain Today' },
    { src: '/logo/partner/hypelab.png', alt: 'Hype Lab' },
    { src: '/logo/partner/whitebit.png', alt: 'Whitebit' },
    { src: '/logo/partner/kraken.png', alt: 'Kraken' },
    { src: '/logo/partner/htx.png', alt: 'HTX' },
    { src: '/logo/partner/hashkey.png', alt: 'HashKey Exchange' },
    { src: '/logo/partner/crypto.png', alt: 'Crypto.com' },
    { src: '/logo/partner/backpack.png', alt: 'Backpack' },
    { src: '/logo/partner/bitstamp.png', alt: 'Bitstamp' },
    { src: '/logo/partner/bitfinex.png', alt: 'Bitfinex' },
    { src: '/logo/partner/bitkub.png', alt: 'Bitkub' },
    { src: '/logo/partner/luno.png', alt: 'Luno' },
    { src: '/logo/partner/woox.png', alt: 'WOOX' },
    { src: '/logo/partner/digifinex.png', alt: 'DigiFinex' },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1200,
        mx: 'auto',
        my: 6,
        py: 4,
        px: { xs: 1, md: 4 },
        background: 'transparent',
      }}
    >
      <Grid container spacing={0} alignItems="center">
        {/* Left: Title */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            mb: { xs: 2, md: 0 },
            minHeight: { xs: 'auto', md: 370 },
            display: 'flex',
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Typography
            component="div"
            sx={{
              fontFamily: 'Martel, serif',
              fontSize: { xs: 30, sm: 36, md: 50 },
              fontWeight: 600,
              ml: { xs: 0, md: 2.5 },
              mb: { xs: 2, md: 0 },
              lineHeight: 1.1,
              letterSpacing: 0.5,
              mt: 14
            }}
          >
            Our<br />
            Partners
          </Typography>
        </Grid>

        {/* Right: Logo grid */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {logos.map((logo, idx) => (
              <Grid
                item
                xs={4}
                sm={3}
                md={2.4}
                key={idx}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: { xs: 1, md: 0 },
                }}
              >
                <Box
                  component="img"
                  src={logo.src}
                  alt={logo.alt}
                  sx={{
                    width: '100%',
                    maxWidth: { xs: 70, sm: 100, md: 120 },
                    objectFit: 'contain',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.1)' },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

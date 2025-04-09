import React, { useState } from 'react'
import { Typography, Container, CssBaseline, Stack, Paper } from '@mui/material'
import LaptopIcon from '@mui/icons-material/Laptop';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { HomeToggleType } from './types/basics/HomeToggle.type'
import { StyledToggleButton, StyledToggleButtonGroup } from './components/basics/StyledToggle';
import MobilePlayground from './components/playgrounds/mobile/MobilePlayground';
import WebBrowserPlayground from './components/playgrounds/web/WebBrowserPlayground';

function HeroSection() {
    const [view, setView] = useState<HomeToggleType>('Web')

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed style={{ backgroundImage: 'linear-gradient(135deg, #1e3c72 0%, #2a2550 100%)', height: '100%', width: '100%' }}>
                <Stack width="100%" maxWidth="lg" sx={{ margin: '0 auto', padding: '2rem' }} justifyContent={'center'} alignItems="center" gap={2}>
                    <Typography variant="h4" component="h5" color="white" fontWeight={700} textAlign="center">
                        App Name
                    </Typography>
                    <Paper
                        elevation={0}
                        sx={(theme) => ({
                            display: 'flex',
                            border: `1px solid ${theme.palette.divider}`,
                            flexWrap: 'wrap',
                        })}
                    >
                        <StyledToggleButtonGroup
                            size='large'
                            aria-label="Platform"
                            exclusive
                            value={view}
                            onChange={(e, val: HomeToggleType) => setView(prev => val || prev)}
                        >
                            <StyledToggleButton value="Web" aria-label="laptop">
                                <LaptopIcon />
                            </StyledToggleButton>
                            <StyledToggleButton value="Mobile" aria-label="phone">
                                <PhoneAndroidIcon />
                            </StyledToggleButton>
                        </StyledToggleButtonGroup>
                    </Paper>
                    {view === 'Web' ? <WebBrowserPlayground /> : <MobilePlayground />}
                </Stack>
            </Container>
        </React.Fragment>
    )
}

export default HeroSection
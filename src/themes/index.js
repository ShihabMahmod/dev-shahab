
import { ThemeProvider } from '@mui/material';

import { useTheme } from 'next-themes';
import React, { useEffect, useMemo, useState } from 'react';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

export const NextThemeConfigProvider = ({ children }) => {
    const { resolvedTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const theme = useMemo(() => resolvedTheme === 'light' ? lightTheme : darkTheme, [resolvedTheme]);

    if (!mounted) return <div style={{ visibility: 'hidden' }} />

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};
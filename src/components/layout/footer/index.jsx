import { Container, Divider, Grid, Typography } from "@mui/material";
import { Box, Stack, useTheme } from "@mui/system";
import { FigmaIcon, LogoImg, } from "../../../assets/svg";
import { layout } from "../../../fakeData/layout";

export default function Footer() {
    const theme = useTheme()
    const { socials, socialsTitle, description, link, copyRight, logoTitle,
        refText } = layout?.footer || {};
    return (
        <Container maxWidth="lg" >
            <Divider />
            <Stack spacing={8} mt={8}>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6} justifyContent={'center'}>
                        <Stack spacing={4}>
                            <Stack direction={{ xs: 'column', md: 'row' }} alignItems={'center'} spacing={6} textAlign={'center'}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    spacing={1}
                                    component="a"
                                    href="/"
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                >
                                    <LogoImg iconColor={theme.palette.text.primary} />
                                    <Typography fontWeight={800} color={(theme) => theme.palette.text.primary}>
                                        {logoTitle}
                                    </Typography>
                                </Stack>
                                <Typography
                                    color={(theme) => theme.palette.text.primary}
                                    component={"a"}
                                    href="/"
                                    target="_blank"
                                    fontSize={{
                                        xs: 14,
                                        sm: 16,
                                    }}
                                >
                                    {link}
                                </Typography>
                            </Stack>

                            <Typography
                                fontSize={{
                                    xs: 14,
                                    sm: 16,
                                }}
                                fontWeight={400}
                                align="center"
                                color={(theme) => theme.palette.text.secondary}
                            >
                                {description}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack alignItems="center" justifyContent='center' >
                            <Typography color={(theme) => theme.palette.text.primary}>
                                {socialsTitle}
                            </Typography>
                            <Stack direction="row" py={1} gap={1} >
                                {
                                    socials.map((item, index) => {
                                        return (
                                            <Box
                                                component={"a"}
                                                href={item.link}
                                                target="_blank"
                                                key={Math.random()}
                                                sx={{
                                                    '&:hover': {
                                                        transform: 'scale(1.1)',
                                                    },
                                                    color: theme.palette.text.primary,
                                                }}
                                            >
                                                {item.img}

                                            </Box>
                                        )
                                    })
                                }


                            </Stack>
                            <Stack justifyContent='center' alignItems='center' >
                                {
                                    refText && (
                                        <>
                                            <Typography
                                                fontSize="12px"
                                                fontWeight={400}
                                                color={(theme) => theme.palette.text.primary}
                                                textAlign={'center'}
                                            >
                                                {refText}
                                            </Typography>
                                            <Box>
                                                <Box
                                                    component={"a"}
                                                    href={"https://www.figma.com/community/file/1164933568884615740"}
                                                    target="_blank"
                                                >
                                                    <FigmaIcon
                                                        color={theme.palette.text.primary}
                                                    />
                                                </Box>
                                            </Box>
                                        </>
                                    )
                                }
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

                <Typography
                    fontSize="12px"
                    fontWeight={400}
                    color={(theme) => theme.palette.text.primary}
                    textAlign={'center'}
                    py={2}
                >
                    ©{' '}
                    {
                        new Date().getFullYear()
                    }
                    {' '}
                    {copyRight}
                </Typography>
            </Stack >
        </Container>
    )
}
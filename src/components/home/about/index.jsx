import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { homeAboutSectionData } from '../../../fakeData/about-me';
import { hexToRGBA } from '../../../utility/hex-to-rgba';
import { ForwardBtn } from '../../shared';

export default function About() {
    const { aboutData, overleafResume, image } = homeAboutSectionData;
    return (
        <>
            <ForwardBtn title='About' isShowBackBtn={false} />
            <Grid container spacing={2} alignItems={"center"}>
                <Grid item xs={12} md={6}>
                    <Stack spacing={3} p py={{ xs: 2, sm: 3, md: 8 }}>
                        {
                            aboutData?.map((item) => (
                                <Typography
                                    color={(theme) => theme.palette.text.secondary}
                                    fontWeight={400}
                                    fontSize={{
                                        xs: 14,
                                        sm: 16,
                                    }}
                                    key={item.id}
                                >{item.text}</Typography>
                            ))
                        }

                        <Box display="flex" flexDirection={{ md: 'row', xs: 'column' }} gap={2}>
                            <Button
                                variant='outlined'
                                component={Link}
                                to="/about"
                                startIcon={<ReadMoreIcon />}
                                color="primary"
                                sx={{
                                    '&:hover': {
                                        backgroundColor: (theme) => hexToRGBA(theme.palette.primary.main, 0.2),
                                    },
                                }}

                            >
                                Read More
                            </Button>
                            <Button
                                variant='outlined'
                                component={Link}
                                target="_blank"
                                to={overleafResume}
                                startIcon={<PictureAsPdfIcon />}
                                color="primary"
                                sx={{
                                    '&:hover': {
                                        backgroundColor: (theme) => hexToRGBA(theme.palette.primary.main, 0.2),
                                    },
                                }}
                            >
                                Download CV
                            </Button>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}  >
                    <Stack alignItems="flex-end">
                        <Box
                            sx={{
                                width: {
                                    xs: '100%', sm: 'auto',
                                    md: 300, lg: 400,
                                },
                                height: {
                                    xs: 'auto', sm: 'auto',
                                    md: 400, lg: 500,
                                },
                                //filter: isDark && 'grayscale(100%)',
                                aspectRatio: '1/1',
                                borderRadius: 2,
                                overflow: 'hidden',

                            }}
                        >
                            <LazyLoadImage
                                alt='about-image'
                                effect="blur"
                                src={image}
                                width={"100%"}
                                height={"100%"}
                            />
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

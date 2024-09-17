import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Button, Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from 'react-router-dom';
import { aboutMePageData } from "../../fakeData/about-me";
import { hexToRGBA } from '../../utility/hex-to-rgba';
import { ForwardBtn } from '../shared';
import Breadcrumbs from '../shared/Breadcrumbs';
import SkillsCard from '../shared/SkillsCard';


export default function AboutMePage() {
    const { aboutData, mySkills, funFact, overleafResume, image } = aboutMePageData || {};
    const FunFactCard = () => {
        return (
            <Stack
                direction="row"
                flexWrap="wrap"
                gap={2}
            >
                {
                    funFact.map((fact, index) => {
                        return (
                            <Box
                                sx={{
                                    border: (theme) => `1px solid ${theme.palette.divider}`,
                                    p: 1,
                                }}
                                key={Math.random()}
                            >
                                <Typography
                                    fontSize={{
                                        xs: 14,
                                        sm: 16,
                                    }}
                                    fontWeight={400}
                                    color={(theme) => theme.palette.text.secondary}
                                >
                                    {fact}
                                </Typography>
                            </Box >
                        )
                    })
                }
            </Stack>

        )
    }
    return (
        <Container maxWidth="lg">
            <Stack gap={4}>
                <Breadcrumbs title="about-me" description={"Who am I?"} />
                <Grid container spacing={2} alignItems={'center'} >
                    <Grid item xs={12} md={4}>
                        <Stack >
                            <Box
                                sx={{
                                    width: {
                                        xs: '100%', sm: '100%',
                                        md: 'auto', lg: 'auto',
                                    },
                                    height: {
                                        xs: 'auto', sm: 'auto',
                                        md: 350, lg: 600,
                                    },
                                    //  filter: isDark && 'grayscale(100%)',
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
                    <Grid item xs={12} md={8}  >
                        <Stack spacing={3}  >
                            {
                                aboutData.map((data, index) => (
                                    <Typography
                                        color={(theme) => theme.palette.text.secondary}
                                        fontWeight={400}
                                        fontSize={16}
                                        key={data.id}
                                    >{data.text}</Typography>
                                ))
                            }
                            <Box
                                display="flex"
                            >
                                <Button
                                    component={Link}
                                    target="_blank"
                                    to={overleafResume}
                                    startIcon={<PictureAsPdfIcon />}
                                    variant="outlined"
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

                </Grid>
                <Stack gap={8}>
                    <ForwardBtn title='skills' isShowBackBtn={false} />
                    <Grid container gap={2} justifyContent={'left'}>
                        {
                            mySkills?.map((skill, index) => {
                                return (
                                    <Grid item xs={12} md={4} lg={1.5} key={index}>
                                        <SkillsCard
                                            key={Math.random()}
                                            title={skill?.title}
                                            skills={skill?.items}
                                        />
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                </Stack>
                <Stack gap={8}>
                    <ForwardBtn title='fun-facts' isShowBackBtn={false} />
                    <FunFactCard />
                </Stack>

            </Stack >
        </Container>
    )
}
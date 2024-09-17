import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from 'react-router-dom';
import { figmaIcon, githubIcon, playIcon, worldIcon } from "../../assets/Icon";
import { hexToRGBA } from '../../utility/hex-to-rgba';

export default function ProjectCard({ data }) {
    return (
        <Grid container gap={4} justifyContent={'center'}>
            {
                data?.map((item) => {
                    return (
                        <Grid item xs={12} sm={8} md={4} lg={3} key={item?.id} >
                            <Box
                                sx={{
                                    border: (theme) => `1px solid ${theme.palette.divider}`,
                                    height: '100%',
                                }}
                            >
                                <Box
                                    sx={{
                                        aspectRatio: '16/9',
                                        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                                        display: 'block',
                                        width: '100%',
                                        height: '200px'
                                    }}
                                >
                                    <LazyLoadImage
                                        alt={item?.title}
                                        effect="blur"
                                        src={item.cardImage}
                                        width={"100%"}
                                        height={"100%"}
                                    />
                                </Box>
                                <Box
                                    component="ul"
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '5px',
                                        padding: '10px',
                                        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,

                                    }}
                                >
                                    {
                                        item?.skills.map((skill) => {
                                            return (
                                                <Box
                                                    key={skill}
                                                    component="li"
                                                    sx={{
                                                        display: 'inline-block',
                                                        px: 1,
                                                        py: 0.5,
                                                        color: (theme) => theme.palette.text.primary,
                                                        fontSize: {
                                                            xs: 12,
                                                            sm: 14,
                                                            md: 16,
                                                        },
                                                        fontWeight: 400,
                                                        backgroundColor: (theme) => hexToRGBA(theme.palette.primary.main, 0.3),
                                                        borderRadius: 1.5,
                                                        marginRight: '0.5rem',
                                                        marginBottom: '0.5rem'
                                                    }}
                                                >
                                                    {skill}
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                                <Stack
                                    p={2}
                                    spacing={2}
                                >
                                    <Box
                                        fontSize={{
                                            xs: 'body1.fontSize',
                                            sm: 'h4.fontSize',
                                            md: 'h3.fontSize',
                                        }}
                                        fontWeight={500}
                                        color={(theme) => theme.palette.text.primary}

                                    >
                                        {item.title} {" "}
                                        {
                                            item?.isPrivate && (

                                                <Chip
                                                    sx={{
                                                        fontSize: {
                                                            xs: 'caption.fontSize',
                                                            sm: 'body1.fontSize',
                                                        },
                                                        fontWeight: '400',
                                                        color: (theme) => theme.palette.text.primary,
                                                    }}
                                                    label="Private"
                                                    color="primary"
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            )
                                        }
                                    </Box>
                                    <Typography
                                        fontSize={14}
                                        fontWeight={400}
                                        color={(theme) => theme.palette.text.secondary}
                                    >
                                        {item?.description}
                                    </Typography>
                                    <Box
                                        display="flex"
                                        gap={2}
                                        flexWrap="wrap"
                                    >
                                        {
                                            item.liveUrl && <Button
                                                component={Link}
                                                target="_blank"
                                                to={item.liveUrl}
                                                startIcon={<Box component={'img'} src={worldIcon} alt="play" height={16} width={16} />}
                                                variant="outlined"
                                                color="secondary"
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: (theme) => hexToRGBA(theme.palette.secondary.main, 0.3),
                                                    }
                                                }}
                                            >
                                                Live
                                            </Button>
                                        }
                                        {
                                            item?.figma && <Button
                                                endIcon={<Box component={'img'} src={figmaIcon} alt="play" height={24} width={24} />}
                                                to={item.figma}
                                                component={Link}
                                                target="_blank"
                                                variant="outlined"
                                                color="secondary"
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: (theme) => hexToRGBA(theme.palette.secondary.main, 0.3),
                                                    }
                                                }}
                                            >
                                                Figma
                                            </Button>
                                        }
                                        {
                                            item.githubUrl && <Button
                                                to={item.githubUrl}
                                                startIcon={<Box component={'img'} src={githubIcon} alt="play" height={24} width={24} />}
                                                component={Link}
                                                target="_blank"
                                                variant="outlined"
                                                color="secondary"
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: (theme) => hexToRGBA(theme.palette.secondary.main, 0.3),
                                                    }
                                                }}
                                            >
                                                Github
                                            </Button>
                                        }
                                        {
                                            item.youtubeUrl && <Button
                                                to={item.youtubeUrl}
                                                endIcon={<Box component={'img'} src={playIcon} alt="play" height={24} width={24} />}
                                                component={Link}
                                                target="_blank"
                                                variant="outlined"
                                                color="secondary"
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: (theme) => hexToRGBA(theme.palette.secondary.main, 0.3),
                                                    }
                                                }}
                                            >
                                                Demo
                                            </Button>

                                        }

                                    </Box>
                                </Stack>

                            </Box>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

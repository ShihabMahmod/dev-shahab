import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { certificateData } from "../../fakeData/certification";
import { hexToRGBA } from "../../utility/hex-to-rgba";
import Breadcrumbs from "../shared/Breadcrumbs";
export default function CertificationPage() {
    const { courseCertificate, courseReport, feedback, platform, recommendation, tag, title } = certificateData || {};
    const getColor = (index) => {
        switch (index) {
            case 0:
                return 'primary';
            case 1:
                return 'secondary';
            case 2:
                return 'success';
            case 3:
                return 'warning';
            case 4:
                return 'error';
            default:
                return 'primary';
        }

    }
    return (
        <Container maxWidth='lg'>
            <Stack gap={4} >
                <Breadcrumbs title="certification" description={"My certifications"} />
                <Stack
                    p={2}
                    borderRadius={2}
                    sx={{
                        backgroundColor: (theme) => hexToRGBA(theme.palette.background.paper, 0.7),
                    }}
                >
                    <Typography
                        color={(theme) => theme.palette.text.primary}
                    >
                        {title} by {' '}
                        <a href="https://learnwithsumit.com/certificates/verify/LWSCTXN-SNT7PO6I" target="_blank" rel="noreferrer"
                            title="Click to verify the certificate"
                        >
                            <Box component={'span'} color={(theme) => theme.palette.text.disabled}>{platform}</Box>
                        </a>
                    </Typography>
                    <Divider />
                    <Typography
                        color={(theme) => theme.palette.text.primary}
                        fontSize={{
                            xs: 14,
                            sm: 16
                        }}
                        fontWeight={400}
                        mt={2}
                    >
                        Topics i learned from this course
                    </Typography>
                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        gap={2}
                        py={2}
                    >
                        {
                            tag?.map((item, index) => (
                                <Chip key={index} label={item}
                                    size="small"
                                    color={getColor(index)}
                                />
                            ))
                        }
                    </Stack>
                    <Divider />
                    <Typography
                        color={(theme) => theme.palette.text.primary}
                        fontSize={{
                            xs: 14,
                            sm: 16
                        }}
                        fontWeight={400}
                        mt={2}
                    >
                        Course instructor feedback
                    </Typography>
                    <Typography
                        color={(theme) => theme.palette.text.disabled}
                        fontSize={{
                            xs: 12,
                            sm: 14
                        }}
                        fontWeight={400}
                        my={2}
                    >
                        {feedback}
                    </Typography>

                    <Stack direction="row"
                        justifyContent="center"
                        flexWrap="wrap"
                        // alignItems="center"
                        gap={2}
                        p={2}
                        border={(theme) => `1px solid ${theme.palette.divider}`}
                        pb={4}

                    >
                        <Stack
                            width={{
                                xs: '100%',
                                sm: '100%',
                                md: '30%'
                            }}
                        >
                            <Typography
                                color={(theme) => theme.palette.text.disabled}
                                fontSize={{
                                    xs: 14,
                                    sm: 16
                                }}
                                fontWeight={400}
                                pb={2}
                            >
                                Course Certificate
                            </Typography>
                            <Box
                                sx={{
                                    aspectRatio: '16/9',
                                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                                    display: 'block',
                                    width: '100%',
                                    height: '400px',
                                    borderRadius: '10px',
                                    overflow: 'hidden'
                                }}
                            >
                                <LazyLoadImage
                                    alt="certificate"
                                    effect="blur"
                                    src={courseCertificate}
                                    width={"100%"}
                                    height={"100%"}
                                />
                            </Box>
                        </Stack>
                        <Stack
                            width={{
                                xs: '100%',
                                md: '30%'
                            }}
                        >
                            <Typography
                                color={(theme) => theme.palette.text.disabled}
                                fontSize={{
                                    xs: 14,
                                    sm: 16
                                }}
                                fontWeight={400}
                                pb={2}
                            >
                                Course Report
                            </Typography>
                            <Box
                                sx={{
                                    aspectRatio: '16/9',
                                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                                    display: 'block',
                                    width: '100%',
                                    height: '400px',
                                    borderRadius: '10px',
                                    overflow: 'hidden'
                                }}
                            >
                                <LazyLoadImage
                                    alt="certificate"
                                    effect="blur"
                                    src={courseReport}
                                    width={"100%"}
                                    height={"100%"}

                                />
                            </Box>
                        </Stack>
                        <Stack
                            width={{
                                xs: '100%',
                                sm: '100%',
                                md: '30%'
                            }}
                        >
                            <Typography
                                color={(theme) => theme.palette.text.disabled}
                                fontSize={{
                                    xs: 14,
                                    sm: 16
                                }}
                                fontWeight={400}
                                pb={2}
                            >
                                Recommendation Letter
                            </Typography>
                            <Box
                                sx={{
                                    aspectRatio: '16/9',
                                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                                    display: 'block',
                                    width: '100%',
                                    height: '400px',
                                    borderRadius: '10px',
                                    overflow: 'hidden'
                                }}
                            >
                                <LazyLoadImage
                                    alt="certificate"
                                    effect="blur"
                                    src={recommendation}
                                    width={"100%"}
                                    height={"100%"}
                                />
                            </Box>
                        </Stack>
                    </Stack>
                </Stack >
            </Stack >
        </Container>
    )
}
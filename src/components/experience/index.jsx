import { Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { experiences } from "../../fakeData/experience";
import Breadcrumbs from "../shared/Breadcrumbs";


export default function ExperiencePage() {
    const ExperienceCard = ({ data }) => {
        const { title, company, hireFor, year, role, address } = data || {};

        return (
            <Box
                sx={{
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    display: 'inline-block',
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 0,
                    height: '100%',
                }}
            >
                <Box>
                    <Box
                        sx={{
                            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                            p: 1,
                            color: (theme) => theme.palette.text.primary,
                            fontSize: 16,
                            fontWeight: 600,
                        }}
                    >{title}
                        <Box component={'span'} sx={{
                            color: (theme) => theme.palette.primary.main,
                            fontWeight: 700,

                        }}>
                            {"\t"} {'('} {hireFor}{')'}
                        </Box>
                        <Stack
                            alignItems="flex-end"
                            sx={{
                                fontSize: 12,
                                fontWeight: 400,
                                color: (theme) => theme.palette.text.secondary,
                            }}

                        >
                            {year}
                        </Stack>
                    </Box>
                </Box>
                <Box
                    sx={{
                        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                        p: 1,
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        fontSize={{
                            xs: 14,
                            sm: 16,
                        }}
                        fontWeight={700}
                        color={(theme) => theme.palette.text.primary}

                    >
                        {company}
                    </Typography>
                    <Typography
                        fontSize={12}
                        fontWeight={400}
                        color={(theme) => theme.palette.text.secondary}
                    >
                        {address}
                    </Typography>
                </Box>
                <Box
                    // component={"ul"}
                    sx={{
                        p: 1,
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        justifyContent: 'start',
                        alignItems: 'start',

                    }}
                >

                    {
                        role.map((item, index) => {
                            return (
                                <Typography
                                    component={"li"}
                                    fontSize={{
                                        md: 14,
                                        xs: 12,
                                    }}
                                    fontWeight={500}
                                    key={Math.random()}
                                    color={(theme) => theme.palette.text.secondary}

                                >
                                    {item}
                                </Typography>
                            )
                        })
                    }

                </Box>

            </Box >
        )
    }
    return (
        <Container maxWidth={'lg'} >
            <Stack gap={4}>
                <Breadcrumbs title="experience" description={"My working experience"} />
                <Grid container spacing={2} >
                    {
                        experiences?.map((item, index) => {
                            return (
                                <Grid item xs={12} md={6} key={Math.random()}>
                                    <ExperienceCard
                                        data={item}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Stack>
        </Container>
    )
}

import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Breadcrumbs({ title, description }) {
    const navigate = useNavigate();

    return (
        <Stack spacing={2}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                pt={4}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                >
                    <Typography
                        color={(theme) => theme.palette.primary.main}
                        fontWeight={500}
                        fontSize={{
                            xs: 24,
                            sm: 32,
                        }}
                    >
                        /<Typography component={'span'} color={(theme) => theme.palette.text.primary} fontWeight={500}
                            fontSize={{
                                xs: 24,
                                sm: 32,
                            }}>
                            {title}
                        </Typography>

                    </Typography>
                </Stack>
                <Typography
                    fontWeight={400}
                    fontSize={{
                        xs: 14,
                        sm: 16,
                    }}

                    component={Link}
                    //  to='/'
                    onClick={() => navigate(-1)}
                    sx={{
                        borderBottom: (theme) => `2px solid ${theme.palette.primary.main}`,
                        "&:hover": {
                            color: (theme) => theme.palette.primary.main,
                        }
                    }}
                    color={(theme) => theme.palette.text.primary}
                >
                    {'<'}~~ Back
                </Typography>
            </Stack>
            <Typography
                color={(theme) => theme.palette.text.secondary}
                fontWeight={400}
                fontSize={{
                    xs: 14,
                    sm: 16,
                }}
            >
                {description}
            </Typography>
        </Stack>

    )
}

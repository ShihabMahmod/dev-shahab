import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ForwardBtn({ title, href, isShowBackBtn = true }) {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
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
                        xs: 'h3.fontSize',
                        sm: 'h2.fontSize',
                        md: 'h1.fontSize',
                    }}
                >
                    #<Typography component={'span'} color={(theme) => theme.palette.text.primary}
                        fontWeight={500}
                        fontSize={{
                            xs: 'body1.fontSize',
                            sm: 'h2.fontSize',
                            md: 'h1.fontSize',
                        }}
                    >
                        {title}
                    </Typography>

                </Typography>
                <Box
                    sx={{
                        width: {
                            xs: '10px', sm: '40px',
                            md: '60px', lg: '100px',
                        },
                        height: '1.5px',
                        backgroundColor: (theme) => theme.palette.primary.main
                    }}
                />
            </Stack>
            {isShowBackBtn && <Typography
                fontWeight={400}
                fontSize={{
                    xs: 10,
                    sm: 16,
                }}
                color={(theme) => theme.palette.text.primary}
                component={Link}
                to={href}
                sx={{
                    borderBottom: (theme) => `2px solid ${theme.palette.primary.main}`,
                    "&:hover": {
                        color: '#C778DD'
                    }
                }}
            >
                View all ~~{'>'}
            </Typography>
            }
        </Stack>
    )
}

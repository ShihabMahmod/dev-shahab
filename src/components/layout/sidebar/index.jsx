import { Box, Stack } from "@mui/material";
import React from "react";
import { layout } from "../../../fakeData/layout";


export default function Sidebar() {
    const { sidebar } = layout || {};
    return (
        <Stack
            sx={{
                width: "100%",
                pt: 4
            }}
        >
            <Stack
                alignItems="center"
                spacing={2}
                width="35%"
            >
                <Box
                    sx={{
                        width: "2px",
                        height: 240,
                        backgroundColor: (theme) => theme.palette.divider,
                    }}
                />
                <Stack>
                    {
                        sidebar?.map((item) => (
                            <Box
                                component="a"
                                href={item.link}
                                target="_blank"
                                key={item.id}
                                sx={{
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                        // transition: "all 0.3s ease-in-out",
                                    },
                                    color: (theme) => theme.palette.text.primary,
                                }}
                            >  {item.icon}
                            </Box>
                        ))
                    }

                </Stack>

            </Stack>
        </Stack>
    )
}

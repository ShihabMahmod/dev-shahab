import { Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { educationData } from "../../fakeData/education";
import Breadcrumbs from "../shared/Breadcrumbs";


export default function EducationPage() {
    const SingleEducation = ({ data }) => {
        const { title, school, year } = data;
        return (
            <Box
                sx={{
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    display: 'inline-block',
                    minWidth: '200px',
                    maxWidth: '300px',
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 0,
                }}
            >
                <Box>
                    <Box
                        sx={{
                            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                            p: 1,
                            color: (theme) => theme.palette.text.primary,
                        }}
                        fontSize={16}
                        fontWeight={600}
                    >{title}
                        <Stack
                            alignItems="flex-end"
                            sx={{
                                fontSize: 12,
                                fontWeight: 400,
                                color: (theme) => theme.palette.text.primary,
                                fontFamily: 'FiraCode',
                            }}
                        >
                            {year}
                        </Stack>
                    </Box>
                </Box>
                <Box
                    component={"ul"}
                    sx={{
                        p: 1,
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        justifyContent: 'start',
                        alignItems: 'start',
                    }}
                >

                    <Typography
                        component={"li"}
                        fontSize={14}
                        fontWeight={500}
                        text={school}
                        color={(theme) => theme.palette.text.secondary}
                    >
                        {school}
                    </Typography>

                </Box>

            </Box >
        )
    }
    return (
        <Container maxWidth="lg">
            <Stack gap={4}>
                <Breadcrumbs title="education" description={"My educational background"} />
                <Stack alignItems="center">
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        flexWrap="wrap"
                        gap={1}
                    >
                        {
                            educationData?.map((item) => {
                                return (
                                    <SingleEducation
                                        key={Math.random()}
                                        data={item}
                                    />
                                )
                            })
                        }
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}

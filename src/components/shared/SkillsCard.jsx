import { Box, Typography } from "@mui/material"

const SkillsCard = ({ title, skills }) => {
    return (
        <Box
            sx={{
                border: (theme) => `1px solid ${theme.palette.divider}`,
                // display: 'inline-block',
                // minWidth: '200px',
                // maxWidth: '300px',
                // flexGrow: 1,
                // flexShrink: 1,
                // flexBasis: 0,
                height: '100%',
            }}
        >
            <Typography
                sx={{
                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                    p: 1,
                }}
                fontSize={{
                    xs: 13,
                    md: 15,
                }}
                fontWeight={600}
                color={(theme) => theme.palette.text.primary}
            >
                {title}
            </Typography>
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
                {skills?.map((skill, index) => {
                    return (
                        <Typography
                            key={index}
                            component={"li"}
                            fontSize={{
                                xs: 12,
                                md: 14,
                            }}
                            fontWeight={500}
                            color={(theme) => theme.palette.text.secondary}
                        >
                            {skill}{skills.length - 1 !== index && ','}
                        </Typography>
                    )
                })}

            </Box>

        </Box >
    )
}
export default SkillsCard
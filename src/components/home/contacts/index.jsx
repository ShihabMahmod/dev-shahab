import { Box, Grid, Stack, Typography } from "@mui/material";
import { ForwardBtn } from "components/shared";
import { contactData } from "fakeData/contact";

export default function Contacts() {
    const { text, socialAccountsTitle, socialAccounts } = contactData || {};
    return (
        <Grid container spacing={2} alignItems={'center'} pb={8}>
            <Grid item xs={12} md={6}  >
                <ForwardBtn title='Contacts' isShowBackBtn={false} />
                <Stack
                    spacing={3}
                    py={{
                        xs: 2,
                        sm: 3,
                        md: 8
                    }}
                >
                    <Typography
                        color={(theme) => theme.palette.text.secondary}
                        fontWeight={400}
                        fontSize={{
                            xs: 14,
                            sm: 16,
                        }}
                    >
                        {text}
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
                <Stack
                    sx={{
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        p: 1,
                        width: 'fit-content',
                    }}
                    spacing={1}
                >
                    <Typography color={(theme) => theme.palette.text.primary}>
                        {socialAccountsTitle}:
                    </Typography>
                    {
                        socialAccounts?.map((item) => {
                            return (
                                <Stack
                                    direction="row"
                                    width={'fit-content'}
                                    spacing={1}
                                    alignItems="center"
                                    component={'a'}
                                    key={Math.random()}
                                    {...(item?.isEmail ? { href: `mailto:` + item?.link }

                                        : { href: item?.link, target: '_blank' })}
                                >
                                    <Box component={'img'} src={item?.icon} alt={item?.name}
                                        sx={{
                                            width: {
                                                xs: 20,
                                                sm: 'auto',
                                            },
                                            height: {
                                                xs: 20,
                                                sm: 'auto',
                                            },
                                        }}
                                    />

                                    <Typography
                                        fontWeight={400}
                                        fontSize={{
                                            xs: 10,
                                            sm: 16,
                                        }}
                                        color={(theme) => theme.palette.text.secondary}
                                        component="span"
                                        flexWrap={'wrap'}

                                    >
                                        {item?.text}
                                    </Typography>
                                </Stack>
                            )
                        })
                    }
                </Stack>
            </Grid>
        </Grid >
    )
}

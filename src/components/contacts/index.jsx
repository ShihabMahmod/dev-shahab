import { Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { contactData } from "../../fakeData/contact";
import Breadcrumbs from "../shared/Breadcrumbs";
// import ContactFrom from "./ContactFrom";
function ContactsPage() {
    const { text, socialAccounts, socialAccountsTitle } = contactData || {};

    return (
        <Container maxWidth="lg">
            <Stack gap={4} >
                <Breadcrumbs title="contacts" description={"Get in touch with me"} />
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={12} md={6}  >
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
                        {/* <ContactFrom /> */}
                    </Grid>
                    <Grid item xs={12} md={6}  >
                        <Stack
                            justifyContent="center"
                            sx={{
                                alignItems: {
                                    xs: 'start', sm: 'center',
                                },
                            }}
                        >
                            <Stack
                                sx={{
                                    border: (theme) => `1px solid ${theme.palette.divider}`,
                                    p: 1,
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
                                                spacing={1}
                                                alignItems="center"
                                                component={'a'}
                                                key={Math.random()}
                                                {...(item?.isEmail ? { href: `mailto:` + item?.link }

                                                    : { href: item?.link, target: '_blank' })}
                                            >
                                                <img src={item?.icon} alt={item?.name} />
                                                <Typography
                                                    fontWeight={400}
                                                    fontSize={16}
                                                    color={(theme) => theme.palette.text.secondary}

                                                    component="span"
                                                >
                                                    {item?.text}
                                                </Typography>
                                            </Stack>
                                        )
                                    })
                                }
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid >
            </Stack >
        </Container>
    )
}
export default React.memo(ContactsPage);
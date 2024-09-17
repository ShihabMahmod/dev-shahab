import { Container, Stack } from '@mui/material'
import About from './about'
import Banner from './banner'
import Contacts from './contacts'
import Portfolio from './portfolio'
import Skills from './skills'

export default function HomePage() {
    return (
        <Container maxWidth="lg">
            <Stack gap={8} >
                <Banner />
                <Portfolio />
                <Skills />
                <About />
                <Contacts />
            </Stack>
        </Container>
    )
}

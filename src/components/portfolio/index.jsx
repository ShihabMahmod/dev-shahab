import { Container } from "@mui/material";
import { Stack } from "@mui/system";
import "react-lazy-load-image-component/src/effects/blur.css";
import { homePortfolioPageData } from "../../fakeData/portfolio";
import { ForwardBtn, ProjectCard } from "../shared";
import Breadcrumbs from "../shared/Breadcrumbs";

export default function PortfolioPage() {
    return (
        <Container maxWidth="lg">
            <Stack gap={4} >
                <Breadcrumbs title="projects" description={"All of my projects"} />

                {
                    homePortfolioPageData?.map((item, index) => {
                        return (
                            <Stack
                                key={Math.random()}
                                gap={4}
                            >
                                <ForwardBtn
                                    title={item?.results?.title}
                                    isShowBackBtn={false}

                                />
                                <ProjectCard
                                    key={index}
                                    data={item.results.data}
                                />
                            </Stack>

                        )
                    })
                }
            </Stack>
        </Container>
    )
}
import { Stack } from "@mui/system";
import "react-lazy-load-image-component/src/effects/blur.css";
import { homePortfolioSectionData } from "../../../fakeData/portfolio";
import { ForwardBtn, ProjectCard } from "../../shared";

export default function Portfolio() {
    return (
        <Stack gap={4}>
            <ForwardBtn title="Portfolio" href="/portfolio" />
            <ProjectCard data={homePortfolioSectionData} />
        </Stack>
    )
}

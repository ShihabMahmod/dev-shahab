import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import skillLeftImg from 'assets/images/skillRacktangle.svg';
import { ForwardBtn } from "components/shared";
import SkillsCard from "components/shared/SkillsCard";
import { mySkills } from "fakeData/skills";

const Rectangle = () => {
    return (
        <Stack p={4}>
            <img src={skillLeftImg} alt="skillLeftImg" style={{ width: '100%', height: 'auto' }} />
        </Stack >

    )
}

export default function Skills() {
    return <Stack gap={4}>
        <ForwardBtn title='Skills' isShowBackBtn={false} />
        <Grid container spacing={2} alignItems={'center'} py={2}>
            <Grid item xs={12} md={4}>
                <Stack
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Rectangle />
                </Stack>
            </Grid>
            <Grid item xs={12} md={8}>
                <Grid container gap={2}>
                    {
                        mySkills?.map((skill, index) => {
                            return (
                                <Grid item xs={12} md={4} lg={2.5} key={index}>
                                    <SkillsCard
                                        key={Math.random()}
                                        title={skill?.title}
                                        skills={skill?.items}
                                    />
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Grid>
        </Grid>

    </Stack >
}

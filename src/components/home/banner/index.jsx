import CallIcon from '@mui/icons-material/Call';
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import dotDark from "assets/images/dotDark.svg";
import logoOutline from "assets/images/logoOutline.svg";
import { bannerData } from 'fakeData/banner';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { hexToRGBA } from 'utility/hex-to-rgba';
import styles from "./banner.module.css";

export default function Banner() {
  const {
    title: { title1, title2, title3, title4, title5, title6 },
    subtitle,
    doing: { text, url, urlText },
    blockquote: { quoteText1, quoteText2, quoteText3, quoteText4, quoteBy },
    image } = bannerData;
  return (
    <Stack >
      <Grid container spacing={2}
        sx={{
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6} >
          <Stack spacing={2}>
            <Typography
              fontWeight={600}
              fontSize={{
                xs: 'h3.fontSize',
                sm: 'h2.fontSize',
                md: 'h1.fontSize',
              }}
              color={(theme) => theme.palette.text.primary}
              lineHeight={1.3}

            > {title1} {title2}
              {<br />}
              <Box
                component={'span'}
                color={(theme) => theme.palette.primary.main}
              >
                {title3} {"\t"}
              </Box>
              {title4} {<br />}
              <Box component={'span'} color={(theme) => theme.palette.primary.main}>
                {"\t"} {title5} {"\t"}
              </Box>
              {title6}
            </Typography>
            <Typography
              color={(theme) => theme.palette.text.secondary}
              variant='body1'
            >{subtitle}
            </Typography>
            <Box pt={2}>
              <Button
                component={Link}
                to="/contact"
                startIcon={<CallIcon />}
                variant='outlined'
                color='primary'
                sx={{
                  '&:hover': {
                    backgroundColor: (theme) => hexToRGBA(theme.palette.primary.main, 0.2),
                  },
                }}

              >
                Contact me!!
              </Button>

            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              px: { xs: 0, md: 2, lg: 12 },
            }}
          >
            <Box
              component={'img'}
              src={logoOutline} alt=""
              sx={{
                fontSize: "32px",
                width: 200,
                height: 200,
                position: "absolute",
                top: '10%',
                zIndex: 1,
                aspectRatio: "1/1",
              }}
            />
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                borderBottom: (theme) => `1px solid ${theme.palette.primary.main}`,
                display: "block",
                maxWidth: "100%",
              }}
            >
              <LazyLoadImage
                alt={"hero_img"}
                effect="blur"
                src={image}
                width={"100%"}
                height={"100%"}
              />
            </Box>

            <Box
              sx={{
                padding: "8px",
                border: (theme) => `1px solid ${theme.palette.divider}`,
                color: (theme) => theme.palette.text.primary,

                margin: "0px auto",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                top: -"1px",
                zIndex: 3,
                gap: "8px",
                fontWeight: 500,
              }}
            >
              <Box component={'span'}
                style={{
                  content: "",
                  display: "inline-block",
                  aspectRatio: "1/1",
                  width: "16px",
                  backgroundColor: (theme) => theme.palette.primary.main,
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              ></Box>
              {text}

              <Typography component={Link}
                to={url}
                target='_blank'
                color={(theme) => theme.palette.primary.main}
              >
                {urlText}
              </Typography>
            </Box>
            <Box
              sx={{
                ":after": {
                  content: '""',
                  // display: 'block',
                  //  backgroundImage: `url(${isDark ? dotLight : dotDark})`,
                  backgroundImage: `url(${dotDark})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "absolute",
                  top: '40%',
                  left: '70%',
                  bottom: 30,
                  width: 100,
                  height: 100,
                  zIndex: 0

                },
              }}
            />
          </Box>

        </Grid>
      </Grid >
      <div className={styles.blockquoteWrapper}>
        <div className={styles.blockquote}>
          <Box
            component={'h1'}
            sx={{
              color: (theme) => theme.palette.primary.main,
              ':before': {
                content: '""',
                position: "absolute",
                width: 80,
                border: (theme) => `6px solid ${theme.palette.background.default}`,
                bottom: -3,
                left: 50,
                zIndex: 2,
              },

              ':after': {
                content: '""',
                position: "absolute",
                border: (theme) => `2px solid ${theme.palette.primary.main}`,
                borderRadius: "0 50px 0 0",
                width: "60px",
                height: " 60px",
                bottom: "-60px",
                left: "50px",
                borderBottom: "none",
                borderLeft: "none",
                zIndex: 3,
              },

            }}
          >
            {quoteText1}  <Box component={'span'}
              color={(theme) => theme.palette.text.primary}
            >{quoteText2}</Box> {quoteText3} <Box component={'span'}
              color={(theme) => theme.palette.text.primary}
            >  {quoteText4}</Box>
          </Box>
          <Box component={'h4'}
            sx={{
              color: (theme) => theme.palette.text.primary,
            }}
          >—{quoteBy}<br />
            {/* <em>Web Site Usability: A Designer's Guide</em> */}
          </Box>
        </div>
      </div>
    </Stack >

  )
}
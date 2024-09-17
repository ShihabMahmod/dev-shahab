import { DiscordIcon, GithubIcon, LinkDinIcon, TelegramIcon, TwitterIcon, EmailIcon } from "../assets/svg";

export const layout = {
    header: {
        routes: [
            {
                id: 1,
                name: "home",
                path: "/",
            }, {
                id: 2,
                name: "about-me",
                path: "/about",
            },
            {
                id: 3,
                name: "portfolio",
                path: "/portfolio",
            },
            {
                id: 4,
                name: "experience",
                path: "/experience",
            },
            // {
            //     id: 5,
            //     name: "certification",
            //     path: "/certification",

            // },
            {
                id: 6,
                name: "education",
                path: "/education",
            },
            {
                id: 7,
                name: "contact",
                path: "/contact",
            }
        ],
        logo: require('../assets/images/logo.png'),
        logoTitle: "Sahab Uddin",
    },
    footer: {
        socials: [
            {
                id: 1,
                name: 'github',
                link: "https://github.com/ShihabMahmod",
                img: <GithubIcon />
            },
            {
                id: 2,
                name: 'linkedin',
                link: "https://www.linkedin.com/in/sahab-uddin-shihab-631115131/",
                img: <LinkDinIcon />
            },
            
            {
                id: 4,
                name: 'twitter',
                link: "https://x.com/shihabmahmod58",
                img: <TwitterIcon />
            },
            {
                id: 5,
                name: 'discord',
                link: "https://stackoverflow.com/users/7743342/shihab-mahmod",
                img: <DiscordIcon />
            }
        ],
        socialsTitle: "Social Media",
        description: `Full Stack Engineer at WebHussle`,
        link: 'https://dev-shohan.netlify.app/',
        copyRight: 'Abdul Kader Shohan. All rights reserved.',
        logo: require('../assets/images/logo.png'),
        logoTitle: 'Sahab Uddin',
        refText: 'Special Thanks to Elias Dev for sharing this UI/UX design with Figma Community',

    },
    sidebar: [
        {
            name: 'discord',
            icon: <DiscordIcon />,
            link: 'https://discord.com/sahab30',
            id: 1
        },
        {
            name: 'github',
            icon: <GithubIcon />,
            link: "https://github.com/ShihabMahmod",
            id: 2
        },
        {
            name: 'email',
            icon: <EmailIcon />,
            link: "mailto: sahabuddin.bubt.cse.30@gmail.com",
            id: 3
        }

    ]
}

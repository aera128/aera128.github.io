export const state = () => ({
    projects: [
        {
            title: 'Rapidbook',
            description: 'Online book ordering website for the French company Corlet',
            image: require('~/assets/projects/rapidbook.jpg'),
            links:
            {
                github: null,
                website: 'https://rapidbook.fr/',
                route: null
            }
        },
        {
            title: 'Claket',
            description: 'Simple soundboard palette developed with Nuxt.js and Tailwind',
            image: 'https://raw.githubusercontent.com/aera128/claket/master/static/ClaketSoundboard.jpeg',
            links: {
                github: 'https://github.com/aera128/claket',
                website: 'https://claket.netlify.app/',
                route: null
            }
        },
        {
            title: 'Mcvox',
            description: 'Minecraft schematic generator from obj with colors and textures',
            image: require('~/assets/projects/mcvox.jpg'),
            links: {
                github: 'https://github.com/aera128/mcvox',
                website: null,
                route: null
            }
        },
        {
            title: 'Petite Laine',
            description: 'Multiplayer game made with Vue, NodeJS and SockeIO',
            image: require('~/assets/projects/petitelaine.jpg'),
            links: {
                github: null,
                website: 'https://petitelaine.netlify.app/',
                route: null
            }
        },
        {
            title: 'Musics',
            description: 'Some musics i made',
            image: require('~/assets/projects/youtube.jpg'),
            links: {
                github: null,
                website: 'https://www.youtube.com/channel/UC8-whgRmYdMU91fEK3IGIwA',
                route: null
            }
        },
        {
            title: 'SocialWiki',
            description: 'Social network profile generator from wikipedia pages using Vue, Flask and NLP with SpaCy.',
            image: require('~/assets/projects/socialwiki.jpg'),
            links: {
                github: 'https://github.com/aera128/dataviz_sncf',
                website: null,
                route: null
            }
        },
        {
            title: 'SNCF Stats',
            description: 'Data Visualization of the statistics concerning the lost and returned objects in the SNCF railway network using Vue.',
            image: require('~/assets/projects/project_sncf.jpeg'),
            links: {
                github: 'https://github.com/aera128/dataviz_sncf',
                website: 'https://aera128-sncf-stats.netlify.app/',
                route: null
            }
        },
    ]
})
export const actions = {
    scrollTo(ctx, id) {
        try {
            const offsetTop = document.querySelector(id).offsetTop;

            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        } catch (e) { }
    }
}
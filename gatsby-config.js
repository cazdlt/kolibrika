const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
    siteMetadata: {
        title: "Kolibrika",
        description: "Strategic advisors in market intelligence",
        keywords: "pharma, consulting, farma, market intelligence, commercial excelence, business support, bi",
        contact: {
            phone: "(+57) 315 765 8104",
            email: "ndelatorre@kolibrika.co"
        },
        menuLinks: [
            {
                name: "Inicio",
                link: "/"
            },
            {
                name: "Servicios",
                link: "/services"
            },
            {
                name: "Nosotros",
                link: "/team"
            },
            {
                name: "Historias",
                link: "/testimonials"
            },
            {
                name: "Contacto",
                link: "/contact"
            }
        ]
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-transformer-json",
        "gatsby-transformer-remark",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages"
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/data`,
                name: "data"
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/images`,
                name: "images"
            }
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: guid ? guid : "UA-XXX-1",
                // Puts tracking script in the head instead of the body
                head: false
            }
        }
    ]
};

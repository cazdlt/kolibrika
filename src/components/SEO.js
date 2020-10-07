import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import favicon from "../../static/favicon.svg";

const metadata = data.site.siteMetadata;

const SEO = (props) => (
    <StaticQuery
        query={detailsQuery}
        render={(data) => {
            const title = props.title || metadata.title;
            const desc = props.description || metadata.description;
            const keywords = props.keywords || metadata.keywords;
            return (
                <Helmet
                    htmlAttributes={{
                        lang: "es"
                    }}
                    title={title}
                    titleTemplate={`%s - ${metadata.title}`}
                    link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
                    description={desc}
                    keywords={keywords}
                />
            );
        }}
    />
);

SEO.defaultProps = {
    lang: "es",
    meta: [],
    keywords: ""
};

export default SEO;

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                keywords
            }
        }
    }
`;

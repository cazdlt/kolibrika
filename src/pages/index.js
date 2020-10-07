import React from "react";
import { graphql, withPrefix, Link } from "gatsby";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import Layout from "../layouts/index";
import Call from "../components/Call";
import ServiceCard from "../components/ServiceCard";

const Home = (props) => {
    const markdown = props.data.allMarkdownRemark.edges;
    const json = props.data.allFeaturesJson.edges;
    const metadata = props.data.site.siteMetadata;
    return (
        <Layout bodyClass="page-home">
            <SEO title="Inicio" />
            <Helmet>
                <meta name="description" content={metadata.description} />
            </Helmet>
            {/* <div className="intro"> */}
            <div className="container intro-home">
                <div className="d-flex flex-row">
                    <div className="title-home">
                        <h1 id="title">{metadata.title}</h1>
                        <p id="desc">{metadata.description}</p>
                        <a className="goto" href="#content-home">
                            <span className="arrow" />
                        </a>
                    </div>
                </div>
            </div>
            {/* </div> */}

            <div id="content-home" className="container">
                <div className="row justify-content-start">
                    <div className="col-12">
                        <h2 className="title-3 text-primary mb-3">Nuestros servicios</h2>
                    </div>
                    {markdown.map(({ node }) => (
                        <ServiceCard
                            excerpt={node.excerpt}
                            path={node.frontmatter.path}
                            title={node.frontmatter.title}
                        />
                    ))}
                    <div className="col-12 text-center">
                        <Link className="button button-primary mt-2" to="/services">
                            Ver todos
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2 className="title-3 text-primary mb-4">Con nosotros</h2>
                    </div>
                    {json.map((edge) => (
                        <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
                            <div className="feature">
                                {edge.node.image && (
                                    <div className="feature-image">
                                        <img alt="feature" src={withPrefix(edge.node.image)} />
                                    </div>
                                )}
                                <h2 className="feature-title">{edge.node.title}</h2>
                                <div className="feature-content">{edge.node.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/services/" } }
            sort: { fields: [frontmatter___position], order: ASC }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                    }
                    excerpt
                }
            }
        }
        allFeaturesJson {
            edges {
                node {
                    id
                    title
                    description
                    image
                }
            }
        }
    }
`;

export default Home;

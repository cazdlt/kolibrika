import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../../components/SEO";
import Layout from "../../layouts/index";
import ServiceCard from "../../components/ServiceCard";

const Services = (props) => {
    const services = props.data.allMarkdownRemark.edges;
    return (
        <Layout bodyClass="page-services">
            <SEO title="Servicios" />
            <div className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Servicios</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pb-6">
                <div className="row">
                    {services.map(({ node }) => (
                        <ServiceCard
                            excerpt={node.excerpt}
                            path={node.frontmatter.path}
                            title={node.frontmatter.title}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query ServicesQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/services/" } }
            sort: { fields: [frontmatter___position], order: ASC }
        ) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        title
                        path
                    }
                }
            }
        }
    }
`;

export default Services;

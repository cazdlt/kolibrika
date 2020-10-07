import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Layout from "../../layouts/index";
import TeamCard from "../../components/TeamCard";

const Team = (props) => {
    const teams = props.data.members.edges;
    const aboutUs = props.data.aboutus.edges[0].node;
    // console.log(aboutUs);
    // console.log(aboutUs.frontmatter.title);
    // console.log(aboutUs.html);
    return (
        <Layout bodyClass="page-teams">
            <SEO title="Nosotros" />
            <div className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <h1>{aboutUs.frontmatter.title}</h1>
                            <div dangerouslySetInnerHTML={{ __html: aboutUs.html }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pb-6">
                <div className="row">
                    {teams.map(({ node }) => (
                        <div key={node.frontmatter.path} className="col-12 col-md-6 mb-1">
                            <TeamCard
                                title={node.frontmatter.title}
                                image={node.frontmatter.image}
                                jobtitle={node.frontmatter.jobtitle}
                                linkedinurl={node.frontmatter.linkedinurl}
                                email={node.frontmatter.email}
                                html={node.html}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query TeamQuery {
        members: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/team/" }, frontmatter: { member: { eq: true } } }
            sort: { fields: [frontmatter___position], order: ASC }
        ) {
            edges {
                node {
                    html
                    frontmatter {
                        title
                        path
                        image
                        jobtitle
                        linkedinurl
                        email
                    }
                }
            }
        }
        aboutus: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/team/" }, frontmatter: { member: { eq: false } } }
        ) {
            edges {
                node {
                    html
                    frontmatter {
                        title
                        path
                    }
                }
            }
        }
    }
`;

export default Team;

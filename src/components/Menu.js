import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

const Menu = (props) => {
    const { menuLinks } = props.data.site.siteMetadata;

    const isActive = ({ isCurrent }) => {
        return isCurrent ? { className: "active" } : {}
    }

    const ExactNavLink = props => (
        <Link getProps={isActive} {...props} />
    )

    return (
        <div id="main-menu" className="main-menu">
            <ul>
                {menuLinks.map((link) => (
                    <li key={link.name}>
                        {<ExactNavLink to={link.link}>{link.name}</ExactNavLink>}
                        {/* <Link to={link.link} activeStyle={{"brackground":"black"}}>{link.name}</Link> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default (props) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        menuLinks {
                            name
                            link
                        }
                    }
                }
            }
        `}
        render={(data) => <Menu data={data} />}
    />
);

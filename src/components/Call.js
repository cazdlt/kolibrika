import React from "react";
import { StaticQuery, graphql } from "gatsby";
import iconMail from "../images/email-24px.svg";
import iconPhone from "../images/phone-24px.svg";

const Call = (props) => (
    // <div className="call">
    //     <div className="call-box-top">
    //         <div className="call-phone">
    //             <span><strong>Teléfono: </strong></span>
    //             <span>
    //             <a href={`tel:${props.data.site.siteMetadata.contact.phone}`}>
    //                 {props.data.site.siteMetadata.contact.phone}
    //             </a>
    //             </span>
    //         </div>
    //         <div className="call-email">
    //             <strong>Correo electrónico: </strong>
    //             <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
    //                 {props.data.site.siteMetadata.contact.email}
    //             </a>
    //         </div>
    //     </div>
    //     {props.button && (
    //         <div className="call-box-bottom">
    //             <a href="/contact" className="button">
    //                 Contacto
    //             </a>
    //         </div>
    //     )}
    // </div>
    <div class="card">
        <div className="card-body">
            <p class="card-text my-2">
                {/* <span class="line tag"> Teléfono: </span> */}
                <img alt="PhoneIcon" src={iconPhone} /> 
                <span> 
                    <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/${props.data.site.siteMetadata.contact.phone.replace(/[^0-9]/g, '')}`}>
                         {props.data.site.siteMetadata.contact.phone}
                    </a>
                </span>
            </p>

            <p class="card-text my-2">
                <img alt="MailIcon" src={iconMail} />
                <span> 
                    <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
                         {props.data.site.siteMetadata.contact.email}
                    </a>
                </span>
            </p>
        </div>
    </div>
);

export default (props) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        contact {
                            email
                            phone
                        }
                    }
                }
            }
        `}
        render={(data) => <Call button={props.button} data={data} />}
    />
);

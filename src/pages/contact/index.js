import React from "react";
import SEO from "../../components/SEO";
import Layout from "../../layouts/index";
import Call from "../../components/Call";
import ContactForm from "../../components/ContactForm";

const Contact = (props) => (
    <Layout bodyClass="page-contact">
        <SEO title="Contact" />

        <div className="intro intro-small">
            <div className="container">
                <h1>Contacto</h1>
            </div>
        </div>

        <div className="container">
            <div className="row pb-6">
                <div className="col-md-8 col-sm-12 px-2 border-right border-tertiary">
                    <h4 className="my-2">Hablemos:</h4>
                    <ContactForm />
                </div>
                <div className="col-md-4 col-sm-12 align-self-center">
                    <Call button={false} />
                </div>
            </div>
        </div>
    </Layout>
);

export default Contact;

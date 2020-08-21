import React from "react";

const ContactForm = (props) => (
    <form id="form" name="contacto" method="POST" data-netlify="true">
        <div className="row form-group">
            <div className="col-md-4 col-sm-12">
                <label for="name">Nombre de contacto</label>
            </div>
            <div className="col-md-8 col-sm-12">
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="nombre"
                    placeholder="Nombre de contacto..."
                />
            </div>
        </div>

        <div className="row form-group">
            <div className="col-md-4 col-sm-12">
                <label for="mail">Correo electrónico</label>
            </div>
            <div className="col-md-8 col-sm-12">
                <input
                    type="text"
                    className="form-control"
                    id="mail"
                    name="correo"
                    placeholder="Su correo electrónico..."
                />
            </div>
        </div>
        <div className="row form-group">
            <div className="col-md-4 col-sm-12">
                <label for="form-subject">Mensaje</label>
            </div>
            <div className="col-md-8 col-sm-12">
                <textarea
                    id="form-subject"
                    className="form-control"
                    name="mensaje"
                    placeholder="Déjeme un mensaje..."
                    rows="4"
                />
            </div>
        </div>
        <div className="row form-group">
            <div className="col-12">
                <input className="btn btn-primary float-right" type="submit" value="Enviar" />
            </div>
        </div>
    </form>
);

export default ContactForm;

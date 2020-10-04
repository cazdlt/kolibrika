import React from "react";
import { Link } from "gatsby";

const ServiceCard = ({ path, title, excerpt }) => {
    return (
        <div key={path} className="col-12 col-md-4 mb-1">
            <div className="card service service-teaser">
                <div className="card-content">
                    <h2>
                        <Link to={path}>{title}</Link>
                    </h2>
                    <p>{excerpt}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

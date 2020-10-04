import React from "react";

function TeamCard({ title, image, jobtitle, linkedinurl, email, html }) {
    return (
        <div className="team card-two">
            <div className="card-header">
                <div className="card-header-left">
                    {image && (
                        <div className="card-image">
                            <img alt={title} className="img-fluid mb-2" src={image} />
                        </div>
                    )}
                </div>
                <div className="card-right">
                    <h2 className="card-title">{title}</h2>
                    <ul className="card-meta">
                        <li>
                            <strong>{jobtitle}</strong>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href={linkedinurl}>
                                {linkedinurl}
                            </a>
                        </li>
                        <li>
                            <a href={email}>{email}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="team-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}

export default TeamCard;

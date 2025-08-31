import { Link } from "react-router-dom";

export default function ModelCard({props}) {
    return (
        <div className="model-card">
            <div className="icon"></div>
            <h1>{props.model}</h1>
            <p className="model-card-description">{props.description}</p>
            <div>
                <Link to={props.link}>
                    <span className="action-btn"></span>
                    Try Now
                </Link>
            </div>
        </div>
    )
}
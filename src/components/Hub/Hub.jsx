import ModelCard from "./ModelCard"

export default function Hub() {
    const models = [
        {
            "id": 1,
            "model": "Maternal Risk",
            "description": "this model will analys",
            "link": "/hub/maternal-risk-analyzer"
        },
        {
            "id": 1,
            "model": "sentimental",
            "description": "this model will analys",
            "link": "/"
        },
        {
            "id": 1,
            "model": "sentimental",
            "description": "this model will analys",
            "link": "/"
        },
        {
            "id": 1,
            "model": "sentimental",
            "description": "this model will analys",
            "link": "/"
        },
        {
            "id": 1,
            "model": "sentimental",
            "description": "this model will analys",
            "link": "/"
        },
        {
            "id": 1,
            "model": "sentimental",
            "description": "this model will analys",
            "link": "/"
        }
    ]
    return (
        <>
            <div className="hub-heading"><h1>Welcome to hub</h1></div>
            <div className="model-cards">
                {models.map(model => (
                    <ModelCard props={model} />
                ))}
            </div>
        </>
    )
}
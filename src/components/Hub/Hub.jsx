import ModelCard from "./ModelCard"

export default function Hub() {
    const models = [
        {
            "id": 1,
            "modelName": "Maternal Risk",
            "description": "Maternal Risk Model is a tool to predict the likelihood of pregnancy-related health risks based on clinical and lifestyle factors.",
            "imgUrl": "assets/maternalrisk.jpg",
            "link": "/hub/maternal-risk-analyzer"
        },
        {
            "id": 2,
            "modelName": "Sentimental Analysis",
            "description": "This model will analyse sentiments in text.",
            "imgUrl": "assets/sentimental-analysis.jpg",
            "link": "/hub/sentimental-analysis"
        },
    ]
    return (
        <>
            <div className="hub-heading"><h1>Welcome to hub</h1></div>
            <div className="model-cards">
                {models.map(model => (
                    <ModelCard key={model.id} props={model} />
                ))}
            </div>
        </>
    )
}
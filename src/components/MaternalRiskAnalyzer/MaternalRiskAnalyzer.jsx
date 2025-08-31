import React, { useState } from 'react';
import './maternal.css';
const initialState = {
    "Age": 0,
    "Systolic BP": 0,
    "Diastolic": 0,
    "BS": 0,
    "Body Temp": 0,
    "Previous Complications": false,
    "Preexisting Diabetes": false,
    "Gestational Diabetes": false,
    "Mental Health": false,
    "Heart Rate": 0,
    "BMI_Normal": false,
    "BMI_Overweight": 0
}
export default function MaternalRiskAnalyzer() {
    const [form, setForm] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const keys = ["Previous Complications", "Preexisting Diabetes", "Gestational Diabetes", "Mental Health", "BMI_Normal"];
            keys.forEach((key) => {
                form[key] = form[key] === true ? 1 : 0;
            })
            const API_URL = import.meta.env.VITE_BACKEND_API_URL;
            const response = await fetch(`${API_URL}model/maternalrisk/predict/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data = await response.json();
            if (response.status === 200) {
                setResult(data.message);
            }
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className='maternal-risk'>
            <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
                <h2>Maternal Risk Analyzer</h2>
                <label>
                    Age:
                    <input type="number" name="Age" value={form.Age} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Systolic BP:
                    <input type="number" name="Systolic BP" value={form["Systolic BP"]} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Diastolic:
                    <input type="number" name="Diastolic" value={form["Diastolic"]} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    BS (Blood Sugar):
                    <input type="number" name="BS" value={form["BS"]} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Body Temp:
                    <input type="number" name="Body Temp" value={form["Body Temp"]} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Previous Complications:
                    <input type="checkbox" name="Previous Complications" checked={form["Previous Complications"]} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Preexisting Diabetes:
                    <input type="checkbox" name="Preexisting Diabetes" checked={form["Preexisting Diabetes"]} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Gestational Diabetes:
                    <input type="checkbox" name="Gestational Diabetes" checked={form["Gestational Diabetes"]} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Mental Health:
                    <input type="checkbox" name="Mental Health" checked={form["Mental Health"]} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Heart Rate:
                    <input type="number" name="Heart Rate" value={form["Heart Rate"]} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    BMI Normal:
                    <input type="checkbox" name="BMI_Normal" checked={form.BMI_Normal} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">{loading ? "Analyzing..." : "Analyze Risk"}</button>
            </form>


            <p>{result}</p>
        </div>
    );
}
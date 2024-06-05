import { useState, useRef } from "react";

import "./styles/App.css";
import ResumePreview from "./components/ResumePreview.jsx";
import HeaderEdit from "./components/HeaderEdit.jsx";
import PersonalSection from "./components/PersonalSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";

import { useReactToPrint } from "react-to-print";

function App() {
    const [data, setData] = useState({
        name: "Arman Zhumakhan",
        email: "arman@gmail.com",
        linkedin: "https://www.linkedin.com/in/arman",
        education: [
            {
                school: "KBTU",
                degree: "Bachelor",
                graduation: "2023",
            },
        ],
        experience: [
            {
                company: "Google",
                position: "Software Engineer",
                startDate: "2021",
                endDate: "2023",
            },
            {
                company: "Meta",
                position: "Software Engineer",
                startDate: "2023",
                endDate: "2023",
            },
        ],
    });

    const [submitted, setSubmitted] = useState(false);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        documentTitle: "CV",
        content: () => componentRef.current,
    });
    const handleData = (e) => {
        const { id, value } = e.target;
        setData({ ...data, [id]: value });
    };
    const addExperience = () => {
        console.log("add");
    };
    const removeExperience = () => {
        console.log("remove");
    };

    return (
        <div className="App">
            <div className="fields">
                <HeaderEdit
                    loadSampleCV={() => setData(data)}
                    handlePrint={handlePrint}
                />
                <PersonalSection data={data} handleData={handleData} />
                <EducationSection data={data} handleData={handleData} />
                <ExperienceSection
                    data={data}
                    handleData={handleData}
                    addExperience={addExperience}
                    removeExperience={removeExperience}
                />
                <div className="card">
                    {submitted ? (
                        <button onClick={() => setSubmitted(false)}>
                            Edit
                        </button>
                    ) : (
                        <button onClick={() => setSubmitted(true)}>
                            Submit
                        </button>
                    )}
                </div>
            </div>
            <div className="preview">
                <ResumePreview data={data} reference={componentRef} />
            </div>
        </div>
    );
}

export default App;

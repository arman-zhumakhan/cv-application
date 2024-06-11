import { useState, useRef } from "react";

import "./styles/App.css";
import ResumePreview from "./components/ResumePreview.jsx";
import HeaderEdit from "./components/HeaderEdit.jsx";
import PersonalSection from "./components/PersonalSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";

import { useReactToPrint } from "react-to-print";

const sampleData = {
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
}

function App() {
    const [data, setData] = useState(sampleData);

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
        console.log("add experience");
        setData({
            ...data,
            experience: [
                ...data.experience,
                {
                    company: "",
                    position: "",
                    startDate: "",
                    endDate: "",
                },
            ],
        })
    };
    const removeExperience = (index) => {
        console.log("remove experience");
        setData({
            ...data,
            experience: data.experience.filter((item, i) => i !== index),
        });
    };

    return (
        <div className="App">
            <div className="fields">
                <HeaderEdit
                    loadSampleCV={() => setData(sampleData)}
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
            </div>
            <div className="preview">
                <ResumePreview data={data} reference={componentRef} />
            </div>
        </div>
    );
}

export default App;

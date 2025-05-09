import { useState } from "react";
import {
  initialPersonalForm,
  initialExperienceForm,
  initialEducationForm,
} from "./initial-form.js";
import "../styles/App.css";
import { CVForm } from "./CVForm.jsx";
import { GeneratedCV } from "./GeneratedCV.jsx";

function App() {
  const [personalData, setPersonalData] = useState(initialPersonalForm);
  const [experienceData, setExperienceData] = useState(initialExperienceForm);
  const [educationData, setEducationData] = useState(initialEducationForm);
  const [selectedIds, setSelectedIds] = useState({
    experience: experienceData[0].id,
    education: educationData[0].id,
  });

  const dataMap = {
    personal: { personalData, setPersonalData },
    experience: { experienceData, setExperienceData },
    education: { educationData, setEducationData },
  };

  const handlePersonalData = () => {
    setPersonalData({});
  };

  const handleEditExperience = (e) => {
    const newExperienceData = experienceData.map((item) => {
      if (item.id === selectedIds.experience) {
        item[e.target.name] = e.target.value;
      }
      return item;
    });

    setExperienceData([...newExperienceData]);
  };

  const handleEditEducation = (e) => {
    const newEducationData = educationData.map((item) => {
      if (item.id === selectedIds.education) {
        item[e.target.name] = e.target.value;
      }
      return item;
    });

    setEducationData([...newEducationData]);
  };

  const handleEditSection = (data, e, setData, section) => {
    const newData = data.map((item) => {
      if (item.id === selectedIds[section]) {
        item[e.target.name] = e.target.value;
      }
      return item;
    });

    setData([...newData]);
  };

  return (
    <>
      <h1>CV Generator</h1>
      <CVForm
        personalData={personalData}
        experienceData={experienceData}
        educationData={educationData}
        selectedIds={selectedIds}
        dataMap={dataMap}
        onEdit={handleEditSection}
      />
      <GeneratedCV
        personalData={personalData}
        experienceData={experienceData}
        educationData={educationData}
      />
    </>
  );
}

export default App;

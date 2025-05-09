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
    personal: personalData[0].id,
    experience: experienceData[0].id,
    education: educationData[0].id,
  });

  const dataMap = {
    personal: { personalData, setPersonalData },
    experience: { experienceData, setExperienceData },
    education: { educationData, setEducationData },
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

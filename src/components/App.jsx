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

  function handlePersonalData() {
    setPersonalData({});
  }

  function handleExperienceData(input) {
    setExperienceData();
  }

  function handleEducationData() {
    setEducationData([]);
  }

  return (
    <>
      <h1>CV Generator</h1>
      <CVForm
        personalData={personalData}
        experienceData={experienceData}
        educationData={educationData}
        selectedIds={selectedIds}
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

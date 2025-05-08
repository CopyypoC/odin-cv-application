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

  function handlePersonalData() {
    setPersonalData({});
  }

  function handleExperienceData() {
    setExperienceData([]);
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

// App holds shared state from CVForm to pass into GeneratedCV

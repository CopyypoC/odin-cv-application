import { useState } from "react";
import {
  initialPersonalForm,
  initialExperienceData,
  initialEducationData,
} from "./initial-form.js";
import "../styles/App.css";
import { CVForm } from "./CVForm.jsx";
import { GeneratedCV } from "./GeneratedCV.jsx";

function App() {
  const [personalData, setPersonalData] = useState(initialPersonalForm);
  const [experienceData, setExperienceData] = useState(initialExperienceData);
  const [educationData, setEducationData] = useState(initialEducationData);
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

  const handleSelectId = (e, section, newItemId) => {
    const elementClasses = e.target.classList;

    if (
      elementClasses.contains("cancel-btn") ||
      elementClasses.contains("save-btn")
    ) {
      setSelectedIds({ ...selectedIds, [section]: null });
      return;
    }

    if (elementClasses.contains("list-add")) {
      setSelectedIds({ ...selectedIds, [section]: newItemId });
      return;
    }

    const id = e.target.closest("[data-uuid]").dataset.uuid;
    setSelectedIds({ ...selectedIds, [section]: id });
  };

  return (
    <>
      <h1>CV Generator</h1>
      <div className="cv-form-container">
        <CVForm
          experienceData={experienceData}
          educationData={educationData}
          selectedIds={selectedIds}
          onSelectId={handleSelectId}
          dataMap={dataMap}
          onEdit={handleEditSection}
        />
      </div>
      <GeneratedCV
        personalData={personalData}
        experienceData={experienceData}
        educationData={educationData}
      />
    </>
  );
}

export default App;

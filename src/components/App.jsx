import { useState } from "react";
import { initialPersonalForm } from "./initial-form.js";
import "../styles/App.css";
import { CVForm } from "./CVForm.jsx";
import { GeneratedCV } from "./GeneratedCV.jsx";

function App() {
  const [personalData, setPersonalData] = useState(initialPersonalForm);
  const [experienceData, setExperienceData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [selectedIds, setSelectedIds] = useState({
    personal: personalData[0].id,
    experience: null,
    education: null,
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

  const handleSelectId = (item, section) => {
    setSelectedIds({ ...selectedIds, [section]: item.id });
  };

  return (
    <>
      <h1>CV Generator</h1>
      <div className="cv-form-container">
        <CVForm
          experienceData={experienceData}
          educationData={educationData}
          selectedIds={selectedIds}
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

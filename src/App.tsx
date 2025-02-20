import { useState } from 'react';
import { skillList } from './data';
import './App.css';
import { Typography, Button } from '@mui/material';

const App = () => {
  const [index, setIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false); // State to toggle details
  const skill = skillList[index];

  const nextSkill = () => {
    setShowDetail(false); // Reset detail visibility when changing skill
    if (index < skillList.length - 1) setIndex(index + 1);
  };

  const prevSkill = () => {
    setShowDetail(false); // Reset detail visibility when changing skill
    if (index > 0) setIndex(index - 1);
  };

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div className="app-container">
      <Typography variant="h4" gutterBottom>
        10 Things That Require Zero Talent
      </Typography>
      <Typography variant="h6">by Cedric James G. Lumawig</Typography>

      <div className="skill-container">
        <img src={skill.url} alt={skill.alt} className="skill-image" />
        <Typography variant="h5" className="skill-title">{skill.thing}</Typography>

        {/* Show detail only when "Details" button is clicked */}
        {showDetail && <Typography className="skill-description">{skill.detail}</Typography>}
      </div>

      <div className="button-container">
        <Button className="back-button" onClick={prevSkill} disabled={index === 0}>
          Back
        </Button>
        <Button className="details-button" onClick={toggleDetail}>
          {showDetail ? "Hide Details" : "Show Details"}
        </Button>
        <Button className="next-button" onClick={nextSkill} disabled={index === skillList.length - 1}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default App;

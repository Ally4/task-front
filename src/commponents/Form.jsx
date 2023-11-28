import { useState } from "react";
// import clsx from 'clsx';
import "../App.css";
import Select from 'react-select'

const Form = () => {

  const getBorderColorClass = () => {
    if (description.length < 30) {
      return 'border-green';
    } else if (description.length <= 60) {
      return 'border-yellow';
    } else if (description.length <= 90) {
      return 'border-red';
    } else {
      return ''; // Default class, no additional border
    }
  };

  const handleFormsubmit = (e) => {
    e.preventDefault();
    const data = {
      startDate,
      endDate,
      name,
      description,
      project,
      file,
      level,
    };

    setData(data);
  };

  const colourOptions = [
    { value: 'Front-End', label: 'Front-End' },
    { value: 'Back-end', label: 'Back-end' },
    { value: 'Dev-Ops', label: 'Dev-Ops' },
    { value: 'Machine-Learning', label: 'Machine-Learning' }
  ]



  return (
    <div className="container-form">
      <form style={{display:'flex', flex:1, flexDirection:'column'}}>
      <div className="input-group">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
          style={{borderColor: 'green', padding: 8,borderRadius: 5, width:300, marginLeft:40, borderWidth:1}}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="date" style={{display:'flex', }}>
        <div className="input-group">
          <label htmlFor="startdate" className="form-label">
            start date
          </label>
          <input 
          style={{borderColor: 'green', borderWidth:1}}
            type="date"
            className="form-control"
            id="startdate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="enddate" className="form-label">
            end date
          </label>
          <input
          style={{borderColor: 'green', borderWidth:1}}
            type="date"
            className="form-control"
            id="enddate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        </div>
        <Select
    defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="colors"
    options={colourOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />
        <div className="input-group">
          <select
            className="form-select"
            aria-label="Default select example"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          >
            <option value="">Make a change</option>
            <option value="projectone">Feed the poor</option>
            <option value="projectTwo">Water Sanitation</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="textarea">description</label>
          <textarea
            className={`form-control form-text-area ${getBorderColorClass()}`}
            placeholder="Add more detail to the task"
            id="textarea"
            value={description}
            onChange={handleDescriptionChange}
            maxLength={90}
          ></textarea>
        </div>
        <div className="form-radios">
          <div className="input-group">
            <input
              id="normal"
              type="radio"
              className="form-check-radio"
              value="normal"
              checked={level == "normal"}
              onChange={handleLevelChange}
            />
            <label className="form-check-label" htmlFor="normal">
              Normal
            </label>
          </div>
          <div className="input-group">
            <input
              type="radio"
              className="form-check-radio"
              value="difficult"
              checked={level == "difficult"}
              onChange={handleLevelChange}
              id="difficult"
            />
            <label className="form-check-label" htmlFor="difficult">
              Difficult
            </label>
          </div>
          <div className="input-group">
            <input
              type="radio"
              className="form-check-radio"
              value="easy"
              checked={level == "easy"}
              onChange={handleLevelChange}
              id="easy"
            />
            <label className="form-check-label" htmlFor="easy">
              Easy
            </label>
          </div>
        </div>
        <div className="date" style={{display:'flex', }}>
        <div className="input-group">
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Pdf
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              value={file}
              onChange={(e) => setFile(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              value={file}
              onChange={(e) => setFile(e.target.value)}
            />
          </div>
          </div>
        </div>
        <div>
        <button onClick={handleFormsubmit} style={{backgroundColor: 'red', padding: 8,borderRadius: 5, width:100, marginLeft:40, color:'white'}}>
          Cancel
        </button>
        <button onClick={handleFormsubmit} style={{backgroundColor: 'green', padding: 8,borderRadius: 5, width:100, marginLeft:40, color:'white'}}>
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default Form;





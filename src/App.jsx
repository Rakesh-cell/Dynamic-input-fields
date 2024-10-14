import { useState, memo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App=()=> {
  const [inputfields,setInputFields]=useState([{value:''}]);

  // function to update the value of the input field
  const handleValueChange =(index,event)=>{
    const values=[...inputfields]
    values[index].value=event.target.value;
    setInputFields(values)
  }

  // function to add new input fields 
  const handleAddFields=()=>{
    setInputFields([...inputfields,{value:""}]);
  }

// function to remove input field by index
const handleRemoveFields=(index)=>{
  const newInputFields=[...inputfields];
  newInputFields.splice(index,1);
  setInputFields(newInputFields)
};

  return (
  <div className='container'>
    <h2>Dynamic Input Fields</h2>
   
    {inputfields && inputfields.map((inputfield,index)=>{
      return(
      <div className="input-container" key={index}>
        <input 
        type="text" 
        placeholder='Enter a value'
        value={inputfield.value}
        onChange={(e)=>handleValueChange(index,e)}
        />
        <button className="delete-btn" onClick={()=>handleRemoveFields(index)}>
          <span className="material-symbols-outlined delete-icon">delete</span>
        </button>
      </div>
      )}
      
    
    )}
    <button className="add-btn" onClick={handleAddFields}>
      <span className="material-symbols-outlined add-icon">add</span>
      Add field
    </button>

    
  </div>
  )
}

export default memo(App)

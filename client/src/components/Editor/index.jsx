import React, { useState } from 'react'
import Table from '../Table'
import Navbar from '../Navbar'
import { FaWindowClose, FaArrowUp, FaArrowDown } from 'react-icons/fa';



const Editor = () => {
  const [selectedFields, setSelectedFields] = useState(["Avatar", "Name", "Email", "Gender"]);
  const fields = ["Avatar", "Name", "Email", "Gender", "Country", "Role", "Company", "Departman",  "Phone", "Job"];

  const handleFieldSelection = (e) => {
    let options = e.target.options;
    let newSelectedFields = []
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        newSelectedFields.push(options[i].value);
      }
    }
    setSelectedFields([...selectedFields, ...newSelectedFields]);
  }

  const removeField = (field) => {
    setSelectedFields(selectedFields.filter(f => f !== field));
  }

  const moveFieldUp = (field) => {
    const index = selectedFields.indexOf(field);
    if (index === 0) return;
    const newSelectedFields = [...selectedFields];
    newSelectedFields.splice(index, 1);
    newSelectedFields.splice(index - 1, 0, field);
    setSelectedFields(newSelectedFields);
  }

  const moveFieldDown = (field) => {
    const index = selectedFields.indexOf(field);
    if (index === selectedFields.length - 1) return;
    const newSelectedFields = [...selectedFields];
    newSelectedFields.splice(index, 1);
    newSelectedFields.splice(index + 1, 0, field);
    setSelectedFields(newSelectedFields);
  }

  return (
    <div className="flex">
      <Navbar></Navbar>
      <div className="h-full w-auto ml-20 bg-gray-200 overflow-y-scroll p-4 ">
        <div className="ml-2 mt-4">
        <h1 className="text-xl font-medium mb-4">Field Selection</h1>
        <p className="text-gray-600 mb-4">Choose what fields you want displayed on the table</p>
        <div className="mb-4">
        <p className='text-base font-medium mb-2'>Select Field</p>
        <div className="relative">
        <select
        className='w-60 h-60 px-4 mt-2 ml-1 rounded-md appearance-none border focus:outline-none focus:shadow-outline' 
        multiple onChange={handleFieldSelection}>
        {fields && fields.map((field) => (
        <option className='p-1' key={field} value={field}>{field}</option>
        ))}
       </select>
       </div>
          </div>
        <div className="block">
        {selectedFields && selectedFields.map((field, index) => (
            <div key={field} className="w-full px-2 mb-4">
            <div className="bg-white rounded-md py-3 px-1 flex justify-between items-center">
              <span className="text-gray-700">{field}</span>
              <div className='ml-20 '>
                <button onClick={() => removeField(field)} className="mx-2 float-right text-red-500 hover:text-red-800">
                  <FaWindowClose />
                </button>
                <button onClick={() => moveFieldUp(field)} className="ml-2 text-blue-500 hover:text-blue-800" disabled={index === 0}>
                  <FaArrowUp />
                </button>
                <button onClick={() => moveFieldDown(field)} className="ml-2 text-blue-500 hover:text-blue-800" disabled={index === selectedFields.length - 1}>
                  <FaArrowDown />
                </button>
              </div>
            </div>
          </div>
        )) }
        </div>
      </div>
    </div>

    <Table selectedFields={selectedFields}></Table>

  </div>
)
}

export default Editor;











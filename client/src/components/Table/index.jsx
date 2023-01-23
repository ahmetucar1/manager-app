import React, { useContext } from 'react'
import DataContext from "../../DataContext";


const Table = ({selectedFields}) => {
  const { data } = useContext(DataContext);

  return (
    <div className="absolute table w-auto overflow-x-scroll overflow-y-scroll">
      <table className="table-auto h-full border w-full border-collapse">
        <thead className="bg-gray-300">
          <tr>
            {selectedFields && selectedFields.map((field) => (
              <th key={field} className="pl-3 py-2">{field}</th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data && data.map((item) => (
            <tr key={item.id}>
              {selectedFields && selectedFields.map((field) => (
                <td key={field} className="pl-3 py-2">
                {field === "Avatar" ? (
                <img src={item[field]} alt={item.first_name} className="w-16 h-16 rounded-7 object-fill" />
                ) : (
                item[field])}
                </td>))}
                </tr>))}
            </tbody>
        </table>
      </div>
    )
   }
                    
export default Table;
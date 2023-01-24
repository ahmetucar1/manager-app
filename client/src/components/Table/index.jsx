import React, { useContext } from 'react'
import DataContext from "../../DataContext";


const Table = ({selectedFields}) => {
  const { data } = useContext(DataContext);

  return (
    <div className="fixed ml-table bg-white rounded-lg overflow-x-auto">
    <table className="table-auto w-full text-gray-800">
      <thead className="bg-indigo-500">
        <tr>
          {selectedFields && selectedFields.map((field) => (
            <th key={field} className="px-6 py-3 text-white font-medium">{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data && data.map((item) => (
          <tr key={item.id} className="hover:bg-gray-100">
            {selectedFields && selectedFields.map((field) => (
              <td key={field} className="px-6 py-4">
                {field === "Avatar" ? (
                  <img src={item[field]} alt={item.first_name} className="w-12 h-12 rounded-full object-cover border-indigo-500" />
                ) : (
                  item[field]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
    )
   }
                    
export default Table;
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';


export default function App() {
  const [row, setrow] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/todos`
      console.log(apiUrl, 'api url')
      const response = await fetch(apiUrl);
      const data = await response.json();
      const transformeddata = data.map((e) => ({
        id: e.id,
        title: e.title,
        completed: e.completed
      }));
      setrow(transformeddata);
    }
    fetchdata();
  }, [])

  const columns = [
    { field: 'id', headerName: 'Id', width: 150 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'completed', headerName: 'completed', width: 150 },
  ];

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid rows={row} columns={columns} />
    </div>
  );
}

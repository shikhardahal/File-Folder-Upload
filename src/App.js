// App.js
import React from 'react';
import FileFolderList from './components/FileFolderList';
import ImageDisplay from './components/ImageDisplay';
const App = () => {
  const fileFolderData = [
    { id: 1, name: 'File 1' },
    { id: 2, name: 'Folder 1' },
    // Add more data as needed
  ];
  return (
    <div>
      <FileFolderList data={fileFolderData} />
    </div>
  );
};
export default App;

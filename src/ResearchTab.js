import React, { useState } from 'react';
import SwitchButton from './SwitchButton';

const ResearchTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  return (
    <div className='typo'>
      <h2>Research Tab</h2>
      <div>
        <div>
      <input className='roundness'
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      
        placeholder="Enter search term..."
      /> 
      <SwitchButton></SwitchButton>
     </div>
      </div>
      
     
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            <p>{result.title}</p>
            {/* Display other relevant data from search results */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchTab;

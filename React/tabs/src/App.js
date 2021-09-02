import React, {useState} from 'react';
import './App.css';

import Tab from './components/Tab';

function App() {
  const [tabs, setTabs] = useState([
    {
      label:"Final Fantasy",
      content:["XIV, ", "X, ", "XII, ", "These are the best the series has to offer. ", "Yeet"],
      isSelected: false
    },
    {
      label:"Anime",
      content:["Darling in the Franxx, " , "Re:Zero, ", "Attack on Titan."],
      isSelected: false
    },
    {
      label:"Snacks",
      content:["Takis, " , "Chocolate Chip Cookies, " , "Cheddar and Sour Cream Ruffles, " , "are the best snacks to eat."],
      isSelected: false
    }
  ]);

  return (
    <div >
      <div>
        {tabs.map((tab, i) => {
          return(
            <Tab
              selectedIdx={i}
              label={tab.label}
              tabs={tabs}
              setTabs={setTabs}
            />
          )
        })}
      </div>
      <div>
        {tabs.map((tab) => {
          return(
            tab.isSelected && <div>{ tab.content }</div>
        )})}
      </div>
    </div>
  );
}

export default App;
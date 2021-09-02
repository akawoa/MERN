import React, { useState } from 'react';

const Tab = (props) => {
    const {selectedIdx, label, tabs, setTabs} = props;

    const handleClick = () => {
        // Copy the array of tabs
        const copiedTabs = [...tabs];
        // First, for all objects, set the "isSelected" to false 
        copiedTabs.map(eachTab => eachTab.isSelected = false);

        // Grab the clicked object, and set the "isSelected" to true
        const copiedTab = {...tabs[selectedIdx]}
        copiedTab.isSelected = true;

        // Replace the array at selected index (object) with the new object
        copiedTabs[selectedIdx] = copiedTab;

        // Replace the original array with the new array
        setTabs(copiedTabs);
    }

    return(
        <div className="tab">
            <button onClick={handleClick}>{ label }</button>
        </div>
    );
}

export default Tab;
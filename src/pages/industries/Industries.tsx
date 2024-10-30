import React from 'react';
import SecondarySection from './components/SecondarySection';
import IndustriesCard from './components/IndustriesCard';
import IndustriesSection1 from './components/IndustriesSection1';

const Industries = () => {
    return (
        <div>
            <IndustriesSection1/>
            <SecondarySection/>
            <IndustriesCard/>
        </div>
    );
}

export default Industries;

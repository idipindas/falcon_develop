import React from 'react';
import PrimarySection from './components/PrimarySection';
import SecondarySection from './components/SecondarySection';
import IndustriesCard from './components/IndustriesCard';

const Industries:React.FC = () => {
    return (
        <div>
            <PrimarySection/>
            <SecondarySection/>
            <IndustriesCard/>
            
        </div>
    );
}

export default Industries;

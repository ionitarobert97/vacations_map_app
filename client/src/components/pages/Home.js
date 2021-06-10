import React from 'react';
import Vacations from '../vacations/Vacations';
import VacationForm from '../vacations/VacationForm';

const Home = () => {
    return (
        <div className="containerVacations">
            <div>
                <VacationForm />
            </div>
            <div>
                <Vacations/>
            </div>
        </div>
    )
}

export default Home;

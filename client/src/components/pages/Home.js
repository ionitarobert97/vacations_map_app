import React from 'react';
import Vacations from '../vacations/Vacations';
import VacationForm from '../vacations/VacationForm';
import VacationFilter from '../vacations/VacationFilter';

const Home = () => {
    return (
        <div className="containerVacations">
            <div>
                <VacationForm />
            </div>
            <div>
                <VacationFilter />
                <Vacations/>
            </div>
        </div>
    )
}

export default Home;

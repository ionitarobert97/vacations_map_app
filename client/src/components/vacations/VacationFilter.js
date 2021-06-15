import React, { useContext, useRef, useEffect } from 'react';
import VacationContext from '../../context/vacation/VacationContext';

const VacationFilter = () => {
    const vacationContext = useContext(VacationContext);
    const text = useRef('');

    const { filterVacation, clearFilter, filtered } = vacationContext; 

    useEffect(() => {
        if(filtered === null) {
            text.current.value = '';
        }
    })

    const onChange = e => {
        if(text.current.value !== '') {
            filterVacation(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form>
            <input ref={text} type="text" placeholder="Filter by Country..." onChange={onChange} />
        </form>
    )
}

export default VacationFilter;

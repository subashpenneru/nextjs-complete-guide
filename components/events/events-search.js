import { useRef } from 'react';
import Button from '../ui/button';

import classes from './events-search.module.css';

function EventsSearch(props) {
  const yearRef = useRef();
  const monthRef = useRef();

  function onSubmitHandler(e) {
    e.preventDefault();

    const obj = {
      year: yearRef.current.value,
      month: monthRef.current.value,
    };

    props.onSearch(obj);
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>year</label>
          <select name='year' id='year' ref={yearRef}>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>Month</label>
          <select name='month' id='month' ref={monthRef}>
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>Septembet</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;

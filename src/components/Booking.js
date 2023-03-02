import React from 'react';
import { useState } from 'react';

export default function Booking({ availableTimes, dispatch }) {
  const [availbleDate, setAvailbleDate] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(availableTimes);
  };

  const handleDateChange = () => {
    dispatch({ type: 'update' });
  };

  return (
    <>
      <form className="B_main" onSubmit={handleSubmit}>
        <label htmlFor="date">Choose date</label>
        <input type="date" id="date" onChange={handleDateChange} />
        <label htmlFor="time">Choose time</label>
        <select id="time ">
          {Object.keys(availableTimes).map((time) => (
            <option key={time.time} value={time.time}>
              {time.time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => {
            setGuests(e.target.value);
          }}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => {
            setOccasion(e.target.value);
          }}
        >
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="others">Others</option>
        </select>
        <field>
          <lable>Comment:</lable>
          <textarea
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          ></textarea>
        </field>
        <button type="submit">Make Your reservation</button>
      </form>
    </>
  );
}

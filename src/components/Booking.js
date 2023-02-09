import React from 'react';
import { useState } from 'react';

export default function Booking(props) {
  const [avaiDate, setAvaiDate] = useState('');
  //const [avaiTime, setAvaiTime] = useState([
  //  '17:00',
  //  '18:00',
  //  '19:00',
  //  '20:00',
  //  '21:00',
  //  '22:00',
  //]);
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(avaiTime);
  };

  return (
    <>
      <form className="B_main" onSubmit={handleSubmit}>
        <label htmlFor="book-date">Choose date</label>
        <input
          type="date"
          id="book-date"
          value={avaiDate}
          onChange={(e) => {
            setAvaiDate(e.target.value);
          }}
        />
        <label htmlFor="book-time">Choose time</label>
        <select
          id="book-time "
          value={avaiTime}
          onChange={(e) => {
            setAvaiTime(e.target.value);
          }}
        >
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
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

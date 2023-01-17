import React from 'react';

export default function Main() {
  return (
    <main className="main">
      <section className="M_section1">
        <article className="M_section1_a">
          <h2>Little Lemon</h2>
          <h1>Chicago</h1>
          <br />
          <p className="section1_p">
            We are a family owned a Mideterranean restaurant, focudes on
            traditional recipes served with a modern twist.
          </p>
          <button>Resserve a Table</button>
        </article>
        <img src="./reserve.png" alt="reserve" className="m_section1_image" />
      </section>
      <section className="M_section2">
        <article className="M_section2_a">This Week Specials!</article>
        <button className="M_section2_b">Order Online</button>
      </section>
    </main>
  );
}

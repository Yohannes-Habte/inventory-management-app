import React, { useState } from "react";
import { differenceInYears } from "date-fns";
import { differenceInDays } from "date-fns";
import { differenceInMonths } from "date-fns";

const Units = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const today = new Date();
      const ageYears = differenceInYears(today, birthDate);
      const ageMonths = differenceInMonths(today, birthDate);
      const ageDays = differenceInDays(today, birthDate);

      setAge({
        years: ageYears,
        months: ageMonths,
        days: ageDays,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <h2> User Age</h2>

      <form onSubmit={handleSubmit} action="">
        <input
          type="date"
          name="birthDate"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button disabled={!birthDate}>Calculate Age</button>
      </form>
      {/* <h2> You are {age.years} years, {age.months} months, and {age.days} days old! </h2> */}
      <h2>
        You are {age?.years} years, {age?.months} month, and {age?.days} days old!
      </h2>
    </section>
  );
};

export default Units;

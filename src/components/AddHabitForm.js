import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: write code to handle form submission
    if (!habitName.trim()) {
      alert("Please enter a habit name."); // Handle empty input
      return;
    }

    onAddHabit(habitName.trim()); // Pass the new habit name to the parent component
    setHabitName(""); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: add a form to add a new habit */}
      <input
        type="text"
        placeholder="New Habit"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)} // Update habitName state
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

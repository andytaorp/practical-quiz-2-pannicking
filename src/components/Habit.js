import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({ habit, onToggleHabit, onDeleteHabit }) {
  return (
    <li>
      {/* TODO: Add a checkbox to mark the habit as completed */}
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => onToggleHabit(habit.id)}
      />
      
      {/* TODO: Display the habit name with strikethrough if completed */}
      <span style={{ textDecoration: habit.completed ? "line-through" : "none" }}>
        {habit.name}
      </span>

      {/* TODO: Add a delete button to remove the habit */}
      <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
    </li>
  );
}

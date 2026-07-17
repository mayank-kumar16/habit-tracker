import React, { useState } from 'react';
import habitsdata from '../data/habitsdata';
import HabitItem from './HabitItem';
import ProgressBar from './ProgressBar';

const HabitTracker = () => {
  const [habits, setHabits] = useState(habitsdata);

  const toggleHabit = (currentId) => {
    setHabits((prevHabits) => {
      return prevHabits.map((habit) => {
        if (habit.id === currentId) {
          return { ...habit, completed: !habit.completed };
        }

        return habit;
      });
    });
  };

  const completedHabitsCount = habits.filter((habit) => {
    return habit.completed;
  }).length;

  const progressPercentage = (
    (completedHabitsCount / habits.length) *
    100
  ).toFixed(0);

  return (
    <div className="h-screen bg-slate-400">
      <h1 className="pt-5 mb-8 text-white text-[50px] font-bold">
        Habit Tracker
      </h1>

      <div className="w-6/12 bg-white mx-auto shadow-sm mb-5">
        <div className="flex items-center justify-between p-3 border-b-2 border-slate-400">
          <p className="font-bold text-black">Completed Habits</p>
          <div className="w-6/12 mx-auto">
            <ProgressBar progress={progressPercentage} />
          </div>
          <p className="flex justify-end">
            <span className="text-black font-bold">{completedHabitsCount}</span>
            /<span className="text-black">{habits.length}</span>
          </p>
        </div>
      </div>

      <div className="w-6/12 mx-auto bg-white p-5">
        {habits.map((habit) => {
          return (
            <HabitItem key={habit.id} habit={habit} onToggle={toggleHabit} />
          );
        })}
      </div>
    </div>
  );
};

export default HabitTracker;

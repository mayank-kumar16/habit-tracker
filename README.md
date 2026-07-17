# Habit Tracker

A simple Habit Tracker application built with **React.js** and **Tailwind CSS**.

This project allows users to mark daily habits as completed, track their overall progress, and visualize completion using a progress bar.

---

## 🚀 Features

- Display a list of daily habits
- Mark habits as Complete
- Undo completed habits
- Progress bar updates automatically
- Completed habits counter
- Dynamic UI updates using React State
- Clean and reusable component structure

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Git
- GitHub

## 📂 Folder Structure

```
src/
│
├── components/
│   ├── HabitTracker.js
│   ├── HabitItem.js
│   └── ProgressBar.js
│
├── data/
│   └── habitsdata.js
│
├── constants/
│   └── buttonText.js
│
├── App.js
└── index.js
```

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/habit-tracker.git
```

Go inside the project

```bash
cd habit-tracker
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm start
```

The application will run on:

```
http://localhost:3000
```

## steps for this project

- created different components inside src/components
- inside HabitTracker using lists of tasks **(habitdata.js)** inside useState habits.
  - map on habits and calling HabitItem here with props **habit** and onToggle = toggleHabit
- using all the details and calling **onToggle(ID)**
- inside toggleHabit I am using map to create new lists with completed task as true and using setHabit to set new list
- using filter to get completed tasks and showing 1/4
- calculated percentage of completed tasks and sending it to Progressbar and using it style dynamically

## 👨‍💻 Author

**Mayank Kumar**

GitHub: https://github.com/mayank-kumar16

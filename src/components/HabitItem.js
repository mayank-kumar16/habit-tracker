import { BTN_TXT } from '../constants/buttonText';

const HabitItem = ({ habit, onToggle }) => {
  const { id, name: habitName, completed: habitStatus } = habit;
  return (
    <div className="flex items-center justify-between mx-auto mb-3 border-b-2 border-slate-400 p-3">
      <p className={habitStatus ? 'text-green-500 line-through' : 'text-black'}>
        {habitStatus ? `✅ ${habitName} ` : habitName}
      </p>
      <button
        className={
          habitStatus
            ? 'bg-green-500 p-2 text-white'
            : 'bg-black text-white p-2'
        }
        onClick={() => {
          onToggle(id);
        }}
      >
        {habitStatus ? BTN_TXT.undo : BTN_TXT.complete}
      </button>
    </div>
  );
};

export default HabitItem;

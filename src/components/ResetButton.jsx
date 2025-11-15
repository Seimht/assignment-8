/*
  Name: Seim Habte
  Date: 2025-11-14
  CSC 372-01

  ResetButton: clears the state and scoreboard.
*/
export default function ResetButton({ onReset }) {
    return (
      <button type="button" className="reset-btn" onClick={onReset}>
        Reset
      </button>
    );
  }
  
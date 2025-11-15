/*
  Name: Seim Habte
  Date: 2025-11-14
  CSC 372-01

  PlayerThrow: shows three clickable images for the player's selection.
*/
export default function PlayerThrow({ assets, selected, disabled, onSelect }) {
    const choices = ["rock", "paper", "scissors"];
  
    return (
      <div className="throw-grid" role="group" aria-label="Choose your throw">
        {choices.map((name) => {
          const isSelected = selected === name;
          return (
            <button
              key={name}
              type="button"
              className={`throw ${isSelected ? "selected" : ""}`}
              aria-pressed={isSelected}
              onClick={() => onSelect(name)}
              disabled={disabled}
            >
              <img src={assets[name].src} alt={name} />
              <span className="caption">{name}</span>
            </button>
          );
        })}
      </div>
    );
  }
  
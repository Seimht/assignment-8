/*
  Name:Seim Habte
  Date: 2025-11-14
  CSC 372-01

  ScoreBoard: tracks wins, losses, ties.
*/
export default function ScoreBoard({ wins, losses, ties }) {
    return (
      <div className="scoreboard">
        <p>
          Wins: <span>{wins}</span>
        </p>
        <p>
          Losses: <span>{losses}</span>
        </p>
        <p>
          Ties: <span>{ties}</span>
        </p>
      </div>
    );
  }
  
/*
  Name: Seim Habte
  Date: 2025-11-14
  CSC 372-01

  ResultDisplay: shows "You win", "Computer wins", or "It's a tie."
*/
export default function ResultDisplay({ outcome }) {
    let text = "Pick a throw to start.";
    if (outcome === "win") text = "You win!";
    else if (outcome === "lose") text = "Computer wins.";
    else if (outcome === "tie") text = "It's a tie.";
  
    return <p className="outcome-text">{text}</p>;
  }
  
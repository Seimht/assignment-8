/*
  Name: Seim Habte
  Date: 2025-11-14
  CSC 372-01

  Assignment 8: Rock, Paper, Scissors X React.
  Root component: manages state, timing, outcome, and scoreboard.
*/
import { useEffect, useRef, useState } from "react";
import "./App.css";
import PlayerThrow from "./components/PlayerThrow.jsx";
import ComputerThrow from "./components/ComputerThrow.jsx";
import ResultDisplay from "./components/ResultDisplay.jsx";
import ScoreBoard from "./components/ScoreBoard.jsx";
import ResetButton from "./components/ResetButton.jsx";

const THROWS = ["rock", "paper", "scissors"];
const ASSETS = {
  rock: { src: "/images/rock.png", label: "rock" },
  paper: { src: "/images/paper.png", label: "paper" },
  scissors: { src: "/images/scissors.png", label: "scissors" },
  question: { src: "/images/question-mark.png", label: "?" },
};

function decideWinner(player, computer) {
  if (player === computer) return "tie";
  const beats = { rock: "scissors", paper: "rock", scissors: "paper" };
  return beats[player] === computer ? "win" : "lose";
}

export default function App() {
  const [playerThrow, setPlayerThrow] = useState(null);
  const [computerThrow, setComputerThrow] = useState(null);
  const [isThinking, setIsThinking] = useState(false);
  const [outcome, setOutcome] = useState("");
  const [cycleIndex, setCycleIndex] = useState(0);

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [ties, setTies] = useState(0);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  function handleSelect(throwName) {
    if (isThinking) return;

    setPlayerThrow(throwName);
    setOutcome("");
    setComputerThrow(null);
    setIsThinking(true);

    // shuffle every 500ms
    intervalRef.current = setInterval(() => {
      setCycleIndex((i) => (i + 1) % THROWS.length);
    }, 500);

    // stop after 3s
    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      const finalThrow = THROWS[Math.floor(Math.random() * THROWS.length)];
      setComputerThrow(finalThrow);
      const result = decideWinner(throwName, finalThrow);
      setOutcome(result);
      if (result === "win") setWins((w) => w + 1);
      else if (result === "lose") setLosses((l) => l + 1);
      else setTies((t) => t + 1);
      setIsThinking(false);
    }, 3000);
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleReset() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    intervalRef.current = null;
    timeoutRef.current = null;

    setPlayerThrow(null);
    setComputerThrow(null);
    setOutcome("");
    setIsThinking(false);
    setCycleIndex(0);
    setWins(0);
    setLosses(0);
    setTies(0);
  }

  const computerDisplay =
    isThinking
      ? ASSETS[THROWS[cycleIndex]]
      : computerThrow
      ? ASSETS[computerThrow]
      : ASSETS.question;

  return (
    <div className="app">
      <header className="site-header">
        <h1>Rock • Paper • Scissors</h1>
        <p className="tagline">
          Pick a throw, watch the computer think, see who wins.
        </p>
      </header>

      <main>
        <section aria-labelledby="player-heading" className="section">
          <h2 id="player-heading">Your throw</h2>
          <PlayerThrow
            assets={ASSETS}
            selected={playerThrow}
            disabled={isThinking}
            onSelect={handleSelect}
          />
        </section>

        <section aria-labelledby="computer-heading" className="section">
          <h2 id="computer-heading">Computer throw</h2>
          <ComputerThrow
            imageSrc={computerDisplay.src}
            label={computerDisplay.label}
            isThinking={isThinking}
          />
        </section>

        <section aria-labelledby="outcome-heading" className="section">
          <h2 id="outcome-heading">Outcome</h2>
          <ResultDisplay outcome={outcome} />
        </section>

        <section aria-labelledby="score-heading" className="section">
          <h2 id="score-heading">Score </h2>
          <ScoreBoard wins={wins} losses={losses} ties={ties} />
          <ResetButton onReset={handleReset} />
        </section>
      </main>

    </div>
  );
}

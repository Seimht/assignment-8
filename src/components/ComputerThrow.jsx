/*
  Name:Seim Habte
  Date: 2025-11-14
  CSC 372-01

  ComputerThrow: shows question mark at start, shuffles while thinking,
  then shows final computer throw.
*/
export default function ComputerThrow({ imageSrc, label, isThinking }) {
    return (
      <figure className={`computer-figure ${isThinking ? "thinking" : ""}`}>
        <img
          src={imageSrc}
          alt={isThinking ? `Shuffling... ${label}` : label}
        />
        <figcaption className="caption">{label}</figcaption>
      </figure>
    );
  }
  
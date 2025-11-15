Assignment 8 – Rock, Paper, Scissors (React + Vite)
Name: Seim Habte
Course: CSC 372-01
Date: Fall 2025
This is my single-page React application for Assignment 8. The app lets the user play Rock, Paper, Scissors against the computer. When the player chooses a throw, the computer “thinks” for 3 seconds by cycling through all three throws every 500ms, then selects one randomly. The app shows the outcome and updates a live scoreboard.
All components follow the CSC 372 Code Quality Guide, including file headers, naming conventions, no inline styles, and clean React state management.
 Features
Three selectable throws: rock, paper, scissors
Computer “thinking” animation with timed shuffle
Outcome display (win, lose, tie)
Session scoreboard (wins, losses, ties)
Reset button clears everything
Fully responsive layout
Component-based design using React
 Project Structure
rps-react/
  public/
    images/rock.png
    images/paper.png
    images/scissors.png
    images/question-mark.png
  src/
    components/
      PlayerThrow.jsx
      ComputerThrow.jsx
      ResultDisplay.jsx
      ScoreBoard.jsx
      ResetButton.jsx
    App.jsx
    App.css
    main.jsx
  index.html
 How to Run the App Locally
Clone the repository:
git clone https://github.com/Seimht/assignment-8.git
cd assignment-8
Install dependencies:
npm install
Start the development server:
npm run dev
Open the URL shown in the terminal (usually):
http://localhost:5173
You will see the full game running in your browser.
 Demo Video
Here is the required demo video showing the app running and all features working:
 Demo (UNCG OneDrive):
https://uncg-my.sharepoint.com/:v:/r/personal/sthabte_uncg_edu/Documents/Rock%20Paper%20Scissors%20Game%20in%20React%20%F0%9F%8E%AE.mp4?csf=1&web=1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=Rd2MH0

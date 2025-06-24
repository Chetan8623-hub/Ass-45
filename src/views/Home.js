import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Home() {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);
  const [winner, setWinner] = useState('');
  const maxPoints = 10;

  const handleAdd = (team, setTeam) => {
    if (winner) return;
    const newScore = team + 1;
    if (newScore >= maxPoints) {
      toast.success(`${team === teamA ? 'Team A' : 'Team B'} won the game! 🏆`, {
        position: 'top-center'
      });
      setWinner(team === teamA ? 'Team A' : 'Team B');
    }
    setTeam(newScore);
  };

  const handleSubtract = (team, setTeam) => {
    if (team > 0) setTeam(team - 1);
  };

  const resetAll = () => {
    setTeamA(0);
    setTeamB(0);
    setWinner('');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-yellow-100 via-red-100 to-orange-200 p-8">
      <Toaster />
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">🏅 New Scoreboard</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Team A Card */}
        <div className="bg-white rounded-xl border-4 border-yellow-300 shadow-md p-6 w-64 flex flex-col items-center">
          <h2 className="text-xl font-bold text-yellow-700 mb-2">Team A</h2>
          <span className="text-6xl font-extrabold text-gray-700">{teamA}</span>
          <div className="flex gap-4 mt-6">
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
              onClick={() => handleAdd(teamA, setTeamA)}
            >
              + Add
            </button>
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
              onClick={() => handleSubtract(teamA, setTeamA)}
            >
              - Sub
            </button>
          </div>
        </div>

        {/* Team B Card */}
        <div className="bg-white rounded-xl border-4 border-pink-300 shadow-md p-6 w-64 flex flex-col items-center">
          <h2 className="text-xl font-bold text-pink-700 mb-2">Team B</h2>
          <span className="text-6xl font-extrabold text-gray-700">{teamB}</span>
          <div className="flex gap-4 mt-6">
            <button
              className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
              onClick={() => handleAdd(teamB, setTeamB)}
            >
              + Add
            </button>
            <button
              className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
              onClick={() => handleSubtract(teamB, setTeamB)}
            >
              - Sub
            </button>
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={resetAll}
        className="mt-10 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 transition shadow-lg"
      >
        Reset Scores
      </button>
    </main>
  );
}

export default Home;

"use client";
import { useState } from "react";
import Tile from "./components/Tile";

const people = [
  "Jana",
  "Lena",
  "Vilma",
  "Michael",
  "Robert",
  "Martina",
  "Hans",
  "Hanna",
  "Jens",
  "Ludo",
  "Tilman",
  "Fabien",
  "Ina",
  "Lorena",
  "Brigitte",
  "Frank",
  "Georg",
  "Karl",
  "Erika",
  "Karsten",
  "Conrad",
];

export default function Home() {
  const [chosen, setChosen] = useState("");

  const handleNewPeson = () => {
    const randName = people[Math.floor(Math.random() * people.length)];
    setChosen(randName);
  };

  return (
    <main className="flex flex-col items-center bg-sky-200 h-screen gap-2">
      <div className="grid grid-cols-7 max-w-[434px] shadow-xl p-2 bg-white w-full">
        {people.map((person) => (
          <Tile key={person} name={person} />
        ))}
      </div>
      <div className="shadow-xl p-2 bg-white flex flex-col items-center">
        <p className="">Twoja postać</p>
        <Tile name={chosen} />
      </div>
      <button
        onClick={handleNewPeson}
        className="p-2 bg-blue-600 text-white rounded-lg shadow-xl"
      >
        Wylosuj postać
      </button>
    </main>
  );
}

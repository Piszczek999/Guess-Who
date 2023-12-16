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
  return (
    <main className="flex flex-col items-center bg-sky-200 h-screen">
      <div className="grid grid-cols-7 w-[434px] shadow-xl p-2 bg-white">
        {people.map((person) => (
          <Tile key={person} name={person} />
        ))}
      </div>
      <div className="shadow-xl p-2 bg-white">
        <Tile name={people[Math.floor(Math.random() * people.length)]} />
      </div>
    </main>
  );
}

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
    <main className="grid grid-cols-7">
      {people.map((person) => (
        <Tile name={person} />
      ))}
    </main>
  );
}

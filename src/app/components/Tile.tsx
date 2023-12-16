import Image from "next/image";

export default function tile({ name }: { name: string }) {
  return (
    <div>
      <Image src={`/${name}.png`} alt={name} width={62} height={104} />
    </div>
  );
}

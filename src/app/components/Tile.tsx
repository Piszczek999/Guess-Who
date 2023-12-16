"use client";
import Image from "next/image";
import { useState } from "react";

export default function Tile({ name }: { name: string }) {
  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    setDisabled((prev) => !prev);
  };
  return (
    <div onClick={onClick}>
      <Image
        src={`/${name}.png`}
        alt={name}
        width={62}
        height={104}
        className={disabled ? "opacity-20" : ""}
      />
    </div>
  );
}

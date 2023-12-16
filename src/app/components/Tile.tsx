"use client";
import Image from "next/image";
import { useState } from "react";

export default function Tile({
  name,
  chosen,
}: {
  name: string;
  chosen?: boolean;
}) {
  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    setDisabled((prev) => !prev);
  };
  return (
    <div
      //   onClick={onClick}
      onMouseDown={onClick}
      className={chosen ? "" : disabled ? "opacity-20" : "hover:opacity-60"}
    >
      {name ? (
        <>
          <Image
            src={`/${name}.png`}
            alt={name}
            width={70}
            height={90}
            draggable="false"
          />
          <p className="text-center mb-2">{name}</p>
        </>
      ) : (
        <div className="w-[62px] h-[104px]"></div>
      )}
    </div>
  );
}

import Image from "next/image";

interface DividerProps {
  type?: "top" | "bottom" | "both";
  className?: string;
}

export default function Divider({ type = "both", className = "" }: DividerProps) {
  return (
    <div className={`flex flex-col items-center justify-center my-2 ${className}`}>
      {(type === "top" || type === "both") && (
        <div className="relative w-10 sm:w-11 h-3 my-1 opacity-90">
          <Image
            src="/images/icon_divider3.png"
            alt="Decorative top divider"
            fill
            sizes="44px"
            className="object-contain"
          />
        </div>
      )}
      {(type === "bottom" || type === "both") && (
        <div className="relative w-4 sm:w-5 h-[1px] my-1 opacity-70">
          <Image
            src="/images/divider_bottom3.jpg"
            alt="Decorative bottom divider"
            fill
            sizes="20px"
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}

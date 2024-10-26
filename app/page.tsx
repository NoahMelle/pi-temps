import Image from "next/image";
import TempCircle from "@/components/TempCircle";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <TempCircle />
    </div>
  );
}

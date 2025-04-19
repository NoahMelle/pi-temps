import TempCircle from "@/components/TempCircle";
import fs from "fs/promises";

export const dynamic = "force-dynamic";

export default async function Home() {
  const runningOnPi = process.env.PI_ENV === "pi";
  let temp = 50;

  if (runningOnPi) {
    try {
      const tempData = await fs.readFile(
        "/sys/class/thermal/thermal_zone0/temp",
        "utf-8"
      );
      temp = Number(tempData) / 1000 || 0;
    } catch {
      throw new Error("Internal Server Error");
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <TempCircle targetTemp={temp} />
    </div>
  );
}

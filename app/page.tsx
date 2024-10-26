import TempCircle from "@/components/TempCircle";
import fs from "fs/promises";

export default async function Home() {
  const runningOnPi = process.env.PI_ENV === "pi"

  const temp = runningOnPi ? ((Number((await fs.readFile("/sys/class/thermal/thermal_zone0/temp", "utf-8"))) / 1000) || 0) : 50

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <TempCircle targetTemp={temp}/>
    </div>
  );
}

import { Profile } from "@/components/layouts/main";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center h-screen justify-center  w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Profile />
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";

// WebGL can't render on the server, so load it client-side only.
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] xl:w-[500px] xl:h-[500px] flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-2 border-accent/40 border-t-accent animate-spin" />
    </div>
  ),
});

export default function HeroSceneClient() {
  return <HeroScene />;
}
import { Environment, OrbitControls } from "@react-three/drei";
import { Character } from "./Character";
import { Hexagon } from "./Hexagon";
import { GameArena } from "./GameArena";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />
      <Character />
      <GameArena />
    </>
  );
};

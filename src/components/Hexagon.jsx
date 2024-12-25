/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/hexagon.glb -o src/components/Hexagon.jsx -r public
*/

import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { Color } from "three";
import { randFloat } from "three/src/math/MathUtils.js";

export function Hexagon({ color, ...props }) {
  const { nodes, materials } = useGLTF("/models/hexagon.glb", "draco/gltf/");

  const randomizedColor = useMemo(() => {
    const alteredColor = new Color(color);
    alteredColor.multiplyScalar(randFloat(0.5, 1.2));
    return alteredColor;
  }, [color]);

  return (
    <group {...props}>
      <mesh geometry={nodes.Hexagon.geometry} material={materials.hexagon}>
        <meshStandardMaterial
          {...materials.hexagon}
          color={randomizedColor}
          transparent
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/hexagon.glb", "draco/gltf/");
function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -20, -950]}>
      <planeGeometry args={[3500, 3000]} />
      <meshBasicMaterial color={"#9AE065"} doubleSided />
    </mesh>
  );
}

export default Floor;

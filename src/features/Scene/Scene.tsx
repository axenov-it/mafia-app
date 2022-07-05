/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useScene } from "./hooks";

export const Scene = () => {
  const SceneComponent = useScene();

  return (
    <div>
      <SceneComponent />
    </div>
  );
};

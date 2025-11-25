import Lottie from "lottie-react";

import loadingAnimation from "@shared/assets/drone_loading_animation.json";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Lottie
        loop
        animationData={loadingAnimation}
        autoPlay
        style={{
          width: "20.5rem",
          height: "20.5rem",
        }}
      />
    </div>
  );
};

export default Loading;

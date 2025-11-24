const screen = {
  mobile: (css: React.CSSProperties) => {
    return {
      "@media": {
        "(max-width: 480px)": css,
      },
    };
  },
} as const;

export default screen;

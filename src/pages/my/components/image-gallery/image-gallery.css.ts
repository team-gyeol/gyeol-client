import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  padding: "2rem",
});

export const galleryContainer = style({
  position: "relative",
  maxWidth: "1200px",
  width: "100%",
  maxHeight: "90vh",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const closeButton = style({
  position: "absolute",
  top: "-3rem",
  right: 0,
  background: "none",
  border: "none",
  color: "#FFFFFF",
  fontSize: "3rem",
  cursor: "pointer",
  padding: "0.5rem",
  lineHeight: 1,
  zIndex: 1001,
  ":hover": {
    opacity: 0.7,
  },
});

export const imageContainer = style({
  position: "relative",
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  overflow: "hidden",
});

export const mainImage = style({
  maxWidth: "50%",
  maxHeight: "60vh",
  objectFit: "contain",
  borderRadius: "8px",
});

export const segmentedImage = style({
  maxWidth: "50%",
  maxHeight: "60vh",
  objectFit: "contain",
  borderRadius: "8px",
});

export const navButton = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(255, 255, 255, 0.2)",
  border: "none",
  color: "#FFFFFF",
  fontSize: "3rem",
  width: "3rem",
  height: "3rem",
  borderRadius: "50%",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1002,
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
});

export const infoContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  color: "#FFFFFF",
  textAlign: "center",
});

export const analysisText = style({
  fontSize: "1.2rem",
  fontWeight: "500",
});

export const dateText = style({
  fontSize: "1rem",
  opacity: 0.7,
});

export const imageCounter = style({
  fontSize: "0.9rem",
  opacity: 0.7,
});

export const thumbnailContainer = style({
  display: "flex",
  gap: "0.5rem",
  justifyContent: "center",
  overflowX: "auto",
  padding: "0.5rem",
});

export const thumbnail = recipe({
  base: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "4px",
    cursor: "pointer",
    border: "2px solid transparent",
    opacity: 0.6,
    transition: "all 0.2s",
    ":hover": {
      opacity: 1,
    },
  },
  variants: {
    isActive: {
      true: {
        borderColor: "#FFFFFF",
        opacity: 1,
      },
    },
  },
});


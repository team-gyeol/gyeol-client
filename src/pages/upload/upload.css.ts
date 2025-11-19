import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem",
});

export const title = style({
  fontSize: "3rem",
  fontWeight: "700",
  marginBottom: "2rem",
  textAlign: "center",
});

export const uploadSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  padding: "2rem",
  border: "1px solid #2A2A2A",
  borderRadius: "8px",
  backgroundColor: "#FFFFFF",
});

export const fileLabel = style({
  display: "inline-block",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#2A2A2A",
  color: "#FFFFFF",
  borderRadius: "4px",
  cursor: "pointer",
  textAlign: "center",
  fontSize: "1.4rem",
  fontWeight: "500",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#0F0F0F",
  },
});

export const fileInput = style({
  display: "none",
});

export const fileInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "1rem",
  backgroundColor: "#F9F9F9",
  borderRadius: "4px",
  fontSize: "1.4rem",
});

export const previewContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  border: "1px dashed #2A2A2A",
  borderRadius: "4px",
});

export const preview = style({
  maxWidth: "100%",
  maxHeight: "400px",
  objectFit: "contain",
  borderRadius: "4px",
});

export const buttonGroup = style({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
});

export const uploadButton = style({
  padding: "0.75rem 2rem",
  backgroundColor: "#0F0F0F",
  color: "#FFFFFF",
  border: "none",
  borderRadius: "4px",
  fontSize: "1.6rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#2A2A2A",
  },
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
    backgroundColor: "#0F0F0F",
  },
});

export const resetButton = style({
  padding: "0.75rem 2rem",
  backgroundColor: "#F9F9F9",
  color: "#0F0F0F",
  border: "1px solid #2A2A2A",
  borderRadius: "4px",
  fontSize: "1.6rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#8A8A8A",
  },
});

export const resultSection = style({
  marginTop: "2rem",
  padding: "2rem",
  border: "1px solid #2A2A2A",
  borderRadius: "8px",
  backgroundColor: "#FFFFFF",
});

export const resultTitle = style({
  fontSize: "2.5rem",
  fontWeight: "700",
  marginBottom: "1.5rem",
});

export const resultGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "1rem",
  marginBottom: "1.5rem",
});

export const resultItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "1rem",
  backgroundColor: "#F9F9F9",
  borderRadius: "4px",
});

export const resultLabel = style({
  fontSize: "1.4rem",
  color: "#2A2A2A",
  fontWeight: "500",
});

export const resultValue = style({
  fontSize: "2rem",
  fontWeight: "700",
  color: "#0F0F0F",
});

export const analysisText = style({
  padding: "1rem",
  backgroundColor: "#F9F9F9",
  borderRadius: "4px",
  marginBottom: "1.5rem",
  fontSize: "1.6rem",
  lineHeight: "1.6",
});

export const segmentedImageContainer = style({
  marginTop: "1.5rem",
});

export const segmentedTitle = style({
  fontSize: "1.8rem",
  fontWeight: "600",
  marginBottom: "1rem",
});

export const segmentedImage = style({
  maxWidth: "100%",
  borderRadius: "4px",
  border: "1px solid #2A2A2A",
});

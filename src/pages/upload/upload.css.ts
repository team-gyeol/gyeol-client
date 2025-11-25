import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { screen } from "@shared/styles";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const container = style([
  {
    width: "60rem",
    margin: "0 auto",
    padding: " 0 2rem 4rem 2rem",
  },
  screen.mobile({
    width: "100%",
  }),
]);

export const title = style({
  ...fontStyles.body_b_30,
  marginBottom: "2rem",
  textAlign: "center",
});

export const modeToggle = style({
  display: "flex",
  gap: "1rem",
  marginBottom: "2rem",
  justifyContent: "center",
});

export const modeButton = recipe({
  base: {
    padding: "0.75rem 2rem",
    border: `1px solid ${color.border100}`,
    borderRadius: "4px",
    fontSize: "1.4rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s",
    backgroundColor: color.white100,
    color: color.black200,
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: color.black200,
        color: color.white100,
        borderColor: color.black200,
      },
      false: {
        ":hover": {
          backgroundColor: color.white200,
        },
      },
    },
  },
});

export const uploadSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.5rem",
  padding: "2rem",
  border: `1px solid ${color.black100}`,
  borderRadius: "8px",
  backgroundColor: color.white100,
});

export const fileLabel = style({
  display: "inline-block",
  width: "fit-content",
  padding: "1rem 2.5rem",
  backgroundColor: color.black100,
  color: color.white100,
  borderRadius: "4px",
  cursor: "pointer",
  textAlign: "center",
  fontSize: "1.4rem",
  fontWeight: "500",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: color.black200,
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
  backgroundColor: color.white200,
  borderRadius: "4px",
  fontSize: "1.4rem",
});

export const previewContainer = style({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  border: `1px dashed ${color.border100}`,
  borderRadius: "4px",
});

export const previewGrid = style({
  display: "grid",
  width: "100%",
  gap: "1rem",
  padding: "1rem",
  border: `1px dashed ${color.border100}`,
  borderRadius: "4px",
});

export const previewItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const previewFileName = style({
  fontSize: "1.2rem",
  color: color.gray100,
  textAlign: "center",
  wordBreak: "break-word",
});

export const preview = style({
  maxWidth: "100%",
  maxHeight: "40rem",
  objectFit: "contain",
  borderRadius: "4px",
});

export const previewPlaceholder = style({
  width: "100%",
  minHeight: "40rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: color.white200,
  borderRadius: "4px",
  border: `1px dashed ${color.border100}`,
});

export const placeholderText = style({
  fontSize: "1.6rem",
  color: color.gray100,
  fontWeight: "500",
});

export const buttonGroup = style({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
});

export const uploadButton = style({
  padding: "0.75rem 2rem",
  backgroundColor: color.black200,
  color: color.white100,
  border: "none",
  borderRadius: "4px",
  fontSize: "1.6rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: color.black100,
  },
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
    backgroundColor: color.black200,
  },
});

export const resetButton = style({
  padding: "0.75rem 2rem",
  backgroundColor: color.white200,
  color: color.black200,
  border: `1px solid ${color.border100}`,
  borderRadius: "4px",
  fontSize: "1.6rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: color.gray100,
  },
});

export const resultSection = style({
  marginTop: "2rem",
  padding: "2rem",
  border: `1px solid ${color.black100}`,
  borderRadius: "8px",
  backgroundColor: color.white100,
});

export const resultTitle = style({
  fontSize: "2.5rem",
  fontWeight: "700",
  marginBottom: "1.5rem",
  color: color.black300,
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
  backgroundColor: color.white200,
  borderRadius: "4px",
});

export const resultLabel = style({
  fontSize: "1.4rem",
  color: color.black100,
  fontWeight: "500",
});

export const resultValue = style({
  fontSize: "2rem",
  fontWeight: "700",
  color: color.black200,
});

export const analysisText = style({
  padding: "1rem",
  backgroundColor: color.white200,
  borderRadius: "4px",
  marginBottom: "1.5rem",
  fontSize: "1.6rem",
  lineHeight: "1.6",
  color: color.black200,
});

export const segmentedImageContainer = style({
  marginTop: "1.5rem",
});

export const segmentedTitle = style({
  fontSize: "1.8rem",
  fontWeight: "600",
  marginBottom: "1rem",
  color: color.black300,
});

export const segmentedImage = style({
  maxWidth: "100%",
  borderRadius: "4px",
  border: `1px solid ${color.border100}`,
});

export const multipleResultsSection = style({
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const resultCard = style({
  padding: "2rem",
  border: `1px solid ${color.border100}`,
  borderRadius: "8px",
  backgroundColor: color.white100,
});

export const resultCardTitle = style({
  fontSize: "1.8rem",
  fontWeight: "700",
  marginBottom: "1.5rem",
  color: color.black300,
});

export const evaluationSection = style({
  marginTop: "2rem",
  padding: "2rem",
  border: `1px solid ${color.black100}`,
  borderRadius: "8px",
  backgroundColor: color.white100,
});

export const evaluationItem = style({
  marginBottom: "3rem",
  ":last-child": {
    marginBottom: "0",
  },
});

export const evaluationTitle = style({
  fontSize: "2rem",
  fontWeight: "700",
  marginBottom: "1.5rem",
  color: color.black300,
});

export const evaluationImage = style({
  width: "100%",
  maxWidth: "100%",
  borderRadius: "4px",
  border: `1px solid ${color.border100}`,
  marginBottom: "1.5rem",
});

export const evaluationDescription = style({
  padding: "1.5rem",
  backgroundColor: color.white200,
  borderRadius: "4px",
});

export const evaluationText = style({
  fontSize: "1.4rem",
  lineHeight: "1.8",
  color: color.black200,
  marginBottom: "1.5rem",
  ":last-child": {
    marginBottom: "0",
  },
});

export const evaluationList = style({
  listStyle: "none",
  padding: "0",
  margin: "0",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

globalStyle(`${evaluationList} li`, {
  fontSize: "1.4rem",
  lineHeight: "1.6",
  color: color.black200,
});

globalStyle(`${evaluationList} li strong`, {
  color: color.black300,
  fontWeight: "600",
});

export const analysisLoading = style({
  marginTop: "1.5rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  padding: "2rem",
  borderRadius: "8px",
  border: `1px solid ${color.border100}`,
  backgroundColor: color.white200,
});

export const analysisLoadingText = style({
  ...fontStyles.body_b_18,
  color: color.black200,
  textAlign: "center",
  lineHeight: 1.5,
});

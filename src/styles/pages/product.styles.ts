import { styled } from "../stitches.config"

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",

  maxWidth: 1180,
  margin: "0 auto",
})

export const ImageContainer = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.25rem",

  height: 656,
  width: "100%",
  maxWidth: 576,

  img: {
    objectFit: "cover",
  },
})

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    color: "$gray300",
    fontSize: "$2xl",
  },

  span: {
    color: "$green300",
    fontSize: "$2xl",
    fontWeight: "bold",

    display: "flex",
    marginTop: "1rem",
  },

  p: {
    color: "$gray300",
    fontSize: "$md",
    lineHeight: 1.6,
    marginTop: "2.5rem",
  },

  button: {
    backgroundColor: "$green500",
    border: 0,
    borderRadius: 8,
    color: "$white",
    cursor: "pointer",
    fontSize: "$md",
    fontWeight: "bold",
    marginTop: "auto",
    padding: "1.25rem",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
  },
})

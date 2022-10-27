import { styled } from "../stitches.config"

export const SuccessContainer = styled("main", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  height: 656,
  margin: "0 auto",

  h1: {
    color: "$gray100",
    fontSize: "$2xl",
  },

  p: {
    color: "$gray300",
    fontSize: "$xl",
    marginTop: "2rem",
    maxWidth: 560,
    textAlign: "center",
  },

  a: {
    color: "$green500",
    fontSize: "$lg",
    fontWeight: "bold",
    display: "block",
    marginTop: "5rem",
    textDecoration: "none",

    "&:hover": {
      color: "$green300",
    },
  },
})

export const ImageContainer = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "4rem",
  padding: "0.25rem",

  height: 145,
  maxWidth: 130,
  width: "100%",

  img: {
    objectFit: "cover",
  },
})

import { styled } from "@/styled"
import img from "@/images/bg-overview.png"

export const StyledOverview = styled("div", {
  position: "relative",
  "&:after": {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    content: "' '",
    backgroundSize: "cover",
    zIndex: 1,
    backgroundImage: `url(${img})`
  }
})

export const StyledSpan = styled("span", {
  background: "linear-gradient(180deg, #CF7AD0 0%, #701A72 100%)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  backgroundClip: "text",
  textFillColor: "transparent"
})

export const StyledTechList = styled("ul", {
  "& > li": {
    "&:not(:last-of-type)": {
      marginLeft: "2rem"
    }
  }
})
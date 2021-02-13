import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#623787",
  },
  user: {
    color: "#ffffff",
  },
  image: {
    marginLeft: "20px",
    transform: "rotate(-10deg)",
  },
}));

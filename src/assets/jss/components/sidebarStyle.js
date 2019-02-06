import {
  drawerWidth,
  boxShadow,
  transition
} from "../commons.js";

const sidebarStyle = theme => ({
  drawerPaper: {
    border: "none",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    zIndex: "1",
    ...boxShadow,
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
          width: drawerWidth,
          position: "fixed",
          height: "100%"
        },
    [theme.breakpoints.down("sm")]: {
          width: drawerWidth,
          ...boxShadow,
          position: "fixed",
          display: "block",
          top: "0",
          height: "100vh",
          right: "0",
          left: "auto",
          zIndex: "1032",
          visibility: "visible",
          overflowY: "visible",
          borderTop: "none",
          textAlign: "left",
          paddingRight: "0px",
          paddingLeft: "0",
          transform: `translate3d(${drawerWidth}px, 0, 0)`,
          ...transition
        }    
  },
  sidebarWrapper: {
    position: "relative",
    height: "calc(100vh - 75px)",
    overflow: "auto",
    width: "260px",
    zIndex: "4",
    overflowScrolling: "touch"
  },

  list: {
    marginTop: "20px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none",
    position: "unset"
  },
  
  logo:{
      position: "relative",
      padding: "15px 15px",
      zIndex: "4",
      minHeight:"70px",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: "0",
        height: "2px",
        right: "15px",
        width: "calc(100% - 30px)",
        backgroundColor: "rgba(180, 180, 180, 0.3)"
      }
  },
  logoImage:{
      width: "50px",
      display: "inline-block",
      maxHeight: "50px",
      marginLeft: "0px",
      marginRight: "15px"
    },
  img: {
      width: "135px",
      top: "-38px",
      position: "absolute",
      verticalAlign: "middle",
      border: "0"

    },
  background:{
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    "&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      background: "#e6ffe6",
      opacity: "0.7"
    }
  }
});

export default sidebarStyle;

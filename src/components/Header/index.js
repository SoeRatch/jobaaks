import React from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import HeaderLinks from "./HeaderLinks";
import Button from "../CustomButtons/Button";
import headerStyle from "../../assets/jss/components/headerStyle";

const Header=({...props})=>{

	  const { classes, color } = props;
	  const appBarClasses = classNames({
	    [" " + classes[color]]: color
	  });

	  function makeBrand(){
	  	var name;
	  	props.routes.map((prop,key)=>{
	  		if(props.location.pathname===prop.path)
	  			name=prop.navbarName
	  		return null;
	  	});
	  	return name;

	  }


	return(
			<AppBar className={classes.appBar + appBarClasses}>
				<Toolbar className={classes.container}>
					<div className={classes.flex}>
				          {/* Here we create navbar brand, based on route name */}
				          <Button color="transparent" href="#" className={classes.title}>
								{makeBrand()}
						  </Button>
						  <Hidden smDown implementation="css">
					          <HeaderLinks />
					       </Hidden>
					</div>
				</Toolbar>
			</AppBar>

		);
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
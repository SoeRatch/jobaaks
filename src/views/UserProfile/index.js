import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import InputLabel from "@material-ui/core/InputLabel";

import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import CardIcon from "../../components/Card/CardIcon";
import CardAvatar from "../../components/Card/CardAvatar";

import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/CustomButtons/Button";

import avatar from "../../assets/img/faces/myimage.jpg";

const style={
	cardCategoryWhite: {
	    color: "rgba(255,255,255,.62)",
	    margin: "0",
	    fontSize: "14px",
	    marginTop: "0",
	    marginBottom: "0"
  	},
  	cardTitleWhite: {
	    color: "#FFFFFF",
	    marginTop: "0px",
	    minHeight: "auto",
	    fontWeight: "300",
	    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
	    marginBottom: "3px",
	    textDecoration: "none"
  	}
};

class UserProfile extends React.Component{

	render(){
		const { classes } = this.props;
		return(
			<div>
				<GridContainer>


					<GridItem xs={12} sm={12} md={8}>
          				<Card>
            				<CardHeader color="primary">
              					<h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              					<p className={classes.cardCategoryWhite}>Complete your profile</p>
            				</CardHeader>
            				<CardBody>

              					<GridContainer>
                					<GridItem xs={12} sm={12} md={5}>
						                  <CustomInput
						                    labelText="Company (disabled)"
						                    id="company-disabled"
						                    formControlProps={{
						                      fullWidth: true
						                    }}
						                    inputProps={{
						                      disabled: true
						                    }}
						                  />
                					</GridItem>
                					<GridItem xs={12} sm={12} md={3}>
						                  <CustomInput
						                    labelText="Username"
						                    id="username"
						                    formControlProps={{
						                      fullWidth: true
						                    }}
						                  />
					                </GridItem>
					                <GridItem xs={12} sm={12} md={4}>
						                  <CustomInput
						                    labelText="Email address"
						                    id="email-address"
						                    formControlProps={{
						                      fullWidth: true
						                    }}
						                  />
					                </GridItem>
              					</GridContainer>

					            <GridContainer>
					                <GridItem xs={12} sm={12} md={6}>
					                  <CustomInput
					                    labelText="First Name"
					                    id="first-name"
					                    formControlProps={{
					                      fullWidth: true
					                    }}
					                  />
					                </GridItem>
					                <GridItem xs={12} sm={12} md={6}>
					                  <CustomInput
					                    labelText="Last Name"
					                    id="last-name"
					                    formControlProps={{
					                      fullWidth: true
					                    }}
					                  />
					                </GridItem>
					            </GridContainer>

					            <GridContainer>
					                <GridItem xs={12} sm={12} md={4}>
					                  <CustomInput
					                    labelText="City"
					                    id="city"
					                    formControlProps={{
					                      fullWidth: true
					                    }}
					                  />
					                </GridItem>
					                <GridItem xs={12} sm={12} md={4}>
					                  <CustomInput
					                    labelText="Country"
					                    id="country"
					                    formControlProps={{
					                      fullWidth: true
					                    }}
					                  />
					                </GridItem>
					                <GridItem xs={12} sm={12} md={4}>
					                  <CustomInput
					                    labelText="Postal Code"
					                    id="postal-code"
					                    formControlProps={{
					                      fullWidth: true
					                    }}
					                  />
					                </GridItem>
					            </GridContainer>

					            <GridContainer>
					                <GridItem xs={12} sm={12} md={12}>
					                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
					                  <CustomInput
					                    labelText="An	enthusiastic	team	player	with	a	zest	for	technology	and	an	outgoing	attitude,	bringing	innovative	ideas	and	a	strong		product	oriented"
					                    id="about-me"
					                    formControlProps={{
					                      fullWidth: true
					                    }}
					                    inputProps={{
					                      multiline: true,
					                      rows: 5
					                    }}
					                  />
					                </GridItem>
					            </GridContainer>

					        </CardBody>

					        <CardFooter>
					              <Button color="primary">Update Profile</Button>
					        </CardFooter>
					    </Card>
					</GridItem>


			        <GridItem xs={12} sm={12} md={4}>
			          <Card profile>
			            <CardAvatar profile>
			              <a href="#pablo" onClick={e => e.preventDefault()}>
			                <img src={avatar} alt="..." />
			              </a>
			            </CardAvatar>
			            <CardBody profile>
			              <h5 className={classes.cardCategory}>JAVASCRIPT NINJA</h5>
			              <h3 className={classes.cardTitle}>Suraj Sharma</h3>
			              <p className={classes.description}>
			              	Innovation is the key to nothing but just a satisfaction to see something which was 
			              	happening beacause of a decision taken to put all those questions in head to sleep.
			                Don't be scared of the truth because we need to restart the
			                human foundation in truth And I love you like Kanye loves Kanye ...
			              </p>
			              <Button color="primary" round>
			                Follow
			              </Button>
			            </CardBody>
			          </Card>
			        </GridItem>


				</GridContainer>
			</div>

			);
	}
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(style)(UserProfile);
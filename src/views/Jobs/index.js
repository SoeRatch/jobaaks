import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import InputLabel from "@material-ui/core/InputLabel";


import jobStyle from "../../assets/jss/views/jobStyle";

import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import CardIcon from "../../components/Card/CardIcon";
import CardAvatar from "../../components/Card/CardAvatar";




class Jobs extends React.Component{

	render(){
		const { classes } = this.props;
		return(
			<div>
				<GridContainer>

					<GridItem xs={12} sm={12} md={12}>
						<Card>
							<CardHeader color="info">
						                <h3 className={classes.cardTitleWhite}>
						                  Company Name
						                </h3>
						                <p className={classes.cardCategoryWhite}> Headline of the company</p>
						                <p className={classes.cardCategoryWhite}> Location </p>
					        </CardHeader>
					        <CardBody>
					              	<GridContainer>
                					<GridItem xs={12} sm={12} md={3}>
						                  <h3 className={classes.jobHeader}>JOBS</h3>
                					</GridItem>
                					<GridItem xs={12} sm={12} md={8}>
						                  <h5 className={classes.jobTitle}>#1 JOBROLE <span style={{float:"right",color:"#000",fontWeight:"400"}}>ctc and equity</span></h5>
						                  <br/>
						                  <p className={classes.jobDesc}>Job Type · Job Location · Job Role · #skill 1 · #skill 2 · #skill 3 · #skill 4 · #skill 5 · ...</p>
						                  <br/>
						                  <br/>
										  <h5 className={classes.jobTitle}>#2 JOBROLE <span style={{float:"right",color:"#000",fontWeight:"400"}}>ctc and equity</span></h5>
						                  <br/>
						                  <p className={classes.jobDesc}>Job Type · Job Location · Job Role · #skill 1 · #skill 2 · #skill 3 · #skill 4 · #skill 5 · ...</p>
						                  
					                </GridItem>
              					</GridContainer>
					        </CardBody>
					        <CardFooter chart>
					                <div>
					                    job posted x days/hours ago
					                </div>
					        </CardFooter>
					    </Card>
					</GridItem>

					<GridItem xs={12} sm={12} md={12}>
						<Card>
							<CardHeader color="info">
						                <h3 className={classes.cardTitleWhite}>
						                  Jobaaks
						                </h3>
						                <p className={classes.cardCategoryWhite}> Work,thrive and grow</p>
						                <p className={classes.cardCategoryWhite}> Bengaluru </p>
					        </CardHeader>
					        <CardBody>
					              	<GridContainer>
                					<GridItem xs={12} sm={12} md={3}>
						                  <h3 className={classes.jobHeader}>JOBS</h3>
                					</GridItem>
                					<GridItem xs={12} sm={12} md={8}>
						                  <h5 className={classes.jobTitle}>Lead Frontend Developer <span style={{float:"right",color:"#000",fontWeight:"400"}}>₹24L – ₹36L · No equity</span></h5>
						                  <br/>
						                  <p className={classes.jobDesc}>Full Time · Bengaluru · Frontend Developer · Javascript · Node.js · Backbone.js · Ember.js · AngularJS · React.js</p>
						                  <br/>
						                  <br/>
						                  <h5 className={classes.jobTitle}>Entrepreneurship Acceleration – Sales<span style={{float:"right",color:"#000",fontWeight:"400"}}>₹6L – ₹24L · No equity</span></h5>
						                  <br/>
						                  <p className={classes.jobDesc}>Full Time · Mumbai · Bengaluru · Delhi · Sales · Business Development · Account Manager</p>
					                </GridItem>
              					</GridContainer>
					        </CardBody>
					        <CardFooter chart>
					                <div>
					                    job posted 1 day ago
					                </div>
					        </CardFooter>
					    </Card>
					</GridItem>
					
					<GridItem xs={12} sm={12} md={12}>
						<Card>
							<CardHeader color="info">
						                <h3 className={classes.cardTitleWhite}>
						                  ABC company
						                </h3>
						                <p className={classes.cardCategoryWhite}> ABC's headline</p>
						                <p className={classes.cardCategoryWhite}> Bengaluru </p>
					        </CardHeader>
					        <CardBody>
					              	<GridContainer>
                					<GridItem xs={12} sm={12} md={3}>
						                  <h3 className={classes.jobHeader}>JOBS</h3>
                					</GridItem>
                					<GridItem xs={12} sm={12} md={8}>
						                  <h5 className={classes.jobTitle}>Lead Frontend Developer <span style={{float:"right",color:"#000",fontWeight:"400"}}>₹24L – ₹36L · No equity</span></h5>
						                  <br/>
						                  <p className={classes.jobDesc}>Full Time · Bengaluru · Frontend Developer · Javascript · Node.js · Backbone.js · Ember.js · AngularJS · React.js</p>
						                  <br/>
						                  <br/>
						                  <h5 className={classes.jobTitle}>Entrepreneurship Acceleration – Sales<span style={{float:"right",color:"#000",fontWeight:"400"}}>₹6L – ₹24L · No equity</span></h5>
						                  <br/>
						                  <p className={classes.jobDesc}>Full Time · Mumbai · Bengaluru · Delhi · Sales · Business Development · Account Manager</p>
					                </GridItem>
              					</GridContainer>
					        </CardBody>
					        <CardFooter chart>
					                <div>
					                    job posted 2 day ago
					                </div>
					        </CardFooter>
					    </Card>
					</GridItem>

					<GridItem xs={12} sm={12} md={12}>
						<Card>
							<CardHeader color="info">
						                <h3 className={classes.cardTitleWhite}>
						                  DEF company
						                </h3>
						                <p className={classes.cardCategoryWhite}> DEF's headline</p>
						                <p className={classes.cardCategoryWhite}> Delhi </p>
					        </CardHeader>
					        <CardBody>
					              	<GridContainer>
                					<GridItem xs={12} sm={12} md={3}>
						                  <h3 className={classes.jobHeader}>JOBS</h3>
                					</GridItem>
                					<GridItem xs={12} sm={12} md={8}>
						                  <h5 className={classes.jobTitle}>Lead Frontend Developer <span style={{float:"right",color:"#000",fontWeight:"400"}}>₹24L – ₹36L · No equity</span></h5>
						                  <br/>
						                  <p className={classes.jobDesc}>Full Time · Bengaluru · Frontend Developer · Javascript · Node.js · Backbone.js · Ember.js · AngularJS · React.js</p>
						                  <br/>
						                  <br/>
						                  <h5 className={classes.jobTitle}>Entrepreneurship Acceleration – Sales<span style={{float:"right",color:"#000",fontWeight:"400"}}>₹6L – ₹24L · No equity</span></h5>
						                  <br/>
						                  <p className={classes.jobDesc}>Full Time · Mumbai · Bengaluru · Delhi · Sales · Business Development · Account Manager</p>
					                </GridItem>
              					</GridContainer>
					        </CardBody>
					        <CardFooter chart>
					                <div>
					                    job posted 3 day ago
					                </div>
					        </CardFooter>
					    </Card>
					</GridItem>

					<GridItem xs={12} sm={12} md={12}>
						<Card>
							<CardHeader color="info">
						                <h3 className={classes.cardTitleWhite}>
						                  GHI company
						                </h3>
						                <p className={classes.cardCategoryWhite}> GHI's headline</p>
						                <p className={classes.cardCategoryWhite}> Pune </p>
					        </CardHeader>
					        <CardBody>
					              	<GridContainer>
                					<GridItem xs={12} sm={12} md={3}>
						                  <h3 className={classes.jobHeader}>JOBS</h3>
                					</GridItem>
                					<GridItem xs={12} sm={12} md={8}>
						                  <h5 className={classes.jobTitle}>Lead Frontend Developer <span style={{float:"right",color:"#000",fontWeight:"400"}}>₹24L – ₹36L · No equity</span></h5>
						                  <br/>
						                  <p className={classes.jobDesc}>Full Time · Bengaluru · Frontend Developer · Javascript · Node.js · Backbone.js · Ember.js · AngularJS · React.js</p>
						                  <br/>
						                  <br/>
						                  <h5 className={classes.jobTitle}>Entrepreneurship Acceleration – Sales<span style={{float:"right",color:"#000",fontWeight:"400"}}>₹6L – ₹24L · No equity</span></h5>
						                  <br/>
						                  <p className={classes.jobDesc}>Full Time · Mumbai · Bengaluru · Delhi · Sales · Business Development · Account Manager</p>
					                </GridItem>
              					</GridContainer>
					        </CardBody>
					        <CardFooter chart>
					                <div>
					                    job posted 4 day ago
					                </div>
					        </CardFooter>
					    </Card>
					</GridItem>


				</GridContainer>
			</div>

			);
	}
}

Jobs.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(jobStyle)(Jobs);
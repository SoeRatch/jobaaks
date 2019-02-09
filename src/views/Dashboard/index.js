import React from 'react';
import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";
import withStyles from "@material-ui/core/styles/withStyles";
import Store from "@material-ui/icons/Store";
import AccessTime from "@material-ui/icons/AccessTime";
import dashboardStyle from "../../assets/jss/views/dashboardStyle";

import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import CardIcon from "../../components/Card/CardIcon";

class Dashboard extends React.Component{

	render(){
		const { classes } = this.props;
		return(
				<div>
					<GridContainer>
					   <GridItem xs={12} sm={12} md={4}>
					            <Card>
					              <CardHeader color="info">
						                <h3 className={classes.cardTitleWhite}>
						                  Company Name
						                </h3>
						                <p className={classes.cardCategoryWhite}> Headline of the company</p>
					              </CardHeader>
					              <CardBody>
					              	<h4 className={classes.cardTitleGreen}>
					              		Status:<span className={classes.cardTitle}>status of the job application</span>
					              	</h4>
					                <h4 className={classes.cardTitle}>Job-title</h4>
					                <p className={classes.cardCategory}>
					                  primary requirement of the job
					                </p>
					                <p className={classes.cardCategory}>
					                  secondary requirement of the job
					                </p>
					              </CardBody>
					              <CardFooter chart>
					                <div className={classes.stats}>
					                   <AccessTime /> status updated x days/hours ago
					                </div>
					              </CardFooter>
					            </Card>
					    </GridItem>

					    <GridItem xs={12} sm={12} md={4}>
					            <Card>
					              <CardHeader color="success">
						                <h3 className={classes.cardTitleWhite}>
						                  Pensheel
						                </h3>
						                <p className={classes.cardCategoryWhite}>AI powered blogging platform</p>
					              </CardHeader>
					              <CardBody>
					              	<h4 className={classes.cardTitleGreen}>
					              		Status:<span className={classes.cardTitle}>Shortlisted</span>
					              	</h4>
					                <h4 className={classes.cardTitle}>ML Engineer</h4>
					                <p className={classes.cardCategory}>
					                  Python, Machine-Learning, NLP, Deep-Learning
					                </p>
					                <p className={classes.cardCategory}>
					                  0-8 years of experience
					                </p>
					              </CardBody>
					              <CardFooter chart>
					                <div className={classes.stats}>
					                   <AccessTime /> status updated 1 days ago
					                </div>
					              </CardFooter>
					            </Card>
					    </GridItem>
			          
			           <GridItem xs={12} sm={12} md={4}>
					            <Card>
					              <CardHeader color="info">
						                <h3 className={classes.cardTitleWhite}>
						                  Jobaaks
						                </h3>
						                <p className={classes.cardCategoryWhite}> Work,Thrive and Grow</p>
					              </CardHeader>
					              <CardBody>
					              	<h4 className={classes.cardTitleGreen}>
					              		Status:<span className={classes.cardTitle}>Applied</span>
					              	</h4>
					                <h4 className={classes.cardTitle}>Front-Development</h4>
					                <p className={classes.cardCategory}>
					                  Javascript, React, D3.js, Vue, Html, CSS
					                </p>
					                <p className={classes.cardCategory}>
					                  0-2 years experience
					                </p>
					              </CardBody>
					              <CardFooter chart>
					                <div className={classes.stats}>
					                   <AccessTime /> status updated 2 days ago
					                </div>
					              </CardFooter>
					            </Card>
					    </GridItem>
					    <GridItem xs={12} sm={12} md={4}>
					            <Card>
					              <CardHeader color="danger">
						                <h3 className={classes.cardTitleWhite}>
						                  ABC company
						                </h3>
						                <p className={classes.cardCategoryWhite}> ABC's headline</p>
					              </CardHeader>
					              <CardBody>
					              	<h4 className={classes.cardTitleGreen}>
					              		Status:<span className={classes.cardTitle}>Rejected</span>
					              	</h4>
					                <h4 className={classes.cardTitle}>FullStack-Development</h4>
					                <p className={classes.cardCategory}>
					                  React, Angular, Node, Springboot
					                </p>
					                <p className={classes.cardCategory}>
					                  2-5 years experience
					                </p>
					              </CardBody>
					              <CardFooter chart>
					                <div className={classes.stats}>
					                   <AccessTime /> status updated 3 days ago
					                </div>
					              </CardFooter>
					            </Card>
					    </GridItem>

					    <GridItem xs={12} sm={12} md={4}>
					            <Card>
					              <CardHeader color="primary">
						                <h3 className={classes.cardTitleWhite}>
						                  DEF company
						                </h3>
						                <p className={classes.cardCategoryWhite}> DEF's headline</p>
					              </CardHeader>
					              <CardBody>
					              	<h4 className={classes.cardTitleGreen}>
					              		Status:<span className={classes.cardTitle}>Pending- 1st round cleared</span>
					              	</h4>
					                <h4 className={classes.cardTitle}>FullStack-Development</h4>
					                <p className={classes.cardCategory}>
					                  React, Angular, Node, Springboot
					                </p>
					                <p className={classes.cardCategory}>
					                  2-5 years experience
					                </p>
					              </CardBody>
					              <CardFooter chart>
					                <div className={classes.stats}>
					                   <AccessTime /> status updated 4 days ago
					                </div>
					              </CardFooter>
					            </Card>
					    </GridItem>

					    <GridItem xs={12} sm={12} md={4}>
					            <Card>
					              <CardHeader color="info">
						                <h3 className={classes.cardTitleWhite}>
						                  GHI company
						                </h3>
						                <p className={classes.cardCategoryWhite}>GHI's headline</p>
					              </CardHeader>
					              <CardBody>
					              	<h4 className={classes.cardTitleGreen}>
					              		Status:<span className={classes.cardTitle}>Applied</span>
					              	</h4>
					                <h4 className={classes.cardTitle}>FullStack-Development</h4>
					                <p className={classes.cardCategory}>
					                  React, Angular, Node, Springboot
					                </p>
					                <p className={classes.cardCategory}>
					                  2-5 years experience
					                </p>
					              </CardBody>
					              <CardFooter chart>
					                <div className={classes.stats}>
					                   <AccessTime /> status updated 5 days ago
					                </div>
					              </CardFooter>
					            </Card>
					    </GridItem>
					    <GridItem xs={12} sm={12} md={4}>
					            <Card>
					              <CardHeader color="info">
						                <h3 className={classes.cardTitleWhite}>
						                  JKL company
						                </h3>
						                <p className={classes.cardCategoryWhite}> JKL's headline</p>
					              </CardHeader>
					              <CardBody>
					              	<h4 className={classes.cardTitleGreen}>
					              		Status:<span className={classes.cardTitle}>Applied</span>
					              	</h4>
					                <h4 className={classes.cardTitle}>FullStack-Development</h4>
					                <p className={classes.cardCategory}>
					                  React, Angular, Node, Springboot
					                </p>
					                <p className={classes.cardCategory}>
					                  2-5 years experience
					                </p>
					              </CardBody>
					              <CardFooter chart>
					                <div className={classes.stats}>
					                   <AccessTime /> status updated 5 days ago
					                </div>
					              </CardFooter>
					            </Card>
					    </GridItem>
					    <GridItem xs={12} sm={12} md={4}>
					            <Card>
					              <CardHeader color="info">
						                <h3 className={classes.cardTitleWhite}>
						                  MNO company
						                </h3>
						                <p className={classes.cardCategoryWhite}> MNO's headline</p>
					              </CardHeader>
					              <CardBody>
					              	<h4 className={classes.cardTitleGreen}>
					              		Status:<span className={classes.cardTitle}>Applied</span>
					              	</h4>
					                <h4 className={classes.cardTitle}>FullStack-Development</h4>
					                <p className={classes.cardCategory}>
					                  React, Angular, Node, Springboot
					                </p>
					                <p className={classes.cardCategory}>
					                  2-5 years experience
					                </p>
					              </CardBody>
					              <CardFooter chart>
					                <div className={classes.stats}>
					                   <AccessTime /> status updated 5 days ago
					                </div>
					              </CardFooter>
					            </Card>
					    </GridItem>
					    <GridItem xs={12} sm={12} md={4}>
					            <Card>
					              <CardHeader color="info">
						                <h3 className={classes.cardTitleWhite}>
						                  PQR company
						                </h3>
						                <p className={classes.cardCategoryWhite}> PQR's headline</p>
					              </CardHeader>
					              <CardBody>
					              	<h4 className={classes.cardTitleGreen}>
					              		Status:<span className={classes.cardTitle}>Applied</span>
					              	</h4>
					                <h4 className={classes.cardTitle}>FullStack-Development</h4>
					                <p className={classes.cardCategory}>
					                  React, Angular, Node, Springboot
					                </p>
					                <p className={classes.cardCategory}>
					                  2-5 years experience
					                </p>
					              </CardBody>
					              <CardFooter chart>
					                <div className={classes.stats}>
					                   <AccessTime /> status updated 5 days ago
					                </div>
					              </CardFooter>
					            </Card>
					    </GridItem>
					    

			        </GridContainer>
				</div>

			);
	}
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
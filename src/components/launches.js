import React from 'react';
import PropTypes from 'prop-types';
// Importing the Bootstrap Components
import {Container, Row, Col, Card} from 'react-bootstrap';

// Importing components
import Loader from '../shared/loader';
import Filters from '../shared/filters';

class Launches extends React.Component {
  getBool(bool) {
    if (bool) {
      return 'true';
    }
    return 'false';
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={2} ><Filters {...this.props}/></Col>
          <Col md={10} >
            { !this.props.launchesData.loading ?
                 this.props.launchesData.launchesList.map( (launch, index) =>
                   <Card key={index} className="card-default" bg="#f7f5f5">
                     <Card.Img variant="top" src="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753" />
                     <Card.Body style={{textAlign: 'left'}}>
                       <Card.Title style={{color: '#4d4dc1'}}>{launch.mission_name}</Card.Title>
                       <Card.Text>
                         <label className="label-default">Mission IDs:</label>
                         { launch.mission_id.length > 0 ?
                            launch.mission_id.map( (item, index) =>
                                <label key={index} className="label-text"> 
                                    {item + ','}
                                </label>,
                          ) : ''}
                         <br/>
                         <label className="label-default">Launch Year:</label>
                         <label className="label-text"> {launch.launch_year}</label>
                         <br/>
                         {}
                         <label className="label-default">Successful Launch:</label>
                         <label className="label-text">
                           {launch.launch_success !== null ?
                                this.getBool(launch.launch_success) : 'NA'}
                         </label>
                         <br/>
                         <label className="label-default">Successful Landing:</label>
                         <label className="label-text">
                           {launch.rocket.first_stage.cores[0].land_success !== null ?
                              this.getBool(launch.rocket.first_stage.cores[0].land_success) : 'NA'}
                         </label>
                       </Card.Text>
                     </Card.Body>
                   </Card>,
                 ) : <Loader/>}
          </Col>
        </Row>
      </Container>
    );
  }
}

Launches.propTypes = {
    launchesData: PropTypes.array
};

export default Launches;

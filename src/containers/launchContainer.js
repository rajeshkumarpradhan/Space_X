import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

// Importing components
import Launches from "../components/launches";

// Importing actions
import {getLaunches, getFilteredlaunches} from "../redux/actions/launchAction";

class LaunchContainer extends React.Component {

    componentDidMount() {
        this.props.getLaunches();
    };
    filterData = (filters) => {
        let url = "/filter"
        let count = 1;
        if(filters.successfulLaunch  !== null) {
            count++
            url = url + "/launch_success=" + filters.successfulLaunch;
          }
        if(filters.successfulLanding  !== null) {
            count++
            url = url + "/land_success=" + filters.successfulLanding;
          }
        if(filters.year) {
            count++
            url = url + "/launch_year=" + filters.year;
          }
       if(count === 1)  url = ""  
        this.props.getFilteredlaunches(filters);
        this.props.history.push( url);
    }

    render() {
        return (
        <React.Fragment>
            <Launches filter={this.filterData} launchesData={this.props.data}/>   
        </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    data: state.launches,
})

const mapDispatchToProps = dispatch => {
    return {
        getLaunches: () => dispatch(getLaunches()),
        getFilteredlaunches: (filters) => dispatch(getFilteredlaunches(filters)),
    }
}

LaunchContainer.propTypes = {
    getLaunches: PropTypes.func,
    getFilteredlaunches: PropTypes.func,
    data:PropTypes.array,
    history:PropTypes.object,
};
export default connect(mapStateToProps, mapDispatchToProps)(LaunchContainer)

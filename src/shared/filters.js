import React from "react";
import PropTypes from 'prop-types';
// Importing the Bootstrap Components
import {Button } from "react-bootstrap";

class Filters extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                year:null,
                successfulLaunch:null,
                successfulLanding:null
            }
        }
    }

    filterYear(year) {
        const filters = this.state.filters;
        filters.year = filters.year === year ? null : year;
        this.setState({filters: filters });
        this.props.filter(filters)
    }

    filterData(type, bool) {
        const filters = this.state.filters;
        filters[type] = filters[type] === bool ? null : bool;
        this.setState({filters: filters });
        this.props.filter(filters)
    }

    getYears() {
        const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
             2014, 2015, 2016, 2017, 2018, 2019, 2020]
        return years.map( (year, index) =>
        <Button key = {index} variant = "primary" 
            style={{background : this.state.filters.year === year  ? 'green' : '#8cdc8c'}}
            className="filter-button" onClick={() =>this.filterYear(year)}>{year}</Button>
        )
    }

  render() {
    return (
        <React.Fragment>
            <label  className="label-default">Launch Year</label><br/>
            { this.getYears()}<br/>
            <label  className="label-default">Successful Lunch</label><br/>
            <Button variant="primary" 
                className="filter-button" 
                style = {{background : this.state.filters.successfulLaunch === true  
                    ? 'green' : '#8cdc8c'}}
                onClick={() =>this.filterData('successfulLaunch', true)}>True</Button>
            <Button variant="primary" 
                className="filter-button"
                style = {{background : this.state.filters.successfulLaunch === false  
                    ? 'green' : '#8cdc8c'}}
                onClick={() =>this.filterData('successfulLaunch', false)}>False</Button><br/>

            <label  className="label-default">Successful Landing</label><br/>
            <Button variant="primary" 
                className="filter-button"
                style = {{background : this.state.filters.successfulLanding === true  
                    ? 'green' : '#8cdc8c'}}
                onClick={() =>this.filterData('successfulLanding', true)}>True</Button>
            <Button variant="primary" 
                className="filter-button"
                style = {{background : this.state.filters.successfulLanding === false  
                    ? 'green' : '#8cdc8c'}}
                onClick = {() =>this.filterData('successfulLanding', false)}>False</Button><br/>
        </React.Fragment>
    );
  }
}
Filters.propTypes = {
    filter: PropTypes.object,
};

export default Filters;

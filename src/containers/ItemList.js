import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {itemsFetchData} from '../actions';

class ItemList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this
            .props
            .fetchData('http://599167402df2f40011e4929a.mockapi.io/items');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div className="cotainer">
                <div className="is-grouped">
                    <ul>
                        {this
                            .props
                            .items
                            .map((item) => (
                                <li key={item.id}>
                                    {item.label}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>

        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {items: state.items, hasErrored: state.itemsHasErrored, isLoading: state.itemsIsLoading};
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

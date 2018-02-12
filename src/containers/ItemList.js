import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {itemsFetchData} from '../actions';

class ItemList extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {     this         .props
    // .fetchData('http://599167402df2f40011e4929a.mockapi.io/items'); }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div className="cotainer">
                <form>

                    <div className="field is-grouped">
                        <div className="control">
                            <button
                                className="button is-info"
                                onClick={(e) => {
                                e.preventDefault();
                                this
                                    .props
                                    .fetchData('http://localhost:3333/olympics2018_winners_from_norway');
                            }}>Winter Olympics Medal Winners (Norway)</button>
                        </div>
                    </div>
                </form>

                {this
                    .props
                    .items
                    .map((item) => (
                        <div key={item.id} className="tags has-addons">
                            <span className="tag is-white">
                                {item.label}
                            </span>
                            <button className="delete"></button>
                        </div>
                    ))}
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

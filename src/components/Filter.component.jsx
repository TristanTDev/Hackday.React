import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRule, setRatingLevel } from '../store/actions/filter.action.js'


class FilterComponent extends Component {
  onRuleChange = (e) => {
    e.preventDefault();
    this.props.changeRule(e.target.value);
  }

  onRatingChange = (e) => {
    e.preventDefault();
    this.props.changeRating(e.target.value);
  }

  render() {
    return (
      <div>
        <label>Rule</label>
        <select id="rule-selection" onChange={this.onRuleChange} value={this.props.rule}>
          <option value="greater-than">Greater Than or Equal To</option>
          <option value="equal-to">Equal To</option>
          <option value="less-than">Less Than or Equal To</option>
        </select>

        <label>Rating</label>
        <select id="rating-selection" onChange={this.onRatingChange} value={this.props.rating}>
          <option value={5}>5</option>
          <option value={4}>4</option>
          <option value={3}>3</option>
          <option value={2}>2</option>
          <option value={1}>1</option>
        </select>
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    rating: state.filters.ratingLevel,
    rule: state.filters.currentRule
  });
}

const mapStateToDispatch = (dispatch) => {
  return {
    changeRating: (rating) => { dispatch(setRatingLevel(rating)) },
    changeRule: (rule) => { dispatch(setRule(rule)) }
  };
}

export default connect(mapStateToProps, mapStateToDispatch)(FilterComponent);
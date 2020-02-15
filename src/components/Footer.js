import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FILTERS } from '../constants/Filters';
import { withStateAndDispatch } from '../store/container';

export class Footer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    itemsLeft: PropTypes.number.isRequired,
    completedCount: PropTypes.number.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    onFilterSelect: PropTypes.func.isRequired
  };

  render() {
    const itemText = this.props.itemsLeft === 1 ? 'item' : 'items';
    const filterTitles = [
      { key: FILTERS.all, value: 'All' },
      { key: FILTERS.active, value: 'Active' },
      { key: FILTERS.completed, value: 'Completed' }
    ];

    return (
      <footer className="footer">
        <span className="todo-count"><strong>{this.props.itemsLeft}</strong><span> {itemText} left</span></span>
        <ul className="filters">
          {filterTitles.map(filterTitle =>
            <li key={filterTitle.key}>
              <a
                href="#"
                className={classNames({ selected: filterTitle.key === this.props.filter })}
                onClick={() => this.props.onFilterSelect(filterTitle.key)}
              >
                {filterTitle.value}
              </a>
            </li>
          )}
        </ul>
        {
          !!this.props.completedCount &&
          <button className="clear-completed" onClick={this.props.onClearCompleted}>Clear completed</button>
        }
      </footer>
    );
  }
}

export const FooterContainer = withStateAndDispatch(Footer);

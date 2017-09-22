import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleExpandedState } from './redux';
import { renderParent } from './utils';
import NavPanel from './NavPanel.jsx';

const propTypes = {
  expandedState: PropTypes.object,
  pages: PropTypes.arrayOf(PropTypes.object),
  parents: PropTypes.arrayOf(PropTypes.object),
  toggleExpandedState: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { parents } = state.nav;
  return {
    parents
  };
}

function mapDispatchToProps(dispatch) {
  const dispatchers = {
    toggleExpandedState: bindActionCreators(toggleExpandedState, dispatch)
  };
  return dispatchers;
}

function renderPanels(parents) {
  if (!parents) {
    return 'No Parents Here';
  }
  return parents
    .map(renderParent);
}

class SideNav extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { pathname } = this.context.router.route.location;
    const pathMap = pathname.slice(1).split('/').slice(0, -1)
      .reduce((accu, current, i, pathArray) => {
        const path = i !== 0 ?
          accu[pathArray[ i - 1 ]] + `/${current}` :
          `/${current}`;
        return {
          ...accu,
          [current]: path
        };
      }, {});

    Object.keys(pathMap)
      .map(key => pathMap[key])
      .map(path => {
        this.props.toggleExpandedState(path);
        return null;
      });
  }

  render() {
    const { parents } = this.props;
    const panels = renderPanels(parents);
    return (
      <div className='sideNav' id='side-nav'>
        <PanelGroup>
          {
            !parents ?
            <NavPanel title={'No Parents Here'}/> :
            panels
          }
        </PanelGroup>
      </div>
    );
  }
}

SideNav.contextTypes = {
  router: React.PropTypes.object.isRequired
};
SideNav.displayName = 'SideNav';
SideNav.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);

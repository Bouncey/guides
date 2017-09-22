import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleExpandedState } from './redux';
import { renderChildren } from './utils';

const propTypes = {
  childrenForPanel: PropTypes.arrayOf(PropTypes.object),
  handleClick: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  const { path } = ownProps;
  const isExpanded = state.nav.expandedState[path];
  const pages = state.nav.pages;
  const category = pages.filter(page => page.path === path)[0];
  const { dashedName, title } = category;
  const childrenForPanel = pages.filter(page => page.parent === dashedName);

  return {
    childrenForPanel,
    isExpanded,
    title
  };
}

function mapDispatchToProps(dispatch) {
  const dispatchers = {
    handleClick: bindActionCreators(toggleExpandedState, dispatch)
  };
  return dispatchers;
}

function NoArticles() {
  return (
    <li role='presentation'>
      <span>
        No articles yet.
        <br />
        Could you&nbsp;
        <a
          href={
            'https://github.com/freeCodeCamp/guides/blob/master/README.md' +
            '#freecodecamp-guide'
          }
          rel='nofollow'
          target='_blank'
          >
          write one?
        </a>
      </span>
    </li>
  );
}

class NavPanel extends PureComponent {
  constructor() {
    super();

    this.renderHeader = this.renderHeader.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  handleHeaderClick() {
    const { push } = this.context.router.history;
    const { path, handleClick } = this.props;
    handleClick(path);
    push(path);
  }

  renderHeader() {
    const { isExpanded, title } = this.props;
    return (
      <div className='title' onClick={ this.handleHeaderClick }>
        <span
          className={
            'caret ' +
            ( isExpanded ? 'caretStyle expanded' : 'caretStyle' )
          }
        />
        <span>
          { title }
        </span>
      </div>
    );
  }

  renderBody() {
    const { childrenForPanel, isExpanded } = this.props;
    const panelChildren = renderChildren(childrenForPanel);
    const childrenWithChildren = panelChildren
      .filter(child => child.props.hasChildren);
    const uniqueChildren = childrenWithChildren
      .concat(
        panelChildren
          .filter(
            child => !childrenWithChildren.some(x => x.key === child.key))
          );
    return (
        <div className={ isExpanded ? 'body' : '' }>
          <ul className='navPanelUl'>
            {
              Object.keys(childrenForPanel).length ?
              uniqueChildren :
              <NoArticles />
            }
          </ul>
        </div>
      );
  }

  render() {
    const { isExpanded } = this.props;
    return (
      <Panel
        bsClass='panelStyle panel'
        collapsible={ true }
        expanded={ isExpanded }
        header={ this.renderHeader() }
        >
        {
          ( isExpanded ? this.renderBody() : null )
        }
      </Panel>
    );
  }
}

NavPanel.contextTypes = {
  router: PropTypes.object
};
NavPanel.displayName = 'NavPanel';
NavPanel.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NavPanel);

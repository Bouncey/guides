import React from 'react';

import NavPanel from './NavPanel.jsx';
import NavItem from './NavItem.jsx';

export function renderChildren(children) {
  return children
    .map(child => {
      if (child.hasChildren) {
        return renderParent(child);
      }
      return (
        <NavItem
          isStubbed={ child.isStubbed }
          key={ child.path }
          path={ child.path }
          title={ child.title }
        />
      );
  });
}

export function renderParent(parent) {
  return (
    <NavPanel
      hasChildren={ !!parent.children.length }
      key={ parent.path }
      path={ parent.path }
    />
    );
}

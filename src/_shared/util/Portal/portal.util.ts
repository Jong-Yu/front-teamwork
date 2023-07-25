import React from 'react';
import ReactDOM from 'react-dom';
import { getElementById, getRootElement } from '../Element/element.util';

export const portal = (children: React.ReactNode, id?: string) => {
  const rootEl = getRootElement();
  const targetEl = getElementById(id || '');

  if (rootEl) {
    return ReactDOM.createPortal(children, id && targetEl ? targetEl : rootEl);
  }
};

export default portal;

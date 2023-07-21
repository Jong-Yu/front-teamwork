import React from 'react';
import ReactDOM from 'react-dom';
import { getRootElement } from '../Element/element.util';

export const portal = (children: React.ReactNode) => {
  const rootEl = getRootElement();

  if (rootEl) {
    return ReactDOM.createPortal(children, rootEl);
  }
};

export default portal;

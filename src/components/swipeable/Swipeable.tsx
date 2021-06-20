import { useSwipeable } from 'react-swipeable';
import React from 'react';

export const Swipeable = ({children, ...props}) => {
  const handlers = useSwipeable(props);
  return (<div { ...handlers }>{children}</div>);
}
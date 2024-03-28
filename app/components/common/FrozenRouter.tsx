import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import React from 'react';

export default function FrozenRouter(props: { children: React.ReactNode }) {
  const context = React.useContext(LayoutRouterContext);
  const frozen = React.useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

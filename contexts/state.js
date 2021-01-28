import { createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {clicks:[],routes:[]}
  
  const addClick = (click)=>{ sharedState.clicks.push(click)} 	
  const changeRoute = (route)=>{ sharedState.routes.push(route) }

  
  
  const contextProps = {changeRoute, addClick, sharedState}

  return (
    <AppContext.Provider value={contextProps}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
import * as React from "react";
import { Route } from 'react-router-dom';

const DefaultRoute = (props) => {
    const { component: ChildrenDefaultComponent , ...otherProps } = props;
    return (  
    <Route
    exact 
    {...otherProps}
    render=((routeProps) => <ChildrenDefaultComponent {...routeProps} />)
    >
    );
}
export default React.memo(DefaultRoute);
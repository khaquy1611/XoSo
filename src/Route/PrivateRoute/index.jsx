import React from 'react'
import PropTypes from 'prop-types'
import { Route , Redirect } from 'react-router-dom';
function PrivateRoute(props) {
  const { component: ChildrenDefaultComponent , ...remainProps } = props;
  return (
    <>
        <Route
        exact 
        {...remainProps}
        }
        />
    </>
  )
}
 PrivateRoute.propTypes = {}

export default PrivateRoute

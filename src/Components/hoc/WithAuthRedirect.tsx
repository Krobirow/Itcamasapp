import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";

const mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth
});

export type WithAuthRedirectPropsTypes = {
  isAuth: boolean
}

export const withAuthRedirect = (Component: React.FC<WithAuthRedirectPropsTypes>) => {
  class RedirectComponent extends PureComponent<WithAuthRedirectPropsTypes> {
    render() {
      if (!this.props.isAuth) return <Redirect to={"/login"} />;
      return <Component {...this.props} />
    }
  }

  const ConnectedRedirectComponent =
    connect<WithAuthRedirectPropsTypes, Record<string, never>, Record<string, never>, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedRedirectComponent;
}
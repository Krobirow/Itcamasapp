import React, { ComponentType, FC } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";

const mapStateToPropsForRedirect = (state: AppStateType) => ({ isAuth: state.auth.isAuth } as WithAuthRedirectPropsTypes);

export function withAuthRedirect<WCP extends object> (WrappedComponent: ComponentType<WCP>) {

  const RedirectComponent: FC<WithAuthRedirectPropsTypes> = (props) => {
    const { isAuth, ...restProps } = props;
    if (!isAuth) return <Redirect to={"/login"} />;
    return <WrappedComponent {...restProps as WCP} />
  }

  const ConnectedRedirectComponent =
    connect<WithAuthRedirectPropsTypes, Record<string, never>, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedRedirectComponent;
}

type WithAuthRedirectPropsTypes = { isAuth: boolean }
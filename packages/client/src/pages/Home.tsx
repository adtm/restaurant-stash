import * as React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 1fr;
`;

const Login = styled.div`
  grid-column: 2;
  grid-row: 2 / span 3;
`;

const Map = styled.div`
  background: #32bff2;
  grid-row: 1 / span 5;
  grid-column: 4 / span 6;
`;

import { Header } from "./home/Header";
import { Input } from "./home/Input";

const initialState = {
  password: "",
  username: "",
};
type State = Readonly<typeof initialState>;

export default class Home extends React.Component<object, State> {
  public readonly state: State = initialState;

  public render() {
    const { username, password } = this.state;
    return (
      <Layout>
        <Login>
          <Header
            title="Stash"
            description="Forget all the restaurants lists and save everything in one place."
          />
          <Input
            value={username}
            title="username"
            onChange={this.onUsernameChange}
            type="text"
          />
          <Input
            value={password}
            title="password"
            onChange={this.onPasswordChange}
            type="password"
          />
        </Login>
        <Map />
      </Layout>
    );
  }

  private onUsernameChange = (event: { target: HTMLInputElement }) =>
    this.setState({ username: event.target.value });

  private onPasswordChange = (event: { target: HTMLInputElement }) =>
    this.setState({ password: event.target.value });
}

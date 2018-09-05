import * as React from "react";

import { Button, Layout, Login, Map } from "./Home.styled";
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
          <Button>Sign In</Button>
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

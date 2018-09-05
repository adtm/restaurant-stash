import * as React from "react";
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
      <div style={{ padding: 180 }}>
        <section test-id="header">
          <h1>Stash</h1>
          <p>
            Forget all the restaurants lists and save everything in one place.
          </p>
        </section>
        <section>
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
        </section>
      </div>
    );
  }

  private onUsernameChange = (event: { target: HTMLInputElement }) =>
    this.setState({ username: event.target.value });

  private onPasswordChange = (event: { target: HTMLInputElement }) =>
    this.setState({ password: event.target.value });
}

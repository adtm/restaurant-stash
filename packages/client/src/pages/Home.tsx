import * as React from "react";

interface IState {
  username: string;
  password: string;
}

export default class Home extends React.Component<{}, IState> {
  public state = { username: "", password: "" };
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
          <input
            value={username}
            onChange={this.onUsernameChange}
            type="text"
          />
          <input
            value={password}
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

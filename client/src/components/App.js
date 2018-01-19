import React, { Component } from "react";
import { connect } from "react-redux";
import { strings } from "../constants";
import * as actions from "../actions";

export class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: actions.GET_ALL_TEAMS });
  }

  render() {
    const { teams } = this.props;
    return (
      <div>
        <h1 className="main-title display-1">{strings.eventName}</h1>
        {teams.map(team => (
          <p className="lead" key={team.id}>
            {team.teamName}
          </p>
        ))}
      </div>
    );
  }
}

export default connect(state => ({ teams: state.teams }), null)(App);

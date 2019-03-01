// index.jsx
import React from "react";

const C1 = () => {
  return <div>This is Component 1</div>;
};
export default class extends React.Component {
  constructor() {
    super();

    // this.server = process.env.REACT_APP_API_URL || "";
    // this.socket = io.connect(this.server);

    this.state = {
      user: '',
      users: [],
      online: 0
    };

    // this.fetchUsers = this.fetchUsers.bind(this);
    // this.handleUserAdded = this.handleUserAdded.bind(this);
    // this.handleUserUpdated = this.handleUserUpdated.bind(this);
    // this.handleUserDeleted = this.handleUserDeleted.bind(this);
  }

  async componentDidMount() {
    // console.log("This is componentDidMount");
    /*
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => console.log(json));
    */
   var user = await fetch("/users").then(resp => resp.json());
   this.setState({ user })
  }

  static async getInitialProps() {
    var json = await fetch("/time").then(resp => resp.json());
    return { time: json.time };
  }

  render() {
    console.log(this.state.user)
    return (
      <div>
        Here comes JSX !<p>Current time is: {this.props.time}</p>
        <C1 />
      </div>
    );
  }
}
//

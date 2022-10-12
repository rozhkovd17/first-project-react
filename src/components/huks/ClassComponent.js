import React from "react";

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Начальное состояние",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(props, state) {
    console.log("shouldComponentUpdate");
    return this.state.name !== state.name;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  onClick = () => {
    this.setState({
      name: "Новое",
    });
  };

  render() {
    console.log("render");
    return (
      <>
        <h1 onClick={this.onClick}>{this.state.name}</h1>
        <h1>{this.props.title}</h1>
      </>
    );
  }
}

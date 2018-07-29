import {h, Component} from 'preact';

export default class AppendChild extends Component {
  constructor() {
    super();

    this.state = {
      id: 'x' + Math.random().toString(36).substring(2, 15),
    };
  }
  componentDidMount() {
    if (this.props.child) {
      if (this.props.beforeAppend) this.props.beforeAppend();

      document.querySelector('#' + this.state.id).appendChild(this.props.child);

      if (this.props.afterAppend) this.props.afterAppend();
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.props.child) {
      document.querySelector('#' + this.state.id).innerHTML = '';

      if (this.props.beforeAppend) this.props.beforeAppend();

      document.querySelector('#' + this.state.id).appendChild(this.props.child);

      if (this.props.afterAppend) this.props.afterAppend();
    }
  }

  render() {
    return <div id={this.state.id} />;
  }
}

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('preact')) :
	typeof define === 'function' && define.amd ? define(['preact'], factory) :
	(global.AppendChild = factory(global.preact));
}(this, (function (preact) { 'use strict';

var AppendChild = (function (Component$$1) {
  function AppendChild() {
    Component$$1.call(this);

    this.state = {
      id: 'x' + Math.random().toString(36).substring(2, 15),
    };
  }

  if ( Component$$1 ) AppendChild.__proto__ = Component$$1;
  AppendChild.prototype = Object.create( Component$$1 && Component$$1.prototype );
  AppendChild.prototype.constructor = AppendChild;
  AppendChild.prototype.componentDidMount = function componentDidMount () {
    if (this.props.child) {
      if (this.props.beforeAppend) { this.props.beforeAppend(); }

      document.querySelector('#' + this.state.id).appendChild(this.props.child);

      if (this.props.afterAppend) { this.props.afterAppend(); }
    }
  };

  AppendChild.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps, nextState) {
    if (this.props.child) {
      document.querySelector('#' + this.state.id).innerHTML = '';

      if (this.props.beforeAppend) { this.props.beforeAppend(); }

      document.querySelector('#' + this.state.id).appendChild(this.props.child);

      if (this.props.afterAppend) { this.props.afterAppend(); }
    }
  };

  AppendChild.prototype.render = function render () {
    return preact.h( 'div', { id: this.state.id });
  };

  return AppendChild;
}(preact.Component));

return AppendChild;

})));

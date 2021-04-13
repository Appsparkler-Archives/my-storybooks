import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

class WaveClock extends React.Component {
  constructor(man) {
    super(man);
    this.state = {
      date: {},
    };
  }
  getInitialState() {
    return this.getDate();
  }
  getDate() {
    const newdate = new Date();
    const date = {};

    date.hours = newdate.getHours();
    date.minutes = newdate.getMinutes();
    date.seconds = newdate.getSeconds();

    return date;
  }
  updateDate() {
    this.setState(this.getDate());
  }
  componentDidMount() {
    const that = this;
    setInterval(function () {
      that.updateDate();
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <Marker type="hours" time={this.state.hours} />
        <Marker type="minutes" time={this.state.minutes} />
        <Marker type="seconds" time={this.state.seconds} />
        <div className="text-overlay">
          <Timer type="hours" time={this.state.hours} />
          <Timer type="minutes" time={this.state.minutes} />
          <Timer type="seconds" time={this.state.seconds} />
        </div>
      </div>
    );
  }
}

class Marker extends React.Component {
  constructor(man) {
    super(man);
  }
  render() {
    let measurement = 24;
    switch (this.props.type) {
      case "hours":
        measurement = 24;
        break;
      case "minutes":
        measurement = 60;
        break;
      case "seconds":
        measurement = 60;
        break;
    }

    const offset = (this.props.time / measurement) * 100 + "%";
    const opacity = ((this.props.time / measurement) * 100) / 100;

    const columnClasses = "Column Column--" + this.props.type;
    const typeClasses = "Marker Marker--" + this.props.type;
    return (
      <div className={columnClasses}>
        <div
          className={typeClasses}
          style={{ height: offset, opacity: opacity }}
        ></div>
      </div>
    );
  }
}

class Timer extends React.Component {
  constructor(man) {
    super(man);
  }
  render() {
    let time;
    if (this.props.time < 10) {
      time = "0" + this.props.time;
    } else {
      time = this.props.time;
    }
    return <div className={this.props.type}>{time}</div>;
  }
}

Marker.propTypes = {
  time: PropTypes.number,
  type: PropTypes.string,
};

Timer.propTypes = {
  time: PropTypes.number,
  type: PropTypes.string,
};

export default WaveClock;

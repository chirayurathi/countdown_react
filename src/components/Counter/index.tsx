import React from "react";
import Style from "./Counter.module.css";
import UnitCount from "./UnitCount";

class Counter extends React.Component<
  { reset: boolean; toggleReset:() => void },
  { days: number; hours: number; mins: number; secs: number }
> {
  state = {
    days: 2,
    hours: 2,
    mins: 2,
    secs: 2,
  };
  componentDidMount() {
    setInterval(() => this.getTimeDifference(), 1000);
  }

  getTimeDifference() {
    let secs = this.state.secs - 1;
    let mins = this.state.mins;
    let hours = this.state.hours;
    let days = this.state.days;
    if (secs < 0) {
      secs = 59;
      mins = mins - 1;
      if (mins < 0) {
        mins = 59;
        hours = hours - 1;
        if (hours < 0) {
          hours = 23;
          days = Math.max(days - 1, 0);
        }
      }
    }

    this.setState({ days, hours, mins, secs });
  }

  componentWillUnmount(){
    clearInterval();
  }
  render() {
      if(this.props.reset){
          this.setState({
            days: 2,
            hours: 2,
            mins: 2,
            secs: 2,
        })
        this.props.toggleReset();
      }
    return (
      <div className={Style.Counter}>
        {Object.keys(this.state).map((unit, index) => {
          type ObjectKey = keyof typeof this.state;
          const attr = unit as ObjectKey;
          return <UnitCount type={unit} key={index} count={this.state[attr]} />;
        })}
      </div>
    );
  }
}

export default Counter;

import { ChangeEvent, Component } from 'react';

type CounterProps = {
  incident: string;
}

type CounterState = {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
  /* he defines CounterState twice
    it was for older version type hinting, its not needed
    you can use use state = {}; but he likes keeping it in
    personal preference
  */
  state: CounterState = {
    count: 0
  };

  increment = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  }

  decrement = () => {
    this.setState(({ count }) => ({
      count: count - 1
    }));
  }

  reset = () => {
    this.setState({count: 0});
  }

  // just passing in (event) as the param
  // typescript  gets an implicit 'any' it only
  // knows you just made a function on a class property
  // so we have to tell it more about the event that we
  // will have on the form submit
  changeCount = (event: ChangeEvent<HTMLInputElement>) => {
    /* the value in the dom from the input is a string
    we said on line 8 its a number, so we need to coerce
    here which we can do by adding the + sign before
    event.target.value */
    this.setState({count: +event.target.value});
  }

  render() {
    const { incident } = this.props;
    const { count } = this.state;
    return (
      <main className="Counter">
        <h1>Days Since Last {incident}</h1>
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.decrement}>Decrement</button>
        </section>
        <section className="controls">
          <form onSubmit={() => {}}>
            <label htmlFor="set-to">Set Count</label>
            <input
              id="set-to"
              type="number"
              value={count}
              onChange={this.changeCount}
            />
            <input type="submit" />
          </form>
        </section>
      </main>
    );
  }
}

class Application extends Component {
  render() {
    return <Counter incident={'coffee spill'}/>;
  }
}

export default Application;

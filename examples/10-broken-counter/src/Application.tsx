import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  // fix is add curly braces
  /*
    useEffect is expecting a function signature that returns
    undefined. setTimeout returns a number.
    because we are using an implicit return here w/out braces
    we accidentally passed number to useEffect. typescripts built
    in react types from the typescript package caught this error.
    curly braces protects us from passing in code we didnt intend
  */
  useEffect(
    () => {
      setTimeout(() => setCount(count + 1), 1000)
    }, [count]
  );

  return <main className="count">{count}</main>;
};

const Application = () => <Counter />;

export default Application;

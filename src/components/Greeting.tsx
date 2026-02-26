import React from "react";

//  Create a type/interface for the props
// In TypeScript we must define the shape of props
interface GreetingProps {
  name: string; // 'name' must be a string
}

//  Add the props type to the component
// React.FC<GreetingProps> tells TypeScript this component receives GreetingProps
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;

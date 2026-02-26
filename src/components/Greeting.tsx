import React from "react";

// 1 Create a type/interface for the props
// In TypeScript we must define the shape of props
interface GreetingProps {
  name: string; // 'name' must be a string
}

//2  Add the props type to the component
// React.FC<GreetingProps> tells TypeScript this component receives GreetingProps
const Greeting: React.FC<GreetingProps> = ({ name }) => {
   // 3 JSX remains the same
  return <div>Hello, {name}!</div>;
};

export default Greeting;

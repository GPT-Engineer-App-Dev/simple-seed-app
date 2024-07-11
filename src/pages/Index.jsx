import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl mb-4">Welcome to Our App</h1>
      <p>This is the main entry point of the application.</p>
      <Link to="/about" className="text-blue-500">About Us</Link>
      <br />
      <Link to="/contact" className="text-blue-500">Contact Us</Link>
    </div>
  );
};

export default Index;
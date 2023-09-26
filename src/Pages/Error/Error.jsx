import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-center relative">
        <h1 className="absolute top-20 text-8xl font-semibold">404</h1>
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt=""
        />
        <h3 className="text-center absolute bottom-28 text-3xl font-semibold">Look like you're lost</h3>
        <p className="absolute bottom-20">the page you are looking for not available!</p>
        <Link to="/" className="absolute bottom-7"><button className="text-white bg-green-400 rounded-md py-2 px-4 hover:text-lg duration-200">Go to Home</button></Link>
      </div>
      
    </div>
  );
};

export default Error;
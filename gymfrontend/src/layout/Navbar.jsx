import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">IGYM</h1>
      <div className="space-x-6">
        <Link to="/" className="text-orange-500 font-medium">Home</Link>
        <Link to="/about" className="text-gray-700">About</Link>
        <Link to="/nutrition" className="text-gray-700">Nutrition</Link>
        <Link to="/schedule" className="text-gray-700">Schedule</Link>
        <Link to="/equipment" className="text-gray-700">Equipment</Link>
      </div>
      <div className="space-x-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Sign up</button>
        <button className="bg-black text-white px-4 py-2 rounded">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;

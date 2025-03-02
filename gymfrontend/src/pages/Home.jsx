import gymImage from "../assets/gym-image.jpg"; 

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center w-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold mb-4">Your Fitness. <br />Your Goals. <br />Your Time.</h1>
          <p className="text-gray-300 mb-6">
            With expert guidance, state-of-the-art equipment, and a supportive community, 
            we’re here to help you achieve your fitness goals every step of the way.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded text-lg">Get Started →</button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={gymImage} alt="Gym" className="rounded-xl border-4 border-blue-500 w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;

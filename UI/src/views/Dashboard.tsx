import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">
        Welcome to the Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/150"
            alt="Sample"
            className="mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2 text-gray-800">Card 1</h2>
          <p className="text-gray-700">This is a sample card with an image.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/150"
            alt="Sample"
            className="mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2 text-gray-800">Card 2</h2>
          <p className="text-gray-700">
            This is another sample card with an image.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/150"
            alt="Sample"
            className="mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2 text-gray-800">Card 3</h2>
          <p className="text-gray-700">
            This is yet another sample card with an image.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/150"
            alt="Sample"
            className="mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2 text-gray-800">Card 4</h2>
          <p className="text-gray-700">
            This is an additional sample card with an image.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/150"
            alt="Sample"
            className="mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2 text-gray-800">Card 5</h2>
          <p className="text-gray-700">
            This is another additional sample card with an image.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/150"
            alt="Sample"
            className="mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2 text-gray-800">Card 6</h2>
          <p className="text-gray-700">
            This is yet another additional sample card with an image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

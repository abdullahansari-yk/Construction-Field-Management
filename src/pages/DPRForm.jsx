import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const DPRForm = () => {
  const navigate = useNavigate()
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [description, setDescription] = useState("");
  const [workers, setWorkers] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !weather || !description || !workers) {
      setError("Please fill all fields");
      return; 
    }

    setError("");
    setSuccess(true);

    setTimeout(() => {
      navigate("/projects");
    }, 1500);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    const updatedImages = [...images, ...files];

    if (updatedImages.length > 3) {
      setError("You can upload maximum 3 images");
      return;
    }

    setError("");
    setImages(updatedImages);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-8 space-y-6"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Daily Progress Report
        </h1>

        {/* Date */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded-lg p-2  focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">
            Weather
          </label>
          <select
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
            className="border rounded-lg p-2  focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Weather</option>
            <option>Sunny</option>
            <option>Cloudy</option>
            <option>Rainy</option>
          </select>
        </div>


        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">
            Work Description
          </label>
          <textarea
            rows="4"
            placeholder="Describe the work completed today..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">
            Worker Count
          </label>
          <input
            type="number"
            placeholder="Enter number of workers"
            value={workers}
            onChange={(e) => setWorkers(e.target.value)}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>


        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">
            Upload Photos (max 3)
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="border rounded-lg p-2"
          />
        </div>


        {images.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {images.map((img, index) => (
              <img
                key={index}
                src={URL.createObjectURL(img)}
                alt="preview"
                className="w-20 h-20 object-cover rounded-lg border"
              />
            ))}
          </div>
        )}


        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            ✅ DPR submitted successfully! Redirecting to projects...
          </div>
        )}


        <button
          type="submit"
          hidden={success && true}
          className="w-full bg-orange-500 text-white py-2 rounded-lg cursor-pointer hover:bg-orange-600 transition"
        >
          Submit
        </button>

      </form>

    </div>
  )
}

export default DPRForm
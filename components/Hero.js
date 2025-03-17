// components/Hero.js
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sample slider images (replace with your actual image paths)
const sliderImages = [
  '/images/data-visualization.jpg',
  '/images/software-testing.jpg',
  '/images/ai-ml.jpg',
];

// Sample course options (you can expand this)
const courseOptions = [
  'Manual Software Testing',
  'Data Science',
  'AI & ML',
];

// Sample language options
const languageOptions = ['English', 'Hindi', 'Other'];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: courseOptions[0],
    language: languageOptions[0],
  });

  // Slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  // Form handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-8">
        {/* Left Column: Heading, Text, and Slider */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Shaping Minds, <span className="text-[#ff8c00]">For Limitless Opportunities</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
            Cinute Digital Pvt. Ltd. is a leading educational institution
            specializing in Software Testing, Data Science, AI, and Machine
            Learning. Gain hands-on skills and become job-ready with expert
            guidance.
          </p>

          {/* Image Slider */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={sliderImages[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
                priority={currentSlide === 0} // Prioritize the first image
              />
            </div>
            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
              aria-label="Previous Slide"
            >
              &larr;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
              aria-label="Next Slide"
            >
              &rarr;
            </button>
            {/* Slider Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? 'bg-[#ff8c00]' : 'bg-gray-400'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-[#FFF5E9] p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Book a Live Demo, FREE!
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#ff8c00] focus:border-[#ff8c00]"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#ff8c00] focus:border-[#ff8c00]"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="flex items-center mt-1">
                  <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 text-gray-500 text-sm">
                    IN(+91)
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-r-md focus:ring-[#ff8c00] focus:border-[#ff8c00]"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                  Select Course
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#ff8c00] focus:border-[#ff8c00]"
                >
                  {courseOptions.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              {/* Language Selection */}
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                  Select Preferred Language
                </label>
                <select
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#ff8c00] focus:border-[#ff8c00]"
                >
                  {languageOptions.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#ff8c00] text-white px-6 py-3 rounded-md font-medium hover:bg-[#e07b00] transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
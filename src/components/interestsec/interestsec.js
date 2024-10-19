import React, { useState, useEffect, useRef } from 'react';

const InterestCard = ({ title, imageUrl, description, visible }) => (
  <div
    className={`bg-white flex flex-col items-center p-4 py-8 shadow-md transition-opacity duration-500 ease-out transform ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
  >
    <img src={imageUrl} alt={title} className="min-h-32 object-cover mb-1" />
    <h3 className="text-xl font-medium mb-3">{title}</h3>
    <p className="text-sm text-gray-600 text-center">{description}</p>
  </div>
);

const CoreInterestsSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const interests = [
    {
      title: "Affordable Housing",
      imageUrl: "/affordablehousing.jpg",
      description: "Describe the service and how customers or clients can benefit from it."
    },
    {
      title: "Food Security",
      imageUrl: "/foodSec.jpg",
      description: "Describe the service and how customers or clients can benefit from it."
    },
    {
      title: "Waste Management",
      imageUrl: "/wasteManage.jpg",
      description: "Describe the service and how customers or clients can benefit from it."
    },
    {
      title: "Renewable Energy",
      imageUrl: "/renewEnergy.jpg",
      description: "Describe the service and how customers or clients can benefit from it."
    },
    {
      title: "Inclusive Fintech",
      imageUrl: "/inclFintech.jpg",
      description: "Microlending to Entrepreneurs"
    },
    {
      title: "Education",
      imageUrl: "/education.jpg",
      description: "Describe the service and how customers or clients can benefit from it."
    },
    {
      title: "Health Clinics",
      imageUrl: "/commHealth.jpg",
      description: "Describe the service and how customers or clients can benefit from it."
    },
    {
      title: "Sustainable Fashion",
      imageUrl: "/sustainable.jpg",
      description: "Describe the service and how customers or clients can benefit from it."
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Trigger animation when the section comes into view
          const interval = setInterval(() => {
            setVisibleCards((prev) => {
              const next = prev.length;
              if (next < interests.length) {
                return [...prev, next];
              } else {
                clearInterval(interval);
                return prev;
              }
            });
          }, 200); // Delay between each card animation (in milliseconds)

          observer.disconnect(); // Stop observing once animation has triggered
        }
      },
      { threshold: 0.3 } // 30% of the section should be visible before triggering
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [interests.length]);

  return (
    <div ref={sectionRef} className="bg-gray-100">
      <div className="container mx-auto px-10 py-12 w-11/12">
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12">OUR CORE INTERESTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <InterestCard key={index} visible={visibleCards.includes(index)} {...interest} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreInterestsSection;

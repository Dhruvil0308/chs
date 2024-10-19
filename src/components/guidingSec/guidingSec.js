import React from 'react';
import Image from 'next/image';

const ValueCard = ({ imageUrl, title }) => (
  
    <div className="w-full aspect-[4/3] mb-4 flex flex-col gap-8 items-center ">
        <Image src={imageUrl} alt={title} width={500} height={500} className="w-9/12 h-5/6 object-cover rounded-[48px]" />
        <h3 className="text-xl font-medium uppercase">{title}</h3>
    </div>
  
);

const GuidingValuesSection = () => {
  const values = [
    { title: "INTEGIRTY", imageUrl: "/integrity.jpg" },
    { title: "SUSTAINABILITY", imageUrl: "/sustainability.jpg" },
    { title: "COMPASSION", imageUrl: "/compassion.jpg" },
    { title: "INNOVATION", imageUrl: "/innovation.jpg" }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center py-4 px-12 bg-gradient-to-r from-[#a5c0f1] to-[#E8F0FC]">
      <div className="container mx-auto flex flex-col gap-24">
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-gray-800">Guiding Values</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuidingValuesSection;
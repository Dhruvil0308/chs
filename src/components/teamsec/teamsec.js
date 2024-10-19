import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Bob Brown',
    role: 'Creative Leader',
    description: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum',
    image: "/profimg.jpg"
  },
  {
    name: 'Mary Smith',
    role: 'Sales Manager',
    description: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum',
    image: "/profimg.jpg"
  },
  {
    name: 'Jonh Rich',
    role: 'Manager',
    description: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum',
    image: "/profimg.jpg"
  },
  {
    name: 'Nat Reynolds',
    role: 'Chief Accountant',
    description: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum',
    image: "/profimg.jpg"
  }
];

const TeamMember = ({ name, role, description, image }) => (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start">
      <div className="w-24 h-24 flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
        <Image src={image} alt={name} className="w-full h-full rounded-full object-cover" width={100} height={100} />
      </div>
      <div className="text-center sm:text-left">
        <h3 className="text-xl font-semibold text-purple-800 mb-1">{name}</h3>
        <p className="text-purple-600 mb-2 text-sm">{role}</p>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="flex justify-center sm:justify-start space-x-4">
          <Facebook className="text-purple-600 hover:text-purple-800" size={20} />
          <Twitter className="text-purple-600 hover:text-purple-800" size={20} />
          <Instagram className="text-purple-600 hover:text-purple-800" size={20} />
        </div>
      </div>
    </div>
  );
  
  const MeetTheTeam = () => (
    <div className="bg-purple-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-purple-800 text-center mb-8">Meet The Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
  

export default MeetTheTeam;
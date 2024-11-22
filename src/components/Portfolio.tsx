import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: "Cafe Connect Campaign",
      description: "City-wide coffee shop campaign reaching 50,000+ customers",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Tea Time Advertising",
      description: "Local tea shop network campaign with 80% engagement rate",
      image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "QR Success Story",
      description: "Digital integration campaign with 30% scan rate",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600">Successful campaigns that delivered results</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
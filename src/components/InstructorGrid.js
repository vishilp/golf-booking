// components/InstructorGrid.js
import React from "react";
import InstructorCard from "./InstructorCard";

function InstructorGrid({ instructors, onBookInstructor }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Featured Instructors
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor.id}
            instructor={instructor}
            onBook={() => onBookInstructor(instructor.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default InstructorGrid;

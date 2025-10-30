// components/InstructorSelection.js
import React from "react";

function InstructorSelection({
  instructors,
  selectedInstructor,
  onSelectInstructor,
  isFiltered,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        2. Choose Your Instructor {isFiltered && "(Filtered)"}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            onClick={() => onSelectInstructor(instructor)}
            className={`cursor-pointer rounded-xl overflow-hidden border-4 transition-all ${
              selectedInstructor?.id === instructor.id
                ? "border-emerald-500 shadow-xl scale-105"
                : "border-gray-200 hover:border-emerald-300 shadow-lg"
            }`}
          >
            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-6 text-center">
              <div className="text-5xl mb-2">{instructor.image}</div>
              <div className="text-white font-bold text-lg">
                {instructor.name}
              </div>
            </div>

            <div className="p-4 bg-white">
              <div className="text-sm text-gray-600 mb-2">
                {instructor.specialty}
              </div>
              <div className="text-yellow-500 font-bold mb-2">
                ★ {instructor.rating}
              </div>
              <div className="text-2xl font-bold text-emerald-600">
                ${instructor.price}
                <span className="text-sm text-gray-500 font-normal">/hr</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstructorSelection;

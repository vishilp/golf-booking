import React from "react";

function InstructorSelection({
  instructors,
  selectedInstructor,
  onInstructorSelect,
}) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 lg:col-span-2">
      <h2 className="text-2xl font-bold text-white mb-6">
        Select Your Instructor
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {instructors.map((instructor) => (
          <button
            key={instructor.id}
            onClick={() => onInstructorSelect(instructor)}
            className={`
              p-4 rounded-xl transition-all text-left
              ${
                selectedInstructor?.id === instructor.id
                  ? "bg-purple-600 scale-105 shadow-lg ring-2 ring-purple-400"
                  : "bg-white/5 hover:bg-white/10"
              }
            `}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-white">
                {instructor.name}
              </h3>
              <span className="text-yellow-400 text-sm">
                ★ {instructor.rating}
              </span>
            </div>
            <p className="text-purple-200 text-sm mb-2">
              {instructor.specialty}
            </p>
            <p className="text-white font-bold text-lg">
              ${instructor.price}/session
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default InstructorSelection;

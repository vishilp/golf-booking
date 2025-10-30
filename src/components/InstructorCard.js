// components/InstructorCard.js
import React from "react";

function InstructorCard({ instructor, onBook }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-emerald-400">
      <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-8 text-center">
        <div className="text-6xl mb-2">{instructor.image}</div>
        <div className="text-white font-bold text-xl">{instructor.name}</div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-600 font-medium">
            {instructor.specialty}
          </span>
          <span className="text-yellow-500 font-bold">
            ★ {instructor.rating}
          </span>
        </div>

        <div className="text-3xl font-bold text-emerald-600 mb-4">
          ${instructor.price}
          <span className="text-lg text-gray-500 font-normal">/hour</span>
        </div>

        <button
          onClick={onBook}
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all font-semibold shadow-md"
        >
          Book Lesson
        </button>
      </div>
    </div>
  );
}

export default InstructorCard;

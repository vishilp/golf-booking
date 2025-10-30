// components/SearchBar.js
import React from "react";
import {
  Calendar,
  Clock,
  User,
  Search,
  Filter,
  ChevronDown,
} from "lucide-react";

function SearchBar({
  searchDate,
  searchTime,
  selectedInstructorIds,
  showFilters,
  onDateChange,
  onTimeChange,
  onToggleFilters,
  onInstructorToggle,
  onSearch,
  onClearFilters,
  instructors,
  timeSlots,
}) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div className="relative">
          <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="date"
            value={searchDate}
            onChange={(e) => onDateChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-800"
            placeholder="Select date"
          />
        </div>

        <div className="relative">
          <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
          <select
            value={searchTime}
            onChange={(e) => onTimeChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-800 appearance-none"
          >
            <option value="">Select time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-3 text-gray-400 pointer-events-none"
            size={20}
          />
        </div>

        <button
          onClick={onToggleFilters}
          className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-semibold"
        >
          <Filter size={20} />
          Filters{" "}
          {selectedInstructorIds.length > 0 &&
            `(${selectedInstructorIds.length})`}
        </button>
      </div>

      {showFilters && (
        <div className="mb-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <User size={20} />
            Select Instructors
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {instructors.map((instructor) => (
              <label
                key={instructor.id}
                className="flex items-center gap-3 p-3 bg-white rounded-lg border-2 border-gray-200 hover:border-emerald-400 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedInstructorIds.includes(instructor.id)}
                  onChange={() => onInstructorToggle(instructor.id)}
                  className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">
                    {instructor.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {instructor.specialty}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={onSearch}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all font-semibold text-lg shadow-lg"
        >
          <Search size={24} />
          Search Lessons
        </button>

        {(searchDate || searchTime || selectedInstructorIds.length > 0) && (
          <button
            onClick={onClearFilters}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;

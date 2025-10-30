// components/DateTimeSelection.js
import React from "react";

function DateTimeSelection({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
  timeSlots,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        1. Choose Date & Time
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Select Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => onDateChange(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-800"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Select Time
          </label>
          <select
            value={selectedTime}
            onChange={(e) => onTimeChange(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-800"
          >
            <option value="">Choose a time slot</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default DateTimeSelection;

import React from "react";
import { Clock, Calendar } from "lucide-react";

function TimeSlots({ selectedDate, selectedTime, onTimeSelect, timeSlots }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Clock className="w-6 h-6" />
        Select Time
      </h2>

      {!selectedDate ? (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-purple-300 mx-auto mb-4 opacity-50" />
          <p className="text-purple-200 text-lg">Please select a date first</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => onTimeSelect(time)}
              className={`
                py-3 px-4 rounded-lg font-semibold transition-all
                ${
                  selectedTime === time
                    ? "bg-purple-600 scale-105 shadow-lg text-white"
                    : "bg-white/5 hover:bg-white/10 text-white"
                }
              `}
            >
              {time}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default TimeSlots;

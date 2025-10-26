import React from "react";
import { Users } from "lucide-react";

function BookingSummary({
  selectedDate,
  selectedTime,
  partySize,
  selectedInstructor,
  onPartySizeChange,
  onBookingConfirm,
}) {
  const canProceed = selectedDate && selectedTime && selectedInstructor;

  return (
    <>
      {/* Party Size Control */}
      <div className="bg-white/5 rounded-xl p-4">
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <Users className="w-5 h-5" />
          Number of Students
        </h3>
        <div className="flex items-center gap-4">
          <button
            onClick={() => onPartySizeChange(Math.max(1, partySize - 1))}
            className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-bold transition-colors"
          >
            -
          </button>
          <span className="text-2xl font-bold text-white w-12 text-center">
            {partySize}
          </span>
          <button
            onClick={() => onPartySizeChange(Math.min(20, partySize + 1))}
            className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-bold transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">Booking Summary</h3>
            <div className="space-y-1 text-purple-200">
              <p>
                Instructor:{" "}
                {selectedInstructor ? selectedInstructor.name : "Not selected"}
              </p>
              <p>
                Date:{" "}
                {selectedDate
                  ? selectedDate.toLocaleDateString()
                  : "Not selected"}
              </p>
              <p>Time: {selectedTime || "Not selected"}</p>
              <p>
                Students: {partySize} {partySize === 1 ? "person" : "people"}
              </p>
              {selectedInstructor && (
                <p className="text-xl font-bold text-white mt-2">
                  Total: ${selectedInstructor.price * partySize}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={onBookingConfirm}
            disabled={!canProceed}
            className={`
              px-8 py-4 rounded-xl font-bold text-lg transition-all transform
              ${
                canProceed
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:scale-105"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </>
  );
}

export default BookingSummary;

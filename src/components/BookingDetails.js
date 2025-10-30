// components/BookingDetails.js
import React from "react";

function BookingDetails({ selectedInstructor, partySize, onPartySizeChange, canBook, onBooking }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">3. Final Details</h2>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Number of Students</label>
        <div className="flex gap-3">
          {[1, 2, 3, 4].map(size => (
            <button
              key={size}
              onClick={() => onPartySizeChange(size)}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                partySize === size
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {selectedInstructor && (
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700 font-semibold">Lesson Price:</span>
            <span className="text-2xl font-bold text-emerald-600">
              ${selectedInstructor.price * partySize}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            ${selectedInstructor.price} × {partySize} student{partySize > 1 ? 's' : ''}
          </div>
        </div>
      )}

      <button
        onClick={onBooking}
        disabled={!canBook}
        className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
          canBook
            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 shadow-lg'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {canBook ? 'Confirm Booking' : 'Please complete all selections'}
      </button>
    </div>
  );
}

export default BookingDetails;
```

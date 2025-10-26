import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function BookingSystem() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [partySize, setPartySize] = useState(2);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const timeSlots = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const handleDateClick = (day) => {
    const selected = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    setSelectedDate(selected);
    setSelectedTime(null);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime && partySize) {
      alert(
        `Booking confirmed!\nDate: ${selectedDate.toLocaleDateString()}\nTime: ${selectedTime}\nParty Size: ${partySize}`
      );
    }
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  const isPast = (day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    return checkDate < today;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Book Your Experience
          </h1>
          <p className="text-xl text-purple-200">
            Select your preferred date, time, and party size
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                Select Date
              </h2>
            </div>

            {/* Calendar Header */}
            <div className="bg-white/5 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={goToPreviousMonth}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <h3 className="text-xl font-semibold text-white">
                  {monthNames[currentMonth.getMonth()]}{" "}
                  {currentMonth.getFullYear()}
                </h3>
                <button
                  onClick={goToNextMonth}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-purple-300 font-semibold text-sm py-2"
                    >
                      {day}
                    </div>
                  )
                )}

                {[...Array(startingDayOfWeek)].map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}

                {[...Array(daysInMonth)].map((_, i) => {
                  const day = i + 1;
                  const isSelected =
                    selectedDate &&
                    selectedDate.getDate() === day &&
                    selectedDate.getMonth() === currentMonth.getMonth() &&
                    selectedDate.getFullYear() === currentMonth.getFullYear();
                  const disabled = isPast(day);

                  return (
                    <button
                      key={day}
                      onClick={() => !disabled && handleDateClick(day)}
                      disabled={disabled}
                      className={`
                        aspect-square rounded-lg font-semibold transition-all
                        ${
                          disabled
                            ? "text-gray-600 cursor-not-allowed"
                            : "text-white hover:bg-purple-500/50"
                        }
                        ${
                          isSelected
                            ? "bg-purple-600 scale-105 shadow-lg"
                            : "bg-white/5"
                        }
                        ${
                          isToday(day) && !isSelected
                            ? "ring-2 ring-purple-400"
                            : ""
                        }
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Party Size */}
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Party Size
              </h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setPartySize(Math.max(1, partySize - 1))}
                  className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-bold transition-colors"
                >
                  -
                </button>
                <span className="text-2xl font-bold text-white w-12 text-center">
                  {partySize}
                </span>
                <button
                  onClick={() => setPartySize(Math.min(20, partySize + 1))}
                  className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-bold transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Time Slots Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6" />
              Select Time
            </h2>

            {!selectedDate ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-purple-300 mx-auto mb-4 opacity-50" />
                <p className="text-purple-200 text-lg">
                  Please select a date first
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
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
        </div>

        {/* Booking Summary & Button */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Booking Summary</h3>
              <div className="space-y-1 text-purple-200">
                <p>
                  Date:{" "}
                  {selectedDate
                    ? selectedDate.toLocaleDateString()
                    : "Not selected"}
                </p>
                <p>Time: {selectedTime || "Not selected"}</p>
                <p>
                  Party Size: {partySize}{" "}
                  {partySize === 1 ? "person" : "people"}
                </p>
              </div>
            </div>

            <button
              onClick={handleBooking}
              disabled={!selectedDate || !selectedTime}
              className={`
                px-8 py-4 rounded-xl font-bold text-lg transition-all transform
                ${
                  selectedDate && selectedTime
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:scale-105"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                }
              `}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSystem;

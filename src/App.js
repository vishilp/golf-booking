import React, { useState } from "react";
import Calendar from "./components/Calendar";
import TimeSlots from "./components/TimeSlots";
import InstructorSelection from "./components/InstructorSelection";
import BookingSummary from "./components/BookingSummary";
import PaymentModal from "./components/PaymentModal";
import { instructors, timeSlots } from "./data/instructors";

function BookingSystem() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [partySize, setPartySize] = useState(2);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleBookingConfirm = () => {
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    alert(
      `Payment Successful!\n\nLesson Confirmed:\nInstructor: ${
        selectedInstructor.name
      }\nDate: ${selectedDate.toLocaleDateString()}\nTime: ${selectedTime}\nStudents: ${partySize}\nTotal: $${
        selectedInstructor.price * partySize
      }`
    );
    setShowPayment(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Book Your Golf Lesson
          </h1>
          <p className="text-xl text-purple-200">
            Select your preferred date, time, and instructor
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
            currentMonth={currentMonth}
            onMonthChange={setCurrentMonth}
          />

          <TimeSlots
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onTimeSelect={setSelectedTime}
            timeSlots={timeSlots}
          />
        </div>

        <div className="mt-8">
          <InstructorSelection
            instructors={instructors}
            selectedInstructor={selectedInstructor}
            onInstructorSelect={setSelectedInstructor}
          />
        </div>

        <BookingSummary
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          partySize={partySize}
          selectedInstructor={selectedInstructor}
          onPartySizeChange={setPartySize}
          onBookingConfirm={handleBookingConfirm}
        />

        {showPayment && (
          <PaymentModal
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            partySize={partySize}
            selectedInstructor={selectedInstructor}
            onClose={() => setShowPayment(false)}
            onPaymentComplete={handlePaymentComplete}
          />
        )}
      </div>
    </div>
  );
}

export default BookingSystem;

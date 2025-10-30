// pages/BookingPage.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { instructors, timeSlots } from "../data/instructors";
import DateTimeSelection from "../components/DateTimeSelection";
import InstructorSelection from "../components/InstructorSelection";
import BookingDetails from "../components/BookingDetails";

function BookingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const preSelectedDate = queryParams.get("date") || "";
  const preSelectedTime = queryParams.get("time") || "";
  const preSelectedInstructorIds =
    queryParams.get("instructors")?.split(",").map(Number) || [];

  const [selectedDate, setSelectedDate] = useState(preSelectedDate);
  const [selectedTime, setSelectedTime] = useState(preSelectedTime);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [partySize, setPartySize] = useState(1);

  const filteredInstructors =
    preSelectedInstructorIds.length > 0
      ? instructors.filter((inst) => preSelectedInstructorIds.includes(inst.id))
      : instructors;

  const canBook = selectedDate && selectedTime && selectedInstructor;

  const handleBooking = () => {
    alert(
      `Booking Confirmed!\n\nInstructor: ${
        selectedInstructor.name
      }\nDate: ${new Date(
        selectedDate
      ).toLocaleDateString()}\nTime: ${selectedTime}\nStudents: ${partySize}\nTotal: $${
        selectedInstructor.price * partySize
      }`
    );
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-6"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Complete Your Booking
          </h1>
          <p className="text-xl text-gray-600">
            Select your date, time, and instructor
          </p>
        </div>

        <DateTimeSelection
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          onDateChange={setSelectedDate}
          onTimeChange={setSelectedTime}
          timeSlots={timeSlots}
        />

        <InstructorSelection
          instructors={filteredInstructors}
          selectedInstructor={selectedInstructor}
          onSelectInstructor={setSelectedInstructor}
          isFiltered={preSelectedInstructorIds.length > 0}
        />

        <BookingDetails
          selectedInstructor={selectedInstructor}
          partySize={partySize}
          onPartySizeChange={setPartySize}
          canBook={canBook}
          onBooking={handleBooking}
        />
      </div>
    </div>
  );
}

export default BookingPage;

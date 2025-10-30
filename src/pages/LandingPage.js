// pages/LandingPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  User,
  Search,
  Filter,
  ChevronDown,
} from "lucide-react";
import { instructors, timeSlots } from "../data/instructors";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import InstructorGrid from "../components/InstructorGrid";
import FeaturesSection from "../components/FeaturesSection";

function LandingPage() {
  const navigate = useNavigate();
  const [searchDate, setSearchDate] = useState("");
  const [searchTime, setSearchTime] = useState("");
  const [selectedInstructorIds, setSelectedInstructorIds] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const handleInstructorToggle = (instructorId) => {
    setSelectedInstructorIds((prev) =>
      prev.includes(instructorId)
        ? prev.filter((id) => id !== instructorId)
        : [...prev, instructorId]
    );
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchDate) params.set("date", searchDate);
    if (searchTime) params.set("time", searchTime);
    if (selectedInstructorIds.length > 0) {
      params.set("instructors", selectedInstructorIds.join(","));
    }

    navigate(`/booking?${params.toString()}`);
  };

  const handleClearFilters = () => {
    setSearchDate("");
    setSearchTime("");
    setSelectedInstructorIds([]);
  };

  const handleBookInstructor = (instructorId) => {
    navigate(`/booking?instructors=${instructorId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <HeroSection>
        <SearchBar
          searchDate={searchDate}
          searchTime={searchTime}
          selectedInstructorIds={selectedInstructorIds}
          showFilters={showFilters}
          onDateChange={setSearchDate}
          onTimeChange={setSearchTime}
          onToggleFilters={() => setShowFilters(!showFilters)}
          onInstructorToggle={handleInstructorToggle}
          onSearch={handleSearch}
          onClearFilters={handleClearFilters}
          instructors={instructors}
          timeSlots={timeSlots}
        />
      </HeroSection>

      <InstructorGrid
        instructors={instructors}
        onBookInstructor={handleBookInstructor}
      />

      <FeaturesSection />
    </div>
  );
}

export default LandingPage;

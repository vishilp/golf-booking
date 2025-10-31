// pages/InstructorProfilePage.js
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Star, Award, Calendar, DollarSign } from "lucide-react";
import { instructors } from "../data/instructors";

function InstructorProfilePage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const instructor = instructors.find((inst) => inst.id === parseInt(id));

  if (!instructor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Instructor Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-6"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white rounded-full p-8 shadow-xl">
                <div className="text-8xl">{instructor.image}</div>
              </div>

              <div className="text-center md:text-left text-white flex-1">
                <h1 className="text-5xl font-bold mb-3">{instructor.name}</h1>
                <p className="text-2xl text-emerald-100 mb-4">
                  {instructor.specialty}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-300">
                  <Star size={24} fill="currentColor" />
                  <span className="text-2xl font-bold">
                    {instructor.rating}
                  </span>
                  <span className="text-emerald-100 ml-2">(127 reviews)</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-xl text-center">
                <div className="text-emerald-600 font-semibold mb-2">Rate</div>
                <div className="text-4xl font-bold text-gray-800">
                  ${instructor.price}
                </div>
                <div className="text-gray-600">per hour</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12">
            {/* About Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="text-emerald-600" size={32} />
                About
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {instructor.bio}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With a passion for teaching and years of experience on the
                course, {instructor.name} has helped hundreds of students
                improve their game. Whether you're just starting out or looking
                to refine your skills, {instructor.name} provides personalized
                instruction tailored to your goals.
              </p>
            </div>

            {/* Specializations */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Specializations
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-4">
                  <div className="font-semibold text-emerald-800 mb-2">
                    Primary Focus
                  </div>
                  <div className="text-gray-700">{instructor.specialty}</div>
                </div>
                <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-4">
                  <div className="font-semibold text-teal-800 mb-2">
                    Teaching Style
                  </div>
                  <div className="text-gray-700">Patient and encouraging</div>
                </div>
                <div className="bg-cyan-50 border-2 border-cyan-200 rounded-lg p-4">
                  <div className="font-semibold text-cyan-800 mb-2">
                    Experience Level
                  </div>
                  <div className="text-gray-700">All skill levels welcome</div>
                </div>
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-4">
                  <div className="font-semibold text-emerald-800 mb-2">
                    Lesson Format
                  </div>
                  <div className="text-gray-700">
                    Individual or group sessions
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Achievements & Certifications
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-emerald-600 text-white rounded-full p-1 mt-1">
                    <Award size={16} />
                  </div>
                  <span className="text-gray-700">
                    PGA Certified Teaching Professional
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-emerald-600 text-white rounded-full p-1 mt-1">
                    <Award size={16} />
                  </div>
                  <span className="text-gray-700">
                    15+ years of teaching experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-emerald-600 text-white rounded-full p-1 mt-1">
                    <Award size={16} />
                  </div>
                  <span className="text-gray-700">
                    Specialized training in {instructor.specialty.toLowerCase()}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-emerald-600 text-white rounded-full p-1 mt-1">
                    <Award size={16} />
                  </div>
                  <span className="text-gray-700">
                    4.9+ average student rating
                  </span>
                </li>
              </ul>
            </div>

            {/* Availability Info */}
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 border-2 border-emerald-300 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-emerald-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-800">
                  Availability
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                {instructor.name} is available for lessons Monday through
                Saturday, with flexible scheduling to accommodate your needs.
                Morning, afternoon, and evening slots available.
              </p>
              <div className="flex gap-3 text-sm">
                <div className="bg-white rounded-lg px-4 py-2 font-semibold text-emerald-700">
                  Monday - Friday
                </div>
                <div className="bg-white rounded-lg px-4 py-2 font-semibold text-emerald-700">
                  9 AM - 6 PM
                </div>
                <div className="bg-white rounded-lg px-4 py-2 font-semibold text-emerald-700">
                  Weekends Available
                </div>
              </div>
            </div>

            {/* Pricing Info */}
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 border-2 border-cyan-300 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="text-cyan-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-800">
                  Pricing Options
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-lg font-bold text-gray-800 mb-2">
                    Single Lesson
                  </div>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">
                    ${instructor.price}
                  </div>
                  <div className="text-gray-600 text-sm">Per hour</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-lg font-bold text-gray-800 mb-2">
                    5-Lesson Package
                  </div>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">
                    ${instructor.price * 4.5}
                  </div>
                  <div className="text-gray-600 text-sm">Save 10%</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-lg font-bold text-gray-800 mb-2">
                    10-Lesson Package
                  </div>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">
                    ${instructor.price * 8}
                  </div>
                  <div className="text-gray-600 text-sm">Save 20%</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => navigate(`/booking?instructors=${instructor.id}`)}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-5 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all font-bold text-xl shadow-lg"
            >
              Book a Lesson with {instructor.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorProfilePage;

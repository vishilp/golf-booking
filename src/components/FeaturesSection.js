// components/FeaturesSection.js
import React from "react";
import { User, Calendar, Clock } from "lucide-react";

function FeaturesSection() {
  const features = [
    {
      icon: User,
      color: "emerald",
      title: "Expert Instructors",
      description:
        "Learn from certified professionals with years of experience",
    },
    {
      icon: Calendar,
      color: "teal",
      title: "Flexible Scheduling",
      description: "Book lessons at times that work for your schedule",
    },
    {
      icon: Clock,
      color: "cyan",
      title: "Instant Booking",
      description: "Secure your spot with easy online booking",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6">
                <div
                  className={`w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className={`text-${feature.color}-600`} size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;

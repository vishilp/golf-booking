import React, { useState } from "react";
import { CreditCard, ArrowLeft } from "lucide-react";

function PaymentModal({
  selectedDate,
  selectedTime,
  partySize,
  selectedInstructor,
  onClose,
  onPaymentComplete,
}) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onPaymentComplete();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-white/20">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-purple-300 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Booking
        </button>

        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <CreditCard className="w-8 h-8" />
          Payment Details
        </h2>

        <div className="bg-white/10 rounded-xl p-4 mb-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-2">
            Lesson Summary
          </h3>
          <div className="text-purple-200 space-y-1">
            <p>
              {selectedInstructor.name} - {selectedInstructor.specialty}
            </p>
            <p>
              {selectedDate.toLocaleDateString()} at {selectedTime}
            </p>
            <p>
              {partySize} {partySize === 1 ? "student" : "students"}
            </p>
            <p className="text-2xl font-bold text-white mt-2">
              ${selectedInstructor.price * partySize}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-purple-200 mb-2 text-sm font-semibold">
              Card Number
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) =>
                setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))
              }
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-purple-200 mb-2 text-sm font-semibold">
              Cardholder Name
            </label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-purple-200 mb-2 text-sm font-semibold">
                Expiry Date
              </label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => {
                  let val = e.target.value.replace(/\D/g, "");
                  if (val.length >= 2)
                    val = val.slice(0, 2) + "/" + val.slice(2, 4);
                  setExpiry(val);
                }}
                placeholder="MM/YY"
                maxLength="5"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-purple-200 mb-2 text-sm font-semibold">
                CVV
              </label>
              <input
                type="text"
                value={cvv}
                onChange={(e) =>
                  setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))
                }
                placeholder="123"
                maxLength="3"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            Complete Payment - ${selectedInstructor.price * partySize}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaymentModal;

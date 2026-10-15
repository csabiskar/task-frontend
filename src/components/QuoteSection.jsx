"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const emptyForm = {
  name: "",
  email: "",
  subject: "",
  department: "Business Departemant",
  message: "",
};

/*
  Sizes are fluid: they scale with the viewport width (vw) and stop at the
  full-size value (designed for a 1920px wide screen). The first number in
  each clamp() is the mobile minimum.
*/
const labelClass =
  "block text-[clamp(14px,1.1vw,21px)] leading-[1.7] text-[#5f5b3f] mb-[clamp(4px,0.4vw,8px)]";
const fieldClass =
  "w-full bg-white text-[#222] text-[clamp(16px,1.25vw,24px)] px-[clamp(16px,1.25vw,24px)] border-0 outline-none rounded-none focus:ring-2 focus:ring-[#243344]/60";
const inputH = "h-[clamp(42px,3.3vw,63px)]";
const gap = "gap-[clamp(16px,1.4vw,27px)]";
const rowMb = "mb-[clamp(16px,1.4vw,27px)]";

// small triangle in the bottom-right corner of the select
const triangle =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12'><path d='M12 0 L12 12 L0 12 Z' fill='%23666'/></svg>\")";

export default function QuoteSection() {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="quote"
      className="relative w-full bg-white overflow-hidden lg:min-h-[51.5vw]"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      {/* Navy info box: full bleed to the left edge */}
      <div className="relative bg-[#263445] px-6 sm:px-12 pt-16 pb-14 lg:pt-[12.6vw] lg:pb-0 lg:pl-[6.4%] lg:pr-0 lg:w-[58.3%] lg:min-h-[60.5vw]">
        {/* Watermark */}
        <div className="absolute left-4 top-2 sm:left-8 sm:top-3 lg:left-[2.1%] lg:top-[8.5vw] text-[clamp(72px,10vw,192px)] leading-none font-bold text-[#3a4147] uppercase select-none pointer-events-none">
          QUOTE
        </div>

        <div className="relative z-10 lg:pr-[14%]">
          <p className="text-[#f4c03b] text-[clamp(16px,1.56vw,30px)] leading-[1.8] uppercase mb-6 lg:mb-[3vw]">
            INTERESTED IN CONSTRUCTION?
          </p>

          <h2 className="text-white font-bold text-[clamp(32px,3.3vw,63px)] leading-[1.5] max-w-[31vw] max-lg:max-w-[420px] mb-6 lg:mb-[3vw]">
            Request a free and fair quote
          </h2>

          <p className="text-[#7a7a7a] text-[clamp(16px,1.4vw,27px)] leading-[2]">
            Slogan creation for your construction company is crucial for the
            overall branding. And branding in today’s world can’t be ignored, We
            hope that the above Construction Slogans. Don’t forget to share it
            on social media.
          </p>
        </div>
      </div>

      {/* Yellow form box: overlaps the navy box on desktop */}
      <div className="bg-[#f4c03b] px-6 py-10 sm:px-12 sm:py-14 lg:absolute lg:top-[7.8vw] lg:right-[1.1%] lg:w-[47%] lg:px-[5.4%] lg:pt-[5.3vw] lg:pb-[5.1vw]">
        {submitted ? (
          <div className="bg-white p-8 text-center">
            <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto mb-4" />
            <h3 className="font-bold text-[clamp(24px,1.9vw,36px)] text-[#243344] mb-2">
              Thank You!
            </h3>
            <p className="text-[#54595F] text-[clamp(16px,1.25vw,24px)] mb-6">
              Your quote request has been received. Our engineering team will
              contact you within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData(emptyForm);
              }}
              className="bg-[#243344] text-white font-bold text-[clamp(14px,1.1vw,21px)] px-6 py-3 hover:bg-black transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${gap} ${rowMb}`}>
              <div>
                <label className={labelClass}>Your Name (required)</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`${fieldClass} ${inputH}`}
                />
              </div>
              <div>
                <label className={labelClass}>Your Email (required)</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`${fieldClass} ${inputH}`}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${gap} ${rowMb}`}>
              <div>
                <label className={labelClass}>Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className={`${fieldClass} ${inputH}`}
                />
              </div>
              <div>
                <label className={labelClass}>Departemant</label>
                <select
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  style={{
                    backgroundImage: triangle,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px bottom 14px",
                  }}
                  className={`${fieldClass} ${inputH} appearance-none cursor-pointer`}
                >
                  <option value="Business Departemant">
                    Business Departemant
                  </option>
                  <option value="Personal Departemant">
                    Personal Departemant
                  </option>
                  <option value="Support Departemant">
                    Support Departemant
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className={labelClass}>Your Message</label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`${fieldClass} h-[clamp(147px,11.5vw,220px)] py-[clamp(10px,0.9vw,18px)] resize-y block`}
              />
            </div>

            {/* Send */}
            <div className="mt-[clamp(20px,1.9vw,38px)] flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="h-[clamp(44px,3.45vw,66px)] px-[clamp(30px,2.8vw,54px)] bg-[#243344] text-white font-bold text-[clamp(16px,1.25vw,24px)] shadow-[0_14px_34px_rgba(36,51,68,0.28)] hover:bg-black transition-colors disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
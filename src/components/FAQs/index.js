import { useState } from "react";

const faqs = [
  {
    question: "Semi-Permanent vs Temporary?",
    answer: `
      Semi-Permanent:
      - Lasts up to 2 weeks (or more)
      - Develops over 24-48 hours
      - Gradually fades as the skin regenerates
      - 100% Waterproof
      
      Temporary:
      - Lasts 1-2 days
      - Looks Cheap
      - Not Waterproof
      - Not safe for skin
    `,
  },
  {
    question: "Are Semi-Permanent tattoos safe?",
    answer: "Our tattoos are crafted using 100% organic, plant-based inks that are both vegan and skin-safe. While our temporary tattoos utilize certified non-toxic pigments, our semi-permanent inks are naturally derived from fruit-based extracts—ensuring a safe, gentle, and irritation-free experience for all skin types.",
  },
  {
    question: "What color/shade will my tattoo be?",
    answer: "Upon initial application, the tattoo will appear translucent—this is completely normal. Within 12 to 24 hours, the ink naturally oxidizes and develops into a rich, authentic tattoo-like shade. It’s not just a design—it's the INKHUB transformation in action",
  },
  {
    question: "How do I remove InkX Tattoos?",
    answer: "To remove, gently massage the area with an exfoliating scrub or baby oil. This helps lift the pigment without irritating the skin.",
  },
  {
    question: "Can i customise my own tattoo?",
    answer: "At InkX, we bring your vision to life with fully customized tattoos. Just upload your design, and we’ll handle the rest — crafted to perfection.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "50px auto", padding: "10px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>FAQs</h2>
      {faqs.map((item, index) => (
        <div
          key={index}
          style={{
            borderBottom: "1px solid #ccc",
            marginBottom: "10px",
            transition: "all 0.3s ease",
          }}
        >
          <button
            onClick={() => toggle(index)}
            style={{
              width: "100%",
              textAlign: "left",
              background: "transparent",
              border: "none",
              outline: "none",
              padding: "10px 0",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }}>
              ▼
            </span>
            <span style={{ marginLeft: "10px" }}>{item.question}</span>
          </button>
          <div
            style={{
              maxHeight: openIndex === index ? "500px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s ease",
            }}
          >
            <p style={{ padding: "10px 0", whiteSpace: "pre-line", fontSize: "15px", color: "#333" }}>
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;

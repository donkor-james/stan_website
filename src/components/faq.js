import React, { useState } from "react";

const Faq = () => {
  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <section className="faq">
      <h2 className="text-3xl text-[#4CAF50] text-center font-bold mb-2">
        Frequently Asked <span className="span">Questions</span>
      </h2>
      <div className="text-center mb-10 text-gray-600">
        Get Clear Answers to Common Questions
      </div>
      <div className="faq-accordion max-w-2xl mx-auto mt-8">
        {[
          {
            question: "What is Stan Consultancy?",
            answer:
              "Stan Consultancy specializes in strategic consulting solutions.",
          },
          {
            question: "What services do you provide?",
            answer:
              "We offer family management, business growth consulting, and financial planning.",
          },
          {
            question: "How to contact you?",
            answer: "You can reach us via our website or call +233 247839941.",
          },
          {
            question: "Where are you located?",
            answer: "Our office is located in Accra, Ghana.",
          },
          {
            question: "Do you offer online consultations?",
            answer:
              "Yes, we provide online consultations for your convenience.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="faq-question bg-white py-1 rounded-lg shadow-sm transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <h3
              className="flex justify-between items-center text-md text-[#4CAF50] cursor-pointer"
              onClick={() => handleToggle(index)}
              aria-expanded={activeQuestion === index}
              aria-controls={`answer-${index}`} // Corrected line
            >
              {item.question}
              <span
                className={`ml-2 faq-sign transform transition-transform duration-300 ${
                  activeQuestion === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </h3>
            <p
              id={`answer-${index}`}
              className={`text-gray-600 transition-all duration-300 ease-in-out ${
                activeQuestion === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .faq-question:hover {
          border-left: 10px solid #40bab4; /* Gold-like yellow */
        }
      `}</style>
    </section>
  );
};

export default Faq;

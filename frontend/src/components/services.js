import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ServicesData from "../data/services.json";
import family from "../images/fl.jpg";
// import single from "../images/single.jpg";
import growth from "../images/grth.jpg";
// import planning from "../images/fm.jpg";
import leadership from "../images/lg.jpg";
import personal from "../images/secure.jpg";
import company from "../images/fm.jpg";
import legal from "../images/lmm.jpg";
import Team from "./team";
import Navbar from "./navbar";
import Footer from "./footer";

const Services = () => {
  const ServicesData = [
    {
      id: 1,
      title: "Family Life Management",
      description:
        "Tailored strategies for navigating challenges, fostering communication, and strengthening family bonds.",
      full_description:
        "Family life management at Stan Inc is dedicated to providing comprehensive support and strategies for navigating the complexities of family dynamics, fostering effective communication, and strengthening familial bonds. We recognize that every family faces unique challenges and transitions, and our approach is tailored to address your specific needs with empathy and expertise.\n\nOur services begin with a deep understanding of your family's dynamics and goals. Whether you're navigating through significant life changes such as relocation, divorce, or blending families, or simply seeking to enhance overall family harmony, our experienced counselors and consultants are here to guide you.\n\nNavigating challenges within a family unit requires a nuanced approach. We offer personalized counseling sessions and family therapy interventions that promote open communication, emotional resilience, and conflict resolution skills. Our goal is to create a safe space where family members can express their thoughts and feelings constructively, fostering understanding and mutual respect.\n\nEffective communication lies at the heart of healthy family relationships. Our workshops and educational programs are designed to enhance communication skills among family members of all ages. From active listening techniques to assertiveness training, we provide practical tools that empower families to communicate effectively and strengthen emotional connections.\n\nStrengthening family bonds is a core focus of our services. We facilitate experiential activities and bonding exercises that encourage quality time together, promote shared values, and build resilience. Whether through outdoor adventures, creative arts, or structured family meetings, we help families cultivate lasting bonds and support systems.\n\nAt Stan Inc, we understand that each family is unique, and our services are designed to be flexible and responsive to your evolving needs. Whether you're facing a specific crisis or seeking ongoing support to maintain family harmony, our team is committed to empowering your family to thrive.",

      image: family,
    },
    {
      id: "2",
      title: "Business Growth",
      description:
        "Expertise in market analysis and strategic planning to achieve sustainable growth and maximize profitability.",
      full_description:
        "Achieving sustainable business growth requires a strategic approach grounded in market analysis, innovative thinking, and effective execution. At Stan Inc, we specialize in providing tailored business growth strategies that empower organizations to thrive in competitive markets and achieve their long-term objectives.\n\nOur approach begins with a comprehensive assessment of your business landscape and market dynamics. We conduct thorough market research and competitor analysis to identify growth opportunities, market trends, and consumer preferences. By gaining a deep understanding of your industry and target audience, we develop strategic insights that inform your growth strategy.\n\nStrategic planning is essential for guiding business growth initiatives. We collaborate closely with your leadership team to define clear goals, prioritize initiatives, and allocate resources effectively. Whether you're launching new products, expanding into new markets, or enhancing operational efficiencies, our strategic plans are tailored to align with your unique business objectives.\n\nMaximizing profitability involves optimizing operational processes and cost management strategies. Our team of experts conducts operational audits and financial analyses to identify inefficiencies and opportunities for improvement. Through targeted recommendations and implementation support, we help you streamline operations, reduce costs, and enhance overall profitability.\n\nAt Stan Inc, we believe in fostering a culture of continuous improvement and innovation. We provide ongoing support and guidance to ensure the successful execution of your growth initiatives. Whether through executive coaching, leadership development programs, or performance monitoring, we empower your team to drive sustainable business growth and achieve lasting success in dynamic market environments.",
      image: growth,
    },
    {
      id: 3,
      title: "Leadership Growth",
      description:
        "Practical exercises to help understand and utilize unique strengths for effective team leadership.",
      full_description:
        "Effective leadership is a cornerstone of organizational success, driving innovation, fostering a positive work culture, and empowering teams to achieve their full potential. At Stan Inc, we offer comprehensive leadership growth programs designed to cultivate leadership excellence at all levels of your organization.\n\nOur approach to leadership development begins with personalized assessments and coaching sessions. We help leaders identify their unique strengths, areas for development, and leadership styles. Through one-on-one coaching and feedback, leaders gain valuable insights and skills to enhance their effectiveness, build trust, and inspire high-performance teams.\n\nUnderstanding and leveraging unique strengths are fundamental to effective leadership. We provide practical exercises and workshops that focus on key leadership competencies such as strategic thinking, emotional intelligence, and communication skills. Through experiential learning and real-world simulations, leaders develop the confidence and capabilities to navigate complex challenges and drive organizational success.\n\nFostering effective team dynamics is another critical aspect of our leadership growth programs. We offer team-building workshops, collaborative projects, and conflict resolution training that promote trust, collaboration, and mutual respect among team members. By cultivating a supportive and inclusive work environment, leaders can harness the collective talents of their teams and achieve shared goals.\n\nAt Stan Inc, we understand that leadership development is an ongoing journey. We provide continuous support and resources to help leaders refine their skills and adapt to evolving business landscapes. Whether you're an emerging leader or a seasoned executive, our leadership growth programs empower you to lead with confidence, integrity, and vision.",
      image: leadership,
    },
    {
      id: 4,
      title: "Company Management",
      description:
        "Improving operational efficiency and enhancing employee engagement for a productive work environment.",

      full_description:
        "Effective company management is essential for optimizing operational efficiency, enhancing employee engagement, and fostering a culture of innovation and growth. At Stan Inc, we offer tailored management solutions designed to help organizations achieve their strategic objectives and drive sustainable success.\n\nImproving operational efficiency begins with a comprehensive assessment of your organization's processes and workflows. Our management consultants conduct detailed analyses to identify bottlenecks, inefficiencies, and opportunities for improvement. By implementing streamlined processes and performance metrics, we help you optimize resource allocation, reduce costs, and improve overall productivity.\n\nEnhancing employee engagement is crucial for creating a motivated and committed workforce. We provide strategic initiatives and employee development programs that promote professional growth, job satisfaction, and organizational loyalty. Through leadership training, mentorship programs, and feedback mechanisms, we empower your employees to contribute effectively to your company's success.\n\nFostering a productive work environment involves cultivating a culture of collaboration, creativity, and continuous improvement. We offer leadership coaching, team-building workshops, and innovation labs that encourage open communication, idea sharing, and problem-solving. By nurturing a supportive work culture, we enhance employee morale and create a workplace where innovation thrives.\n\nAt Stan Inc, we partner with your leadership team to develop actionable strategies and provide ongoing support to ensure the successful implementation of management initiatives. Whether you're a small business looking to streamline operations or a large corporation seeking strategic growth, our management solutions are designed to drive organizational excellence and achieve sustainable growth in a competitive marketplace.",
      image: company,
    },
    {
      id: 5,
      title: "Legal Services",
      description:
        "Comprehensive legal support including contract drafting, negotiation, and dispute resolution.",
      full_description:
        "Legal services are essential for protecting your business interests, managing risks, and ensuring compliance with regulatory requirements. At Stan Inc, we offer comprehensive legal support tailored to meet the diverse needs of businesses across various industries.\n\nOur legal team has extensive experience in handling a wide range of business matters, from contract drafting and negotiation to dispute resolution and litigation support. We work closely with your leadership team to understand your business objectives and provide strategic legal advice that aligns with your long-term goals.\n\nContract drafting and negotiation are critical for establishing clear rights, obligations, and expectations between parties. Whether you're entering into new business agreements, negotiating vendor contracts, or drafting employment agreements, our attorneys ensure that your contracts are legally sound and enforceable. We advocate for your interests and negotiate favorable terms that protect your business relationships and minimize legal risks.\n\nDispute resolution is an inevitable part of business operations. Our legal experts offer alternative dispute resolution services, including mediation and arbitration, to resolve conflicts efficiently and cost-effectively. We strive to achieve amicable resolutions that preserve business relationships and mitigate potential legal liabilities.\n\nCompliance with regulatory requirements is essential for avoiding legal pitfalls and maintaining business operations. We provide proactive legal counsel and compliance monitoring to ensure that your business practices adhere to applicable laws and regulations. By staying abreast of legal developments and industry standards, we help you navigate complex legal landscapes and mitigate compliance risks.\n\nAt Stan Inc, we are committed to delivering excellence in legal services. Whether you're a startup navigating legal complexities or an established corporation seeking proactive legal strategies, our dedicated team is here to protect your business interests and support your long-term success.",

      image: legal,
    },
    {
      id: 6,
      title: "Personal Life Management",
      description:
        "Support for time management, stress management, and achieving work-life balance.",
      full_description:
        "Personal life management is essential for achieving work-life balance, managing stress, and maximizing overall well-being. At Stan Inc, we offer personalized support and strategies to help individuals prioritize their responsibilities, reduce stress levels, and enhance their quality of life.\n\nTime management is a fundamental aspect of personal life management. We provide tools and techniques to help you optimize your daily schedule, set achievable goals, and prioritize tasks effectively. By improving time management skills, you can create more time for activities that bring fulfillment and joy, both personally and professionally.\n\nStress management is another key focus of our personal life management services. We offer stress-reduction techniques, relaxation exercises, and mindfulness practices that promote emotional resilience and mental well-being. Whether you're dealing with work-related stress, personal challenges, or life transitions, our strategies empower you to manage stress effectively and maintain a positive outlook.\n\nAchieving work-life balance is a priority for many individuals seeking harmony between career demands and personal commitments. We provide coaching and lifestyle adjustments that help you establish boundaries, delegate responsibilities, and prioritize self-care. By fostering a balanced approach to life, you can enhance your overall well-being and enjoy greater satisfaction in both your professional and personal pursuits.\n\nAt Stan Inc, we understand that personal life management is a journey of self-discovery and growth. We offer personalized coaching sessions, workshops, and online resources that cater to your unique needs and goals. Whether you're seeking to enhance your productivity, reduce stress, or achieve greater life satisfaction, our holistic approach to personal life management empowers you to live your best life.",

      image: personal,
    },
  ];

  const navigate = useNavigate();

  const navigateToServicePage = (service) => {
    navigate({
      pathname: `/service-details/${service.id}/${service.title}`,
      state: service,
    });
  };

  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert("Subscription successful!");
        setEmail("");
      } else {
        alert("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Subscription failed. Please try again.");
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* Hero Section */}
      <section className="text-white p-10 text-center relative services-hero">
        <div
          className="bg-center"
          style={{
            backgroundImage: "url(./header.png)",
          }}
        >
          <div className="flex items-center justify-center md:mt-32 mt-24">
            <h1 className="hero-header text-4xl md:text-5xl font-bold">
              OUR SERVICE
            </h1>
          </div>
        </div>
      </section>
      <section className="pb-16 pt-10 px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mt-8">
          WHAT WE <span className="span">DO BEST</span>
        </h2>
        <div className="text-gray-600 text-center">
          Providing Solutions for Your Financial, Personal, and Professional
          Growth
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {ServicesData.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center border p-4 rounded shadow"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-32 h-32 object-cover rounded-t"
              />
              <h3 className="font-semibold mt-2">{service.title}</h3>
              <p className="text-center">{service.description}</p>
              <button
                className="mt-2 bg-yellow-500 text-black px-3 py-1 rounded"
                onClick={() => navigateToServicePage(service)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-gray-200">
        <section className=" px-12 py-20">
          <h2 className="text-4xl font-bold text-center">
            Subscribe to <span className="span">Our Newletter</span>
          </h2>
          <div className="text-center mb-10 text-gray-600">
            Unlock Exclusive Content and Expert Advice
          </div>
          <form onSubmit={handleSubscribe} className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border p-2 rounded-l w-64 outline-none"
            />
            <div className="bg-yellow-400 ">
              <button type="submit" className=" px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className="">
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default Services;

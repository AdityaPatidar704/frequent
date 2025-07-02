import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiGet } from "../services/apiRequestResponse";
import { Dialog } from "primereact/dialog";
import { Skeleton } from 'primereact/skeleton';
// Header Component
const Header = ({ onToggleMobileMenu }) => {
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle("hidden");
    }
    onToggleMobileMenu();
  };

  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-8 lg:px-12 rounded-b-lg sticky z-100 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-3xl font-bold text-indigo-700 hover:text-indigo-800 transition duration-300 ease-in-out"
        >
          FluentTalk
        </a>
        <nav className="hidden md:flex space-x-6 items-center">
          <a
            href="#about"
            className="text-gray-600 hover:text-indigo-700 font-medium transition duration-300 ease-in-out"
          >
            About Us
          </a>
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-indigo-700 font-medium transition duration-300 ease-in-out"
          >
            How It Works
          </a>
          <a
            href="#courses"
            className="text-gray-600 hover:text-indigo-700 font-medium transition duration-300 ease-in-out"
          >
            Courses
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 hover:text-indigo-700 font-medium transition duration-300 ease-in-out"
          >
            Testimonials
          </a>
          <a
            href="#video"
            className="text-gray-600 hover:text-indigo-700 font-medium transition duration-300 ease-in-out"
          >
            Featured Video
          </a>
          <a
            href="#blog"
            className="text-gray-600 hover:text-indigo-700 font-medium transition duration-300 ease-in-out"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-indigo-700 font-medium transition duration-300 ease-in-out"
          >
            Contact
          </a>
          <button
            onClick={() => navigate("/adminLogin")}
            className="bg-indigo-600 text-white font-bold py-2 px-5 rounded-full shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            Login
          </button>
        </nav>
        <button
          id="mobile-menu-button"
          className="md:hidden p-2 text-gray-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
          onClick={handleMobileMenuToggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <nav
        id="mobile-menu"
        ref={mobileMenuRef}
        className="hidden md:hidden mt-4 bg-white rounded-lg shadow-md"
      >
        <a
          href="#about"
          className="block py-3 px-6 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition duration-200 ease-in-out"
        >
          About Us
        </a>
        <a
          href="#how-it-works"
          className="block py-3 px-6 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition duration-200 ease-in-out"
        >
          How It Works
        </a>
        <a
          href="#courses"
          className="block py-3 px-6 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition duration-200 ease-in-out"
        >
          Courses
        </a>
        <a
          href="#testimonials"
          className="block py-3 px-6 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition duration-200 ease-in-out"
        >
          Testimonials
        </a>
        <a
          href="#video"
          className="block py-3 px-6 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition duration-200 ease-in-out"
        >
          Featured Video
        </a>
        <a
          href="#blog"
          className="block py-3 px-6 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition duration-200 ease-in-out"
        >
          Blog
        </a>
        <a
          href="#contact"
          className="block py-3 px-6 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition duration-200 ease-in-out"
        >
          Contact
        </a>
        <button
          onClick={() => {
            navigate("/adminLogin");
            handleMobileMenuToggle();
          }}
          className="block w-full text-left py-3 px-6 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out mt-2"
        >
          Login
        </button>
      </nav>
    </header>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="bg-gradient-to-r  from-indigo-500 to-purple-600 text-white py-20 px-6 md:px-8 lg:px-12 rounded-lg m-4 md:m-8 lg:m-10 shadow-lg">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
        Master English Speaking Confidently
      </h1>
      <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up">
        Unlock your potential with our interactive online classes and expert
        instructors.
      </p>
      <a
        href="#contact"
        className="inline-block bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-100 hover:scale-105 transition duration-300 ease-in-out transform"
      >
        Enroll Now
      </a>
    </div>
  </section>
);

// About Us Section
const AboutSection = () => (
  <section id="about" className="py-16 px-6 md:px-8 lg:px-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Why Choose FluentTalk?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
          <div className="text-indigo-600 mb-4">
            <svg
              className="w-12 h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            Expert Instructors
          </h3>
          <p className="text-gray-600">
            Learn from certified and experienced teachers dedicated to your
            success.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
          <div className="text-indigo-600 mb-4">
            <svg
              className="w-12 h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            Flexible Schedules
          </h3>
          <p className="text-gray-600">
            Classes designed to fit your busy lifestyle, available anytime,
            anywhere.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
          <div className="text-indigo-600 mb-4">
            <svg
              className="w-12 h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            Interactive Learning
          </h3>
          <p className="text-gray-600">
            Engage in real conversations and practical exercises for quick
            progress.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// How It Works Section
const HowItWorksSection = () => (
  <section
    id="how-it-works"
    className="bg-indigo-50 py-16 px-6 md:px-8 lg:px-12 rounded-lg m-4 md:m-8 lg:m-10 shadow-lg"
  >
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
          <div className="text-indigo-600 mb-4 text-5xl font-extrabold">1</div>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            Sign Up & Choose Your Plan
          </h3>
          <p className="text-gray-600">
            Browse our course offerings and select the plan that fits your goals
            and budget.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
          <div className="text-indigo-600 mb-4 text-5xl font-extrabold">2</div>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            Schedule Your Classes
          </h3>
          <p className="text-gray-600">
            Book one-on-one sessions with our expert instructors at your
            convenience.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
          <div className="text-indigo-600 mb-4 text-5xl font-extrabold">3</div>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            Start Speaking Fluently
          </h3>
          <p className="text-gray-600">
            Engage in interactive lessons and practice conversations to build
            confidence.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Courses Section
const CoursesSection = () => (
  <section id="courses" className="py-16 px-6 md:px-8 lg:px-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Our Popular Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100 text-left">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            General English Fluency
          </h3>
          <p className="text-gray-600 mb-4">
            Improve your everyday conversational skills, grammar, and vocabulary
            for general communication.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Daily conversation practice</li>
            <li>Grammar and vocabulary building</li>
            <li>Pronunciation refinement</li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-indigo-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-600 transition duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100 text-left">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Business English Mastery
          </h3>
          <p className="text-gray-600 mb-4">
            Specialize in English for professional settings, meetings,
            presentations, and email communication.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Professional vocabulary and idioms</li>
            <li>Meeting and presentation skills</li>
            <li>Effective written communication</li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-indigo-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-600 transition duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Testimonials Section
const TestimonialsSection = () => (
  <section
    id="testimonials"
    className="bg-purple-50 py-16 px-6 md:px-8 lg:px-12 rounded-lg m-4 md:m-8 lg:m-10 shadow-lg"
  >
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        What Our Students Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <img
            src="https://placehold.co/80x80/d1d5db/374151?text=👩"
            alt="Student Avatar 1"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <p className="text-gray-700 italic mb-4">
            "FluentTalk has transformed my confidence in speaking English. The
            instructors are incredibly supportive and the lessons are so
            practical!"
          </p>
          <p className="font-semibold text-indigo-700">
            - Sarah K., Marketing Professional
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <img
            src="https://placehold.co/80x80/d1d5db/374151?text=👨"
            alt="Student Avatar 2"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <p className="text-gray-700 italic mb-4">
            "I highly recommend FluentTalk for anyone looking to improve their
            English. My business communication skills have seen a significant
            boost."
          </p>
          <p className="font-semibold text-indigo-700">
            - David L., Entrepreneur
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <img
            src="https://placehold.co/80x80/d1d5db/374151?text=🧑‍🎓"
            alt="Student Avatar 3"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <p className="text-gray-700 italic mb-4">
            "The flexible scheduling allowed me to learn at my own pace.
            FluentTalk made learning English enjoyable and effective."
          </p>
          <p className="font-semibold text-indigo-700">
            - Emily R., University Student
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <img
            src="https://placehold.co/80x80/d1d5db/374151?text=👩‍💼"
            alt="Student Avatar 4"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <p className="text-gray-700 italic mb-4">
            "Finally, an online class that truly focuses on speaking! My
            pronunciation has improved dramatically."
          </p>
          <p className="font-semibold text-indigo-700">
            - Omar S., IT Professional
          </p>
        </div>
      </div>
    </div>
  </section>
);

// YouTube Video Section
const YouTubeVideoSection = () => {
  // Keeping a fixed default video for a simple landing page
  const [featuredVideoUrl, setFeaturedVideoUrl] = useState("");
  useEffect(() => {
    if (localStorage.getItem("videoUrl") != null) {
      setFeaturedVideoUrl(localStorage.getItem("videoUrl"));
      console.log("executed");
    } else {
      console.log("nothing present");
      setFeaturedVideoUrl("");
    }
    const getUrl = async () => {
      try {
        const res = await apiGet("/url");
        console.log(res.data);
        setFeaturedVideoUrl(res.data.url);
      } catch (err) {
        console.log(err);
      }
    };
    getUrl();
  }, []);
  const getYouTubeEmbedUrl = (url) => {
    const videoIdMatch = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    return videoIdMatch && videoIdMatch[1]
      ? `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=0&rel=0`
      : "";
  };

  return (
    <section
      id="video"
      className="bg-gray-50 py-16 px-6 md:px-8 lg:px-12 rounded-lg m-4 md:m-8 lg:m-10 shadow-lg"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Watch Our Latest Lesson!
        </h2>
        <div className="relative pb-[56.25%] h-0 mb-8 bg-gray-200 rounded-xl overflow-hidden shadow-xl">
          {featuredVideoUrl == "" ? (
            <Skeleton className="!absolute !top-0 !left-0 !w-full !h-full !rounded-xl"></Skeleton>
          ) : (
            <iframe
              id="youtube-video-frame"
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src={getYouTubeEmbedUrl(featuredVideoUrl)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
        {/* Removed the "Update Featured Video" section as requested for a simpler landing page */}
      </div>
    </section>
  );
};

// Blog Section
const BlogSection = () => {
  const [blogData, setBlogData] = useState([]);
  const [seletedBlogData, setSelectedBlogData] = useState([]);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getBlogData = async () => {
      try {
        const res = await apiGet("/blogdata");
        console.log(res);
        const data = res.data.slice(0, 3);
        setBlogData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getBlogData();
  }, []);
  function handleBlogOpen(e, data) {
    setSelectedBlogData([data]);
    setVisible(true);
  }
  return (
    <section id="blog" className="py-16 px-6 md:px-8 lg:px-12">
      {seletedBlogData.length ? (
        <Dialog
          header={seletedBlogData[0].title}
          visible={visible}
          className="sm:w-[50vw] w-[80vw] max-w-[100%]"
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
        >
          <div className="text-left">
            <img
              src={seletedBlogData[0].image}
              alt="Blog Post Image"
              className="w-full h-48 object-contain rounded-md mb-4 mt-3"
            />
          </div>
          <p className="m-0 break-words whitespace-pre-line text-gray-700">
            {seletedBlogData[0].content}
          </p>
        </Dialog>
      ) : (
        <></>
      )}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Latest Insights & Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.length ? (
            <>
              {blogData.map((data) => (
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
                  <img
                    src={data.image}
                    alt="Blog Post Image"
                    className="w-full h-48 object-contain rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2 line-clamp-2">
                    {data.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {data.content}
                  </p>

                  <a
                    onClick={(e) => handleBlogOpen(e, data)}
                    className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                  >
                    Read More →
                  </a>
                </div>
              ))}
            </>
          ) : (
            <>
            <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
                  <Skeleton
                    className="w-full h-48 object-contain rounded-md mb-4"
                  />
                  <Skeleton className="text-xl font-semibold text-gray-700 mb-2">              
                  </Skeleton>

                  <Skeleton className="text-gray-600 text-sm mb-4 line-clamp-3">                
                  </Skeleton>
                  <Skeleton                    
                    className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                  >
                  </Skeleton>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
                  <Skeleton
                    className="w-full h-48 object-contain rounded-md mb-4"
                  />
                  <Skeleton className="text-xl font-semibold text-gray-700 mb-2">              
                  </Skeleton>

                  <Skeleton className="text-gray-600 text-sm mb-4 line-clamp-3">                
                  </Skeleton>
                  <Skeleton                    
                    className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                  >
                  </Skeleton>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
                  <Skeleton
                    className="w-full h-48 object-contain rounded-md mb-4"
                  />
                  <Skeleton className="text-xl font-semibold text-gray-700 mb-2">              
                  </Skeleton>

                  <Skeleton className="text-gray-600 text-sm mb-4 line-clamp-3">                
                  </Skeleton>
                  <Skeleton                    
                    className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                  >
                  </Skeleton>
                </div>
            </>
          )}
          {/* <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
          <img src="https://placehold.co/400x200/e2e8f0/4a5568?text=Blog+Image+2" alt="Blog Post Image" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Common English Pronunciation Mistakes</h3>
          <p className="text-gray-600 text-sm mb-4">Identify and correct common errors for clearer speaking.</p>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Read More →</a>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
          <img src="https://placehold.co/400x200/e0e7ff/4a5568?text=Blog+Image+3" alt="Blog Post Image" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Boost Your Business English Skills</h3>
          <p className="text-gray-600 text-sm mb-4">Strategies for effective communication in professional settings.</p>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Read More →</a>
        </div> */}
        </div>
        <div className="mt-12">
          <a
            onClick={(e) => navigate("/viewAll")}
            className="inline-block bg-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-600 hover:scale-105 transition duration-300 ease-in-out transform"
          >
            View All Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", { name, email, message });
    setContactMessage(
      "Thank you for your message! We will get back to you soon."
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-20 px-6 md:px-8 lg:px-12 rounded-lg m-4 md:m-8 lg:m-10 shadow-lg"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Ready to Start Your English Journey?
        </h2>
        <p className="text-lg md:text-xl mb-12 opacity-90">
          Get in touch with us today to learn more about our courses.
        </p>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-xl text-gray-800 border border-gray-200">
          <form onSubmit={handleSubmit}>
            <div className="mb-5 text-left">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5 text-left">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5 text-left">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell us about your English learning goals..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out shadow-lg"
            >
              Send Message
            </button>
            {contactMessage && (
              <div
                id="contact-message"
                className="mt-4 text-center text-sm text-green-600"
              >
                {contactMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer Section
const FooterSection = () => (
  <footer className="bg-gray-800 text-white py-8 px-6 md:px-8 lg:px-12 rounded-t-lg">
    <div className="container mx-auto text-center text-sm">
      <p>© 2025 FluentTalk. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a
          href="#"
          className="hover:text-indigo-400 transition duration-200 ease-in-out"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="hover:text-indigo-400 transition duration-200 ease-in-out"
        >
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
);

// Main LandingPage Component
const LandingPage = () => {
  return (
    <div className="antialiased">
      <Header
        onToggleMobileMenu={() => {
          /* No specific action needed here for now */
        }}
      />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <CoursesSection />
      <TestimonialsSection />
      <YouTubeVideoSection />
      <BlogSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;

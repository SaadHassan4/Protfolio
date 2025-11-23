import React, { useState, useEffect } from 'react';
import img1 from './img1.jfif'; 
import img2 from './ads.png'; 
import img3 from './social.webp';
import img4 from './4 copy.jpg';
import img5 from './1 copy.jpg';
import img6 from './2 copy.jpg';
import img7 from './3 copy.jpg';
import img8 from './5 copy.jpg';
import img9 from './final.jpg';

function App() {
  const [currentProject, setCurrentProject] = useState(null);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash === '#projects' || window.location.hash === '') {
        setCurrentProject(null);
      } else {
        const projectId = window.location.hash.substring(1);
        setCurrentProject(projectId);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Check URL on initial load
    if (window.location.hash && window.location.hash !== '#projects') {
      const projectId = window.location.hash.substring(1);
      setCurrentProject(projectId);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const viewProject = (projectId) => {
    setCurrentProject(projectId);
    window.history.pushState({ project: projectId }, '', `#${projectId}`);
  };

  const closeProject = () => {
    setCurrentProject(null);
    window.history.pushState({}, '', '#projects');
  };

  // Project Details Component
  const ProjectDetail = ({ projectId, onClose }) => {
    if (projectId === 'meta-ads') {
      return (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <button 
              className="mb-6 flex items-center text-blue-500 hover:text-blue-700"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Projects
            </button>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Meta Ads Campaign</h2>
              <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-6">
             <img 
              src={img4}  
              alt="media" 
              className="w-full h-full object-cover"
            />
              </div>
              <p className="text-gray-600 mb-6">
                This Meta Ads campaign achieved exceptional performance with a Cost per ThruPlay of just $0.01, 
                significantly outperforming industry benchmarks. Through strategic audience targeting and creative 
                optimization, we maximized engagement while minimizing costs.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Campaign Highlights</h3>
              <ul className="list-disc pl-5 text-gray-600 mb-6">
                <li>Achieved high-volume conversions across multiple campaigns.</li>
                <li>Delivered consistent purchase results with strong performance in the Results column.</li>
                <li>Generated over 800+ messaging conversations in the top-performing campaign.</li>
                <li>Secured 60–80+ website purchases in multiple campaigns within the same period.  </li>
                <li>Optimized campaigns to maintain steady conversion flow across varying budgets.</li>
                <li>Ensured efficient budget use while maximizing overall conversion volume.</li>
              </ul>
              
            
            </div>
                  <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4"></h2>
              <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-6">
                  <img 
              src={img5}  
              alt="media" 
              className="w-full h-full object-cover"
            />
              </div>
              <p className="text-gray-600 mb-6">
                This Meta Ads campaign dashboard highlights highly efficient performance across multiple campaigns, delivering strong reach, excellent CPM, and very low CPC. The ads generated high engagement with thousands of link clicks while maintaining cost-effectiveness, showcasing optimized targeting and strong ad relevance.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Campaign Highlights</h3>
              <ul className="list-disc pl-5 text-gray-600 mb-6">
                <li>Managed multiple active campaigns with consistent delivery and stable performance.</li>
                <li>Achieved strong reach, including campaigns with 198,000+ and 171,000+ people reached.</li>
                <li>Generated high impressions, going above 480,000+ in a single campaign.</li>
                <li>Delivered CPC as low as $0.08, indicating highly optimized ads.</li>
                <li>Maintained excellent CPM values such as $0.09, $0.12, and $1.06, showing cost-effective reach.</li>
                <li>Achieved strong link clicks (123–538 range) at a very low cost.</li>
              </ul>
        
              <div className="flex gap-4">
             
              </div>
                    <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4"></h2>
              <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-6">
                  <img 
              src={img6}  
              alt="media" 
              className="w-full h-full object-cover"
            />
              </div>
              <p className="text-gray-600 mb-6">
                This Meta Ads campaign achieved exceptional performance with a Cost per ThruPlay of just $0.01, 
                significantly outperforming industry benchmarks. Through strategic audience targeting and creative 
                optimization, we maximized engagement while minimizing costs.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Campaign Highlights</h3>
              <ul className="list-disc pl-5 text-gray-600 mb-6">
                <li>Achieved $0.01 Cost per ThruPlay (95% below industry average)</li>
                <li>Optimized audience targeting for maximum relevance</li>
                <li>Strategic budget allocation across high-performing segments</li>
                <li>Continuous A/B testing of ad creatives and copy</li>
                <li>Real-time performance monitoring and optimization</li>
                <li>Scaled successful campaigns while maintaining efficiency</li>
              </ul>
      
              <div className="flex gap-4">
              
              </div>
            </div>
                  <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4"></h2>
              <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-6">
                  <img 
              src={img7}  
              alt="media" 
              className="w-full h-full object-cover"
            />
              </div>
              <p className="text-gray-600 mb-6">
                This Meta Ads performance snapshot shows highly efficient engagement and messaging results across multiple campaigns. With strong reach, high impressions, and extremely low CPC and CPM values, the campaigns generated quality conversations and clicks while maintaining excellent cost efficiency.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Campaign Highlights</h3>
              <ul className="list-disc pl-5 text-gray-600 mb-6">
                <li>Campaigns reached 108,000+ to 442,000+ users.</li>
                <li>Generated up to 936,650 impressions in a single campaign.</li>
                <li>Consistent high delivery across all active campaigns.</li>
                <li>CPC as low as $0.08, indicating exceptional optimization.</li>
                <li>CPM ranging from $0.21 to $2.00, demonstrating very cost-effective audience reach.</li>
                <li>Link clicks ranging from 77 to 2,331, showing strong ad engagement.</li>
              </ul>
             
              <div className="flex gap-4">
               
              </div>
            </div>
                  <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4"></h2>
              <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-6">
                  <img 
              src={img8}  
              alt="media" 
              className="w-full h-full object-cover"
            />
              </div>
              <p className="text-gray-600 mb-6">
              This dashboard showcases strong sales-focused Meta Ads campaigns that delivered high website purchases at optimized costs. Each campaign achieved solid reach, strong impressions, and consistent conversions while staying within controlled lifetime budgets.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Campaign Highlights</h3>
              <ul className="list-disc pl-5 text-gray-600 mb-6">
                <li>Generated 239, 249, and 110 website purchases across different campaigns.</li>
                <li>Strong conversion output even with varied budgets from Rs 6,000 – Rs 12,000.</li>
                <li>Reached up to 34,328 users on the top-performing campaign.</li>
                <li>Delivered 89,868 impressions on the highest-engaging ad set.</li>
                <li>All campaigns used Highest Volume bidding—optimized for maximum purchases.</li>
                <li>Consistent results show effective targeting, creative testing, and conversion-optimized funnel.</li>
              </ul>
            
              <div className="flex gap-4">
              
              </div>
            </div>
                  <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4"></h2>
              <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-6">
                        <img 
              src={img9}  
              alt="media" 
              className="w-full h-full object-cover"
            />
              </div>
              <p className="text-gray-600 mb-6">
              These Meta Ads engagement and awareness campaigns consistently generated high-volume messaging conversations, strong reach, and efficient cost metrics across multiple regions and academic programs. With optimized audience targeting and strategy-driven execution, the campaigns delivered over 600k+ PKR in total spend with high engagement and quality leads for educational institutes.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Campaign Highlights</h3>
              <ul className="list-disc pl-5 text-gray-600 mb-6">
                <li>Managed 13+ active Meta Ads campaigns across different campuses and academic programs.</li>
                <li>Generated hundreds of messaging conversations per campaign, driving strong lead generation.</li>
                <li>Successfully handled a monthly ad spend of PKR 600,000+ with optimized delivery.</li>
                <li>Maintained 100/100 opportunity score, indicating strong campaign health and optimization.</li>
                <li>Real-time performance monitoring and optimization</li>
                <li>Maintained 100/100 opportunity score, indicating strong campaign health and optimization.</li>
              </ul>
             
              <div className="flex gap-4">
            
          
              </div>
            </div>  
            </div>
          </div>
        </section>
      );
    }

    if (projectId === 'social-media') {
      return (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <button 
              className="mb-6 flex items-center text-blue-500 hover:text-blue-700"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Projects
            </button>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Social Media Marketing Strategy</h2>
              <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-6"></div>
              <p className="text-gray-600 mb-6">
                Developed and executed comprehensive social media marketing strategies across multiple platforms 
                including Facebook, Instagram, Twitter, and LinkedIn. Focused on brand building, audience engagement, 
                and driving measurable business results through data-driven approaches.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Strategy Components</h3>
              <ul className="list-disc pl-5 text-gray-600 mb-6">
                <li>Multi-platform content strategy and calendar management</li>
                <li>Community engagement and growth tactics</li>
                <li>Influencer partnership programs</li>
                <li>Performance analytics and ROI tracking</li>
                <li>Content creation and curation</li>
                <li>Crisis management and brand reputation</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm">Content Strategy</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm">Community Management</span>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded text-sm">Influencer Marketing</span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">Analytics & Reporting</span>
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded text-sm">Brand Management</span>
              </div>
              <div className="flex gap-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  View Strategy
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors">
                  See Results
                </button>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm py-4 z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Saad Hassan</h1>
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-blue-500 transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-500 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="w-40 h-40 rounded-full mx-auto mb-8 overflow-hidden border-4 border-blue-500">
            <img 
              src={img1}  
              alt="Saad" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Saad Hassan</h1>
          <p className="text-2xl text-gray-600 mb-8">Meta ads & Social Media Expert</p>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            "Expert in crafting high-impact social media strategies and data-driven Meta ads campaigns that boost reach, engagement, and conversions."
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img 
                  src={img1}  
                  alt="Saad" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hello! I'm Saad Hassan</h3>
              <p className="text-gray-600 mb-4">
                I specialize in creating and optimizing high-performing Meta ads campaigns using data-driven strategies, precise audience targeting, and A/B testing. I manage budgets efficiently, track performance through Pixel and analytics, and craft compelling ads creatives to maximize conversions and ROI.
              </p>
              <p className="text-gray-600 mb-6">
                "Expert in Meta advertising, audience targeting, campaign optimization, retargeting, creative strategy, and data-driven social media marketing."
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Name:</p>
                  <p className="text-gray-600">Saad Hassan</p>
                </div>
                <div>
                  <p className="font-semibold">Email:</p>
                  <p className="text-gray-600">saadhassan585h@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold">Location:</p>
                  <p className="text-gray-600">Lahore, Pakistan</p>
                </div>
                <div>
                  <p className="font-semibold">Experience:</p>
                  <p className="text-gray-600">3+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Paid Advertising', 'Meta Pixel & Events Tracking', 'Keyword Research', 'A/B Testing & Experimentation',
              'Social Media Marketer', 'Creative Strategy for Ads', 'Budget Management & Scaling', 'Campaign Setup & Optimization'
            ].map((skill) => (
              <div key={skill} className="bg-blue-50 text-blue-600 text-center py-4 rounded-lg font-semibold hover:bg-blue-100 cursor-pointer">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditionally render Projects or Project Detail */}
      {currentProject ? (
        <ProjectDetail projectId={currentProject} onClose={closeProject} />
      ) : (
        <section id="projects" className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
              {/* Project 1 */}
              <div className="project-card bg-white rounded-xl shadow-md overflow-hidden w-full md:w-1/2 lg:w-2/5 max-w-md hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 border-blue-400 border-2">
                    <img 
              src={img2}  
              alt="graph" 
              className="w-full h-full object-cover"
            />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Meta Ads Expert</h3>
                  <p className="text-gray-600 mb-4">
I’m a Meta Ads Expert specializing in high-performance Facebook & Instagram campaigns. I optimize targeting, creatives, and budgets to achieve maximum ROI with consistently low cost per result.                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm">Pixels Setup</span>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">Audience Targeting</span>
                    <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded text-sm">A/B Testing</span>
                  </div>
                  <button 
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                    onClick={() => viewProject('meta-ads')}
                  >
                    View Project
                  </button>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-card bg-white rounded-xl shadow-md overflow-hidden w-full md:w-1/2 lg:w-2/5 max-w-md hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 border-blue-400 border-2">
                           <img 
              src={img3}  
              alt="media" 
              className="w-full h-full object-cover"
            />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Social Media Marketing</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive social media marketing strategies that drive engagement, build brand awareness, and generate measurable results across multiple platforms including Facebook, Instagram, and LinkedIn.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm">Content Strategy</span>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm">Community Management</span>
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded text-sm">Analytics</span>
                  </div>
                  {/* <button 
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                    onClick={() => viewProject('social-media')}
                  >
                    View Project
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's Talk</h3>
              <p className="text-gray-600 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Let's discuss how we can work together!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-500 text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="text-gray-800 font-semibold">saadhassan585h@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-500 text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <p className="text-gray-800 font-semibold">+92 308 5844145</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-500 text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="text-gray-800 font-semibold">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Saad Hassan</h3>
          <p className="text-gray-400 mb-6">Meta ads & Social Media Expert</p>
          <p className="text-gray-400">&copy; 2025 Saad Hassan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
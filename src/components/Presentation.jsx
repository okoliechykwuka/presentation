import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, DollarSign, Users, Target, Star, Zap, Shield } from 'lucide-react';
import Button from './Button';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const freelanceGrowthData = [
  { year: 2020, value: 35 },
  { year: 2021, value: 42 },
  { year: 2022, value: 50 },
  { year: 2023, value: 58 },
  { year: 2024, value: 65 },
];

const platformComparisonData = [
  { name: 'Fiverr', users: 4.5, revenue: 361.4 },
  { name: 'Upwork', users: 0.841, revenue: 689 },
];

const skillsDemandData = [
  { name: 'Web Development', value: 30 },
  { name: 'Graphic Design', value: 25 },
  { name: 'Content Writing', value: 20 },
  { name: 'Digital Marketing', value: 15 },
  { name: 'Video Editing', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const slides = [
  {
    title: "Thriving as a Freelancer in 2024",
    content: (
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-teal-600">Navigating the Gig Economy</h2>
        <p className="text-xl mb-8">Strategies for Success in a Rapidly Evolving Landscape</p>
        <img src="src\components\images\Thriving as a Freelancer.png" heaight={1000} width={600} alt="Freelancer working" className="rounded-lg shadow-lg mx-auto" />
      </div>
    )
  },
  
  {
    title: "About Me",
    content: (
      <div className="flex flex-col items-center">
        <img src="src\components\images\profile.jpg" alt="Profile Picture" className="rounded-full shadow-lg mb-6" />
        <h2 className="text-3xl font-bold mb-4 text-teal-600">Okolie Chukwuka Albert</h2>
        <div className="max-w-prose text-lg text-center mb-6">
          <p>I am a skilled Machine Learning Engineer with a deep passion for harnessing data to solve complex problems.</p>
          <p>Beyond my technical expertise, I thrive as a versatile freelancer, delivering impactful solutions across various domains.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Current Company</h3>
            <p>NewWave</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Freelancer on Fiverr</h3>
            <p>My profile: <a href="https://www.fiverr.com/global_techn" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.fiverr.com/global_techn</a></p>
          </div>
        </div>
      </div>
    )
  },
  
  {
    title: "The Freelance Revolution",
    content: (
      <div className="flex flex-col items-center">
        <p className="text-lg mb-4">The freelance workforce has seen unprecedented growth:</p>
        <ResponsiveContainer width={800} height={600}>
          <LineChart data={freelanceGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" name="% of Workforce" stroke="#0d9488" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-center mt-2">Percentage of global workforce engaged in freelancing</p>
      </div>
    )
  },

  {
    title: "Why Choose Freelancing?",
    content: (
      <div className="space-y-6">
        <p className="text-lg">Freelancing offers numerous advantages:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><span className="font-semibold">Flexibility in work schedule:</span> Set your own hours and work when it suits you.</li>
          <li><span className="font-semibold">Choice of projects:</span> Select projects aligned with your interests and skills.</li>
          <li><span className="font-semibold">Control over workload:</span> Manage your workload to maintain work-life balance.</li>
          <li><span className="font-semibold">Potential for higher earnings:</span> Earn based on your skills, effort, and project scope.</li>
          <li><span className="font-semibold">Opportunity for remote work:</span> Work from anywhere, offering geographical independence.</li>
          <li><span className="font-semibold">Skill development:</span> Continuously enhance skills across various projects and industries.</li>
          <li><span className="font-semibold">Building a personal brand:</span> Establish yourself as an expert in your field.</li>
          <li><span className="font-semibold">No office politics:</span> Focus solely on work without corporate bureaucracy.</li>
          <li><span className="font-semibold">Develop business management skills:</span> Gain experience in client management, project pricing, and more.</li>
        </ul>
      </div>
    )
  },
  {
    title: "Exploring Freelancing Opportunities",
    content: (
      <div className="space-y-6">
        <p className="text-lg">Can beginners and students thrive as freelancers?</p>
        <p>Whether you're a seasoned professional or just starting your career, freelancing offers opportunities:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><span className="font-semibold">Beginners:</span> Learn a skill and build your portfolio with smaller projects. Clients often seek beginners for budget-friendly options or are willing to provide training.</li>
          <li><span className="font-semibold">Students:</span> Freelance alongside studies to gain field experience or earn extra income. It's a flexible way to manage workload and build skills outside of academic commitments.</li>
        </ul>
        <p>Earning certificates and completing online courses can substitute for experience when starting out. Explore in-demand skills and learn online to kickstart your freelancing journey.</p>
      </div>
    )
  },  
  
  
  {
    title: "Fiverr vs Upwork: Platform Insights",
    content: (
      <div>
        <p className="text-lg mb-4">Comparing two giants in the freelance marketplace:</p>
        <ResponsiveContainer width={800} height={600}>
          <BarChart data={platformComparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="users" name="Active Users (millions)" fill="#8884d8" />
            <Bar yAxisId="right" dataKey="revenue" name="Annual Revenue ($ millions)" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-center mt-2">Comparison of user base and revenue (2023 data)</p>
      </div>
    )
  },
  {
    title: "Maximizing Your Potential on Fiverr and Upwork",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { icon: Star, title: "Optimize Your Gigs", desc: "Use SEO-friendly titles and descriptions" },
          { icon: Zap, title: "Fast Response Time", desc: "Aim for under 1 hour response" },
          { icon: Users, title: "Build Relationships", desc: "Encourage repeat customers" },
          { icon: Shield, title: "Maintain High Ratings", desc: "Consistently deliver quality work" }
        ].map((item, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-lg shadow-lg">
            <item.icon className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    )
  },
  
  {
    title: "Succeeding on Upwork and Fiverr",
    content: (
      <div className="space-y-6">
        <p className="text-lg">Key strategies for Fiverr success:</p>
        <ul className="list-disc list-inside space-y-4">
          <li>Craft a compelling profile that highlights your unique skills</li>
          <li>Start with lower rates to build your reputation, then gradually increase</li>
          <li>Apply to jobs strategically with tailored proposals</li>
          <li>Utilize Fiverr's skills tests to showcase your expertise</li>
          <li>Maintain open communication with clients throughout projects</li>
        </ul>
        <div className="mt-12 p-12 bg-yellow-100 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Pro Tip:</h3>
          <p className="text-lg">Specialize in a niche to stand out from the competition and command higher rates.</p>
        </div>
      </div>
    )
  },
  
  {
    title: "In-Demand Freelance Skills for 2024",
    content: (
      <div>
        <p className="text-lg mb-4">Top skills driving the freelance market:</p>
        <ResponsiveContainer width={700} height={400}>
          <PieChart>
            <Pie
              data={skillsDemandData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {skillsDemandData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <p className="text-sm text-center mt-2">Distribution of high-demand freelance skills</p>
      </div>
    )
  },
  
  {
    title: "Pricing Strategies for Freelancers",
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Effective Pricing Models:</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-purple-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Hourly Rate</h4>
            <p>Best for: Time-intensive projects with unclear scope</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Project-Based</h4>
            <p>Best for: Well-defined projects with clear deliverables</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Retainer</h4>
            <p>Best for: Ongoing work with regular clients</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Value-Based</h4>
            <p>Best for: High-impact projects where results are quantifiable</p>
          </div>
        </div>
        <p className="text-lg mt-4">Remember: Your rates should reflect your experience, skills, and the value you provide to clients.</p>
      </div>
    )
  },
  {
    title: "Building Your Personal Brand",
    content: (
      <div className="space-y-4">
        <p className="text-lg">A strong personal brand sets you apart in the crowded freelance market:</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-4 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Consistent Online Presence</h3>
            <p>Align your profiles across platforms</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-4 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Showcase Your Work</h3>
            <p>Create a portfolio that highlights your best projects</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-teal-100 p-4 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Share Your Expertise</h3>
            <p>Blog, vlog, or podcast about your field</p>
          </div>
        </div>
        <img src="/api/placeholder/800/200" alt="Personal branding illustration" className="rounded-lg shadow-lg mx-auto mt-4" />
      </div>
    )
  },
  {
    title: "Future of Freelancing: Trends to Watch",
    content: (
      <div className="space-y-4">
        <p className="text-lg mb-4">Stay ahead of the curve with these emerging trends:</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">AI Integration</h3>
            <p>Embrace AI tools to enhance productivity and offer innovative services</p>
          </div>
          <div className="bg-gradient-to-br from-red-100 to-pink-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Remote Collaboration</h3>
            <p>Master virtual team management and cross-cultural communication</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-green-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Blockchain & Crypto</h3>
            <p>Explore opportunities in decentralized platforms and cryptocurrency payments</p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Sustainability Focus</h3>
            <p>Develop skills in sustainable practices and eco-friendly solutions</p>
          </div>
        </div>
        <p className="text-lg mt-4">Adapting to these trends will position you for long-term success in the evolving freelance landscape.</p>
      </div>
    )
  }
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-50 to-purple-50 text-gray-800 p-8">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-teal-600 to-purple-600 p-4">
          <h1 className="text-3xl font-bold text-white">{slides[currentSlide].title}</h1>
        </div>
        <div className="p-8">
          {slides[currentSlide].content}
        </div>
        <div className="flex justify-between p-4 bg-gray-100">
          <Button onClick={prevSlide} variant="outline" className="flex items-center bg-teal-100 text-teal-700 hover:bg-teal-200">
            <ChevronLeft className="mr-2" /> Previous
          </Button>
          <Button onClick={nextSlide} variant="outline" className="flex items-center bg-teal-100 text-teal-700 hover:bg-teal-200">
            Next <ChevronRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
import React from 'react';
import { Mail, Phone, MapPin, Calendar, ExternalLink, Award } from 'lucide-react';

const Profile = () => {
  const profileData = {
    name: 'Mallapuram Venkata Rao',
    email: 'venkatmallapuram7@gmail.com',
    phone: '9177916981',
    location: 'India',
    joinDate: 'January 2024',
    instagram: 'https://www.instagram.com/invites/contact/?igsh=1h6b9sibc6wxd&utm_content=rydjjrd',
    linkedin: 'http://www.linkedin.com/in/mallapuram-venkata-rao-0ab7a42b1'
  };

  const achievements = [
    { title: 'Social Media Growth Expert', description: '47K+ followers across platforms', icon: Award },
    { title: 'High Engagement Rate', description: '8.4% average engagement rate', icon: Award },
    { title: 'Content Creator', description: '500+ posts published', icon: Award },
    { title: 'Analytics Pro', description: 'Data-driven social media strategy', icon: Award }
  ];

  const projects = [
    {
      title: 'Social Media Analytics Tool',
      description: 'Comprehensive dashboard for tracking social media performance across multiple platforms',
      tech: 'Python, React, Data Visualization',
      status: 'Active'
    },
    {
      title: 'Engagement Optimization System',
      description: 'AI-powered system for optimizing post timing and content strategy',
      tech: 'Machine Learning, Python, APIs',
      status: 'In Development'
    },
    {
      title: 'Multi-Platform Content Manager',
      description: 'Unified platform for managing content across Instagram, LinkedIn, and Twitter',
      tech: 'React, Node.js, Social Media APIs',
      status: 'Planning'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Professional Profile</h1>
        <p className="text-white/70 text-lg">Social Media Analytics & Growth Specialist</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            MV
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white mb-4">{profileData.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={20} />
                <span className="text-white/70">{profileData.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-green-400" size={20} />
                <span className="text-white/70">{profileData.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-red-400" size={20} />
                <span className="text-white/70">{profileData.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="text-purple-400" size={20} />
                <span className="text-white/70">Joined {profileData.joinDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h3 className="text-2xl font-semibold text-white mb-6">Social Media Profiles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href={profileData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-lg hover:from-pink-500/30 hover:to-purple-600/30 transition-all duration-300 border border-pink-500/30"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold">Instagram</div>
                <div className="text-white/60 text-sm">View Profile</div>
              </div>
            </div>
            <ExternalLink className="text-white/60" size={20} />
          </a>

          <a 
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-all duration-300 border border-blue-500/30"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold">LinkedIn</div>
                <div className="text-white/60 text-sm">Professional Profile</div>
              </div>
            </div>
            <ExternalLink className="text-white/60" size={20} />
          </a>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h3 className="text-2xl font-semibold text-white mb-6">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <Icon className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{achievement.title}</h4>
                  <p className="text-white/60 text-sm">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Projects */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h3 className="text-2xl font-semibold text-white mb-6">My Projects</h3>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                  project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-white/70 mb-3">{project.description}</p>
              <div className="text-white/50 text-sm">
                <strong>Technologies:</strong> {project.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
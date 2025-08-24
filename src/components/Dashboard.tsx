import React from 'react';
import { TrendingUp, Users, Heart, Share2, MessageCircle, Instagram, Linkedin, Twitter } from 'lucide-react';
import MetricCard from './MetricCard';
import Chart from './Chart';

const Dashboard = () => {
  const metrics = [
    {
      title: 'Total Followers',
      value: '47.2K',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Engagement Rate',
      value: '8.4%',
      change: '+2.1%',
      trend: 'up',
      icon: Heart,
      color: 'pink'
    },
    {
      title: 'Total Reach',
      value: '156.8K',
      change: '+18.7%',
      trend: 'up',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'Post Interactions',
      value: '12.9K',
      change: '+5.3%',
      trend: 'up',
      icon: MessageCircle,
      color: 'purple'
    }
  ];

  const platforms = [
    {
      name: 'Instagram',
      icon: Instagram,
      followers: '28.5K',
      engagement: '9.2%',
      posts: 156,
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      followers: '12.8K',
      engagement: '7.1%',
      posts: 89,
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      followers: '5.9K',
      engagement: '6.8%',
      posts: 234,
      color: 'from-cyan-400 to-blue-500'
    }
  ];

  const engagementData = [
    { month: 'Jan', likes: 2400, shares: 800, comments: 600 },
    { month: 'Feb', likes: 2800, shares: 950, comments: 750 },
    { month: 'Mar', likes: 3200, shares: 1100, comments: 890 },
    { month: 'Apr', likes: 2900, shares: 980, comments: 720 },
    { month: 'May', likes: 3800, shares: 1350, comments: 1050 },
    { month: 'Jun', likes: 4200, shares: 1500, comments: 1200 }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Social Media Dashboard</h1>
        <p className="text-white/70 text-lg">Track your social media performance across all platforms</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Platform Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {platforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center mb-4`}>
                <Icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{platform.name}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70">Followers</span>
                  <span className="text-white font-semibold">{platform.followers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Engagement</span>
                  <span className="text-green-400 font-semibold">{platform.engagement}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Posts</span>
                  <span className="text-white font-semibold">{platform.posts}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Engagement Chart */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h3 className="text-2xl font-semibold text-white mb-6">Engagement Trends</h3>
        <Chart data={engagementData} />
      </div>

      {/* Recent Activity */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h3 className="text-2xl font-semibold text-white mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { platform: 'Instagram', action: 'New post received 2.1K likes', time: '2 hours ago', color: 'pink' },
            { platform: 'LinkedIn', action: 'Article shared 156 times', time: '5 hours ago', color: 'blue' },
            { platform: 'Twitter', action: 'Tweet got 89 retweets', time: '1 day ago', color: 'cyan' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full bg-${activity.color}-500`}></div>
                <div>
                  <p className="text-white font-medium">{activity.platform}</p>
                  <p className="text-white/70 text-sm">{activity.action}</p>
                </div>
              </div>
              <span className="text-white/50 text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
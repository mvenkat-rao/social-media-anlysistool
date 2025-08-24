import React from 'react';
import { Target, TrendingUp, Users2, Clock } from 'lucide-react';
import PieChart from './PieChart';
import BarChart from './BarChart';

const Analytics = () => {
  const insights = [
    {
      title: 'Peak Engagement Time',
      value: '6-8 PM',
      description: 'Best time to post for maximum reach',
      icon: Clock,
      color: 'orange'
    },
    {
      title: 'Top Content Type',
      value: 'Images',
      description: '73% higher engagement than videos',
      icon: Target,
      color: 'green'
    },
    {
      title: 'Audience Growth',
      value: '+847',
      description: 'New followers this month',
      icon: Users2,
      color: 'blue'
    },
    {
      title: 'Trending Hashtag',
      value: '#TechTrends',
      description: '2.3x above average performance',
      icon: TrendingUp,
      color: 'purple'
    }
  ];

  const audienceData = [
    { name: 'Age 18-24', value: 25, color: '#3B82F6' },
    { name: 'Age 25-34', value: 35, color: '#8B5CF6' },
    { name: 'Age 35-44', value: 22, color: '#10B981' },
    { name: 'Age 45-54', value: 12, color: '#F59E0B' },
    { name: 'Age 55+', value: 6, color: '#EF4444' }
  ];

  const contentPerformance = [
    { type: 'Images', engagement: 8.4, posts: 45 },
    { type: 'Videos', engagement: 6.2, posts: 28 },
    { type: 'Carousels', engagement: 9.1, posts: 22 },
    { type: 'Stories', engagement: 7.8, posts: 56 }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Advanced Analytics</h1>
        <p className="text-white/70 text-lg">Deep insights into your social media performance</p>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className={`w-12 h-12 rounded-lg bg-${insight.color}-500/20 flex items-center justify-center mb-4`}>
                <Icon className={`text-${insight.color}-400`} size={24} />
              </div>
              <h3 className="text-white/70 text-sm font-medium mb-1">{insight.title}</h3>
              <p className="text-2xl font-bold text-white mb-2">{insight.value}</p>
              <p className="text-white/60 text-sm">{insight.description}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Audience Demographics */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <h3 className="text-2xl font-semibold text-white mb-6">Audience Demographics</h3>
          <div className="flex items-center justify-center">
            <PieChart data={audienceData} />
          </div>
          <div className="mt-6 space-y-2">
            {audienceData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></div>
                  <span className="text-white/70 text-sm">{item.name}</span>
                </div>
                <span className="text-white font-semibold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Performance */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <h3 className="text-2xl font-semibold text-white mb-6">Content Performance</h3>
          <BarChart data={contentPerformance} />
          <div className="mt-6 space-y-3">
            {contentPerformance.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span className="text-white font-medium">{item.type}</span>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">{item.engagement}%</div>
                  <div className="text-white/60 text-sm">{item.posts} posts</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h3 className="text-2xl font-semibold text-white mb-6">Monthly Performance Report</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">156.8K</div>
            <div className="text-white/70">Total Impressions</div>
            <div className="text-green-400 text-sm mt-1">↑ 18.7% from last month</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">12.9K</div>
            <div className="text-white/70">Engagements</div>
            <div className="text-green-400 text-sm mt-1">↑ 5.3% from last month</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">8.4%</div>
            <div className="text-white/70">Engagement Rate</div>
            <div className="text-green-400 text-sm mt-1">↑ 2.1% from last month</div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h3 className="text-2xl font-semibold text-white mb-6">AI-Powered Recommendations</h3>
        <div className="space-y-4">
          {[
            {
              title: 'Optimal Posting Schedule',
              description: 'Post 3-4 times per week between 6-8 PM for maximum engagement',
              priority: 'High',
              color: 'red'
            },
            {
              title: 'Content Strategy',
              description: 'Focus more on carousel posts - they show 9.1% engagement rate',
              priority: 'Medium',
              color: 'yellow'
            },
            {
              title: 'Hashtag Optimization',
              description: 'Use trending hashtags like #TechTrends to boost visibility by 2.3x',
              priority: 'Medium',
              color: 'yellow'
            }
          ].map((rec, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-semibold">{rec.title}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${rec.color}-500/20 text-${rec.color}-400`}>
                  {rec.priority}
                </span>
              </div>
              <p className="text-white/70">{rec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
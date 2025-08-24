import React from 'react';

interface BarData {
  type: string;
  engagement: number;
  posts: number;
}

interface BarChartProps {
  data: BarData[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const maxEngagement = Math.max(...data.map(d => d.engagement));

  return (
    <div className="h-64 flex items-end justify-between space-x-4">
      {data.map((item, index) => {
        const height = (item.engagement / maxEngagement) * 100;
        const colors = ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-orange-500'];
        
        return (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className={`w-full ${colors[index]} rounded-t-lg transition-all duration-500 hover:scale-105 flex items-end justify-center pb-2`}
              style={{ height: `${height}%`, minHeight: '20px' }}
            >
              <span className="text-white text-xs font-bold">{item.engagement}%</span>
            </div>
            <div className="text-center mt-2">
              <div className="text-white/80 text-sm font-medium">{item.type}</div>
              <div className="text-white/50 text-xs">{item.posts} posts</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BarChart;
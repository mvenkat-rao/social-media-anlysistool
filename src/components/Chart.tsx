import React from 'react';

interface ChartData {
  month: string;
  likes: number;
  shares: number;
  comments: number;
}

interface ChartProps {
  data: ChartData[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.flatMap(d => [d.likes, d.shares, d.comments]));

  return (
    <div className="h-80 flex items-end justify-between space-x-2">
      {data.map((item, index) => (
        <div key={index} className="flex-1 flex items-end space-x-1">
          <div className="flex flex-col items-center space-y-1 flex-1">
            <div
              className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-md transition-all duration-500 hover:from-blue-400 hover:to-blue-300"
              style={{ height: `${(item.likes / maxValue) * 100}%` }}
              title={`Likes: ${item.likes}`}
            />
            <span className="text-blue-400 text-xs font-medium">{item.likes}</span>
          </div>
          <div className="flex flex-col items-center space-y-1 flex-1">
            <div
              className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-md transition-all duration-500 hover:from-green-400 hover:to-green-300"
              style={{ height: `${(item.shares / maxValue) * 100}%` }}
              title={`Shares: ${item.shares}`}
            />
            <span className="text-green-400 text-xs font-medium">{item.shares}</span>
          </div>
          <div className="flex flex-col items-center space-y-1 flex-1">
            <div
              className="w-full bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-md transition-all duration-500 hover:from-purple-400 hover:to-purple-300"
              style={{ height: `${(item.comments / maxValue) * 100}%` }}
              title={`Comments: ${item.comments}`}
            />
            <span className="text-purple-400 text-xs font-medium">{item.comments}</span>
          </div>
          <div className="text-center mt-2">
            <span className="text-white/60 text-xs">{item.month}</span>
          </div>
        </div>
      ))}
      
      {/* Legend */}
      <div className="absolute bottom-0 right-0 flex space-x-4 text-xs">
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span className="text-white/60">Likes</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span className="text-white/60">Shares</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-purple-500 rounded"></div>
          <span className="text-white/60">Comments</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;
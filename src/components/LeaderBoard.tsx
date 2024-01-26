import { platforms } from '../utils/constants';
import { Platform } from './Platform';

export const LeaderBoard = () => {
  return (
    <div className="bg-white w-[496px] rounded-[14px] h-full flex flex-col gap-5 p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg text-darkText">Top Platforms</h3>
        <p className="text-primary text-lg font-medium">See All</p>
      </div>
      <div className="overflow-scroll flex flex-col gap-5">
        {platforms.map((platform, index) => (
          <Platform key={index} {...platform} />
        ))}
      </div>
    </div>
  );
};

import { Layout } from './components/Layout';
import { SummaryCard } from './components/SummaryCard';
import { LeaderBoard } from './components/LeaderBoard';
import { summary } from './utils/constants';

export const App = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h2 className="">Sales Trend</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 shrink-0 overflow-y-scroll h-full overflow-x-hidden rounded-[14px]">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mr-4 rounded-[14px]">
          {summary.map((details, index) => (
            <SummaryCard key={index} {...details} />
          ))}
        </div>
        <LeaderBoard />
      </div>
    </Layout>
  );
};

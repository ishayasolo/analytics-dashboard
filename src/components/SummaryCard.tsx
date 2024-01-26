import { Trend } from '../assets/Trend';
import bearish from '../assets/decline.svg';
import bullish from '../assets/incline.svg';
import { formatNumber } from '../utils/helpers';

export interface SummaryCardProps {
  icon: string;
  isDeclining?: boolean;
  title: string;
  amount: number;
  rate: number;
  isCurrency?: boolean;
}

export const SummaryCard = ({
  icon,
  isDeclining,
  title,
  amount,
  rate,
  isCurrency = false,
}: SummaryCardProps) => {
  return (
    <div className="rounded-[14px] border p-4 bg-white flex flex-col gap-2.5 w-60 h-48 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-full border flex items-center justify-center">
          <img src={icon} alt="card icon" />
        </div>
        <img src={isDeclining ? bearish : bullish} alt="chart indicator" />
      </div>
      <span className="text-[#898989] text-lg font-medium capitalize">
        {title}
      </span>
      <span className="text-[#3A3F51] text-2xl font-semibold">
        {isCurrency ? formatNumber(amount, '$') : formatNumber(amount)}
      </span>
      <div className="flex items-center gap-2.5 text-sm text-[#606060]">
        <div
          className={`${
            isDeclining ? 'bg-error text-error' : 'bg-success text-success'
          } bg-opacity-10 font-medium text-xs flex items-center gap-1 rounded-full px-2 py-1`}
        >
          <span className={isDeclining ? 'transform -scale-y-100' : ''}>
            <Trend />
          </span>
          {rate}
        </div>
        vs. previous month
      </div>
    </div>
  );
};

import { formatNumber } from "../utils/helpers";

export interface PlatformProps {
  name: string;
  progress: number;
  amount: number;
  increment: number;
  backgroundColor: string;
}

export const Platform = ({
  name,
  progress,
  backgroundColor,
	amount,
	increment,
}: PlatformProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-semibold">{name}</h4>
      <div className="h-3 rounded-full w-full bg-gray-200 mt-0.5">
        <div
          className="h-full rounded-full"
          style={{ width: `${progress}%`, backgroundColor }}
        />
      </div>
      <div className="flex justify-between items-center text-gray-600 text-lg">
        <span className="">{formatNumber(amount, '$')}</span>
        <span className="">+{increment}%</span>
      </div>
    </div>
  );
};

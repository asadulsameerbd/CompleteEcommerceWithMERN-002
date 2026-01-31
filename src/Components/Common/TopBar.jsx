import { BsMeta } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";

const TopBar = () => {
  return (
    <div className="bg-primary hidden md:block">
      <div className="w-full md:container mx-auto flex justify-between  px-4 py-2">
        {/* icon left col */}
        <div className="flex items-center gap-2">
          <BsMeta className="text-secondary" />
          <RiInstagramFill className="text-secondary" />
          <TfiTwitter className="text-secondary" />
        </div>

        {/* middle col text */}
        <div>
          <p className="text-secondary font-primary text-sm">
            We ship worldwide - Fast and Reliable Shipping!
          </p>
        </div>

        {/* right col */}
        <div>
          <p className="text-secondary font-primary ">(+880)15575-65648</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

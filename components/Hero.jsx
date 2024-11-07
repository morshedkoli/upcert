// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
  BriefcaseIcon,
  FlowerIcon,
  HeartIcon,
  LightbulbIcon,
  MountainSnow,
  Search,
  SearchIcon,
  SettingsIcon,
} from "lucide";

export default function Hero() {
  return (
    <>
      <div className="bg-gradient-to-t py-20 px-4 font-[sans-serif]">
        <div className=" w-full mx-auto text-center">
          <h2 className="text-gray-800 text-4xl md:text-5xl font-extrabold mb-6 leading-[45px]">
            Check Authenticity Of Certficate
          </h2>
          <p className="text-base text-gray-600">
            Enter your certificate number to find your certificate is original
            or Not.
          </p>
          <div className="mt-12 bg-white flex items-center sm:p-4 p-2 max-w-xl mx-auto rounded-2xl border border-gray-300">
            <input
              type="text"
              placeholder="Enter Certificate No."
              className="w-full bg-transparent py-4 px-2 text-gray-800 text-base border-none outline-none"
            />
            <button className="bg-gray-700 hover:bg-gray-800 text-white text-base font-semibold py-4 px-4 sm:px-8 rounded-xl focus:outline-none">
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

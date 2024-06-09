import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

const tabs = [{title:"Home", content: <></>},{title: "Search"}, {title:"About"}, {title:"FAQ"}];
interface ChipProps {
    text?: string 
    selected?: boolean
    setSelected?:  Dispatch<SetStateAction<string>>
    tabs?: {
      title: string,
      content: JSX.Element
    }[]
}
const ChipTabs = ({tabs}: ChipProps) => {
  const [selected, setSelected] = useState(tabs && tabs[0]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const Render = () => tabs && tabs[activeTabIndex].content;

  return (
    <div  className="flex flex-col md:items-center">

    <div className="px-0 my-5  flex items-center gap-x-2 !overflow-x-scroll no-scrollbar border-b border-  bg-[#F2F2F2] rounded-[15px]">
      {tabs?.map((tab: {title: string}, idx: number) => (
        <Chip
        text={tab.title}
        selected={activeTabIndex === idx}
        setSelected={() => {setSelected(selected); setActiveTabIndex(idx)}}
        key={idx}
        />
      ))}
    </div>
    <div className="overflow-x-scroll">
      <Render />
    </div>
      </div>
  );
};

const Chip = ({ text, selected, setSelected}: ChipProps) => {
  return (
    <span className="">

      <button
      onClick={() => setSelected && setSelected(text || '')} 
      className={`${
        selected
          ? "text-[#202229] bg-[#C7F4C2] font-semibold"
          : " font-medium"
      } text-base leading-[23.78px] transition-colors px-2.5 py-3 rounded-[15px] relative text-[#202229]`}
    >
      <span className="relative z-10 px-8">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className={`absolute inset-0 z-0 bg-gradient-to-r  rounded-[15px] ${selected ? 'bg-[#C7F4C2] w-full rounded-[15px]' : ''}` }
          // className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[15px]"
        // className={`relative block w-full z-10 ${selected ? 'bg-[#E7FDF3] block p-3 rounded-lg !w-full ' : 'p-3'}`}

        ></motion.span>
      )}
    </button>
    </span>
  );
};

export default ChipTabs;
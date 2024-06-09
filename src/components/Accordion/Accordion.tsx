import {MutableRefObject, ReactNode, useRef, useState} from "react";
import CollapseIcon from "/public/acc-minus.svg";
import PlusIcon from "/public/acc-plus.svg";
import Image from "next/image";
const index = 1

type AccordionProps = {
  heading: string | ReactNode;
  children: ReactNode;
  showHeader?: boolean;
  open?: boolean;
  activeClass?: string;
  otherClasses?: string;
};

function Accordion({
  heading,
  showHeader = true,
  open = false,
  children,
  activeClass = "",
  otherClasses,
}: AccordionProps) {
  const [openAccordion, setopenAccordion] = useState(false);

  const toggleAccordion = () => {
    setopenAccordion(prev => !prev);
  };
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <div
      className={`relative bg-transparent border border-[#F0F0F0] rounded-[7px] max-w-5xl mx-auto mb-1  ${
        openAccordion ? activeClass : ""
      } ${otherClasses || ""}`}
    >
      {showHeader && (
        <div
          className={`w-full rounded-[7px] px-3 ${
            open || openAccordion
              ? ""
              : ""
          }`}
        >
          <div
            onClick={toggleAccordion}
            className={`flex cursor-pointer items-center justify-between py-0 space-x-3 bg-transparent`}
          >
            <span style={{flexGrow: 2}} className={`font-normal my-4 text-base text-[#202229] flex items-center ${open || openAccordion && '!text-[#202229]'}`}>
            {(open || openAccordion) ? <img className='bg-[#8BA4FD] p-4 rounded-full mr-3' src="accord-active.svg" alt="" /> : <img className='bg-[#ECECEC] p-4 rounded-full mr-3' src="accord-inactive.svg" alt="" />}{heading}{" "}
            </span>
            <button type="button" className="hidden sm:block">
              {/* {open || openAccordion ? (
                <Image src={CollapseIcon} color="#FFEEC8" width={18.67} height={16.67} alt="minus" />
              ) : (
                <Image src={PlusIcon} color="#FFEEC8" width={18.67} height={16.67} alt="plus" />
              )} */}
            </button>
          </div>
        </div>
      )}
      <div
        ref={ref}
        style={{
          maxHeight: open || openAccordion ? ref.current.scrollHeight : 0,
        }}
        className={` ${(open || openAccordion) && 'bg-white'} relative border border-[#F0F0F0] overflow-hidden transition-all duration-[0.7rem] bg-[#FAFAFA]`}>
        <div className="px-5 p-4">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
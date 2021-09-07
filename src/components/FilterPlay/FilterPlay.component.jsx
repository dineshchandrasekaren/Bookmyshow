import { Disclosure } from "@headlessui/react";
import { BiChevronUp,BiChevronDown } from "react-icons/bi";


const FilterPlay = (props) => (
       
        <Disclosure>
            {({ open }) => (
                <><div className="bg-white shadow ">

                        <div className="border-b-2 border-gray-200">
                                <Disclosure.Button className="flex gap-3 p-3 items-center text-md ">
                                        {open ? <BiChevronUp /> : <BiChevronDown />}<span className={`${open? "text-red-500":"text-black" }`}>{props.title}</span>
                                        </Disclosure.Button>
                        </div>
                               

                                <Disclosure.Panel className="flex gap-3 pl-10 flex-wrap py-2">
                                        
                                        {props.panel.map(tag => (
                                      
                                                <span className="flex mb-2 hover:border-gray-300 rounded px-3 py-1 border-2 border-gray-200 text-red-500 border-solid">{tag}</span>
                               
                                        ))}
                                        
                                        </Disclosure.Panel>
                                        
                </div>
                </>
      )}
        </Disclosure>
       
);
    
export default FilterPlay;

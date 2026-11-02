"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type Capability = {
  id: number;
  title: string;
  description: string;
};

type CapabilitiesAccordionProps = {
  capabilities: Capability[];
};

export default function CapabilitiesAccordion({
  capabilities,
}: CapabilitiesAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(
    capabilities[0]?.id ?? null
  );

  return (
    <div className="mt-8 flex flex-col gap-3">
      {capabilities.map((capability) => {
        const open = openId === capability.id;
        const panelId = `contact-capability-${capability.id}`;

        return (
          <div
            key={capability.id}
            className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
              open
                ? "border-red-500/50 bg-slate-900"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <button
              type="button"
              onClick={() =>
                setOpenId((currentId) =>
                  currentId === capability.id ? null : capability.id
                )
              }
              aria-expanded={open}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-4 p-4 text-left font-semibold transition-colors hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 sm:p-5"
            >
              <span>{capability.title}</span>
              <FiChevronDown
                className={`shrink-0 text-xl text-red-400 transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={panelId}
              aria-hidden={!open}
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-5 leading-7 text-slate-300 sm:px-5">
                  {capability.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

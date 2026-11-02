"use client";

import { useState } from "react";

type Objective = {
  title: string;
  description: string;
};

type ObjectiveTabsProps = {
  objectives: Objective[];
  label: string;
};

export default function ObjectiveTabs({
  objectives,
  label,
}: ObjectiveTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeObjective = objectives[activeIndex];

  return (
    <div className="relative mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
      <div
        className="flex flex-wrap border-b border-slate-200 bg-slate-50 p-2"
        role="group"
        aria-label={label}
      >
        {objectives.map((objective, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={objective.title}
              type="button"
              aria-pressed={isActive}
              aria-controls="objective-description"
              onClick={() => setActiveIndex(index)}
              className={`min-h-11 flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:px-4 ${
                isActive
                  ? "bg-red-700 text-white shadow-sm"
                  : "text-slate-600 hover:bg-white hover:text-slate-950"
              }`}
            >
              {objective.title}
            </button>
          );
        })}
      </div>

      <div
        id="objective-description"
        className="min-h-28 p-5 sm:p-6"
        aria-live="polite"
      >
        {activeObjective && (
          <p className="leading-7 text-slate-700">
            {activeObjective.description}
          </p>
        )}
      </div>
    </div>
  );
}

import React from "react";

import { format } from "../utils/dateTimeFormat";

export function Experience({ work }) {
  return (
    <>
      {!!work?.length && (
        <section className="section">
          <h2 className="section-title text-xl mt-4 text-gray-500">
            Experience
          </h2>
          <section id="work">
            {work.map((item, i) => (
              <React.Fragment key={i}>
                {item.company && (
                  <header className="relative">
                    <h3
                      className={`name text-xl mt-6 font-semibold border-l-4 pl-4 ${
                        [
                          `border-purple-600`,
                          `border-purple-500`,
                          `border-purple-400`,
                          `border-purple-300`,
                          `border-purple-200`,
                          `border-purple-100`,
                          `border-purple-50`,
                        ][i < 6 ? i : 6]
                      }`}
                    >
                      {item.company}
                    </h3>
                    {item.website && (
                      <div className="icon website text-sm absolute top-0 right-0">
                        <a href={item.website} className="text-purple-600	">
                          {item.website}
                        </a>
                      </div>
                    )}
                  </header>
                )}
                <div className="item pl-5">
                  {item.position && (
                    <div className="position text-lg text-gray-600 font-normal">
                      {item.position}
                    </div>
                  )}
                  <div className="date text-gray-600 text-sm">
                    {item.startDate && (
                      <span className="startDate">
                        {format(item.startDate)}{" "}
                      </span>
                    )}
                    {item.endDate ? (
                      <span className="endDate">- {format(item.endDate)}</span>
                    ) : (
                      <span className="endDate">- Present</span>
                    )}
                  </div>

                  {item.summary && (
                    <div className="summary my-4">
                      <p className="text-gray-800 text-lg mt-4 whitespace-pre-line text-justify	">
                        {item.summary}
                      </p>
                    </div>
                  )}
                  {!!item.highlights?.length && (
                    <ul className="highlights font-mono text-sm text-gray-600">
                      {item.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </React.Fragment>
            ))}
          </section>
        </section>
      )}
    </>
  );
}

import React from "react";

import { format } from "../utils/dateTimeFormat";

export function Experience({ work }) {
  return (
    <>
      {!!work?.length && (
        <section className="section">
          <h2 className="section-title text-xl mt-4 text-gray-400">
            Experience
          </h2>
          <section id="work">
            {work.map((item, i) => (
              <React.Fragment key={i}>
                {item.company && (
                  <header>
                    <h3 className="name text-xl mt-6 font-semibold">
                      {item.company}
                    </h3>
                  </header>
                )}
                <div className="item">
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
                  {item.website && (
                    <div className="icon website text-sm">
                      <a href={item.website} className="text-purple-600	">
                        {item.website}
                      </a>
                    </div>
                  )}

                  {item.summary && (
                    <div className="summary my-4">
                      <p className="text-gray-800 text-lg mt-4 whitespace-pre-line">
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

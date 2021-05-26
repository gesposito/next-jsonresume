import React from "react";

import { format } from "../utils/dateTimeFormat";

export function Education({ education }) {
  return (
    <>
      {!!education?.length && (
        <section className="section">
          <h2 className="section-title text-xl mt-4 text-gray-500">
            Education
          </h2>
          <section id="education">
            {education.map((item, i) => (
              <React.Fragment key={i}>
                <header>
                  {item.institution && (
                    <h3
                      className={`institution text-lg mt-6 font-semibold border-l-4 pl-4 border-purple-100`}
                    >
                      {item.institution}
                    </h3>
                  )}
                </header>
                <div className="item pl-5">
                  <div className="date text-gray-600 text-sm">
                    {item.startDate && (
                      <span className="startDate">
                        {format(item.startDate)}{" "}
                      </span>
                    )}
                    {item.endDate ? (
                      <span className="endDate">
                        {item.startDate && "-"} {format(item.endDate)}
                      </span>
                    ) : (
                      <span className="endDate">- Present</span>
                    )}
                  </div>
                  <div className="item">
                    {item.studyType && (
                      <div className="studyType">{item.studyType}</div>
                    )}
                    {item.area && <div className="area">{item.area}</div>}
                    {item.gpa && (
                      <div>
                        <span className="gpa"> GPA: {item.gpa}</span>
                      </div>
                    )}
                    {!!item.courses?.length && (
                      <ul className="courses">
                        {item.courses.map((item, i) => (
                          <li
                            className="mr-1 mb-1 text-sm bg-gray-100 p-1.5 rounded border-gray-300 border border-l-0 border-t-0 inline-block"
                            key={i}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </section>
        </section>
      )}
    </>
  );
}

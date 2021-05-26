import React from "react";

import { format } from "../utils/dateTimeFormat";

export function Education({ education }) {
  return (
    <>
      {!!education?.length && (
        <section className="section">
          <h2 className="section-title">Education</h2>
          <section id="education">
            {education.map((item, i) => (
              <React.Fragment key={i}>
                <header>
                  {item.institution && (
                    <h3 className="institution">{item.institution}</h3>
                  )}
                </header>
                <div className="date">
                  {item.startDate && (
                    <span className="startDate">{format(item.startDate)} </span>
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
                        <React.Fragment key={i}>
                          <li>{item}</li>
                        </React.Fragment>
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

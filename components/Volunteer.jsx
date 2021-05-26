import React from "react";

export function Volunteer({ volunteer }) {
  return (
    <>
      {!!volunteer?.length && (
        <section className="section">
          <h2 className="section-title">Volunteer</h2>
          <section id="volunteer">
            {volunteer.map((item, i) => (
              <React.Fragment key={i}>
                {item.organization && (
                  <header>
                    <h3 className="company">{item.organization}</h3>
                    <div className="date">
                      {item.startDate && (
                        <span className="startDate">{item.MY}</span>
                      )}
                      {item.endDate ? (
                        <span className="endDate">- {item.MY}</span>
                      ) : (
                        <span className="endDate">- Present</span>
                      )}
                    </div>
                  </header>
                )}
                <div className="item">
                  {item.position && (
                    <div className="position">{item.position}</div>
                  )}
                  {item.website && (
                    <div className="website">
                      <a href={item.website}>{item.website}</a>
                    </div>
                  )}
                  {item.summary && (
                    <div className="summary">
                      <p>{item.summary}</p>
                    </div>
                  )}
                  {!!item.highlights?.length && (
                    <ul className="highlights">
                      {item.highlights.map((item, i) => (
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

import React from "react";

export function Skills({ skills }) {
  return (
    <>
      {!!skills?.length && (
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <section id="skills">
            {skills.map((item, i) => (
              <React.Fragment key={i}>
                <div className="item">
                  {item.name && <div className="name">{item.name}</div>}
                  {item.level && (
                    <div className={"level " + item.level.toLowerCase()}>
                      <em>{item.level}</em>
                      <div className="bar" />
                    </div>
                  )}
                  {!!item.keywords?.length && (
                    <ul className="keywords">
                      {item.keywords.map((item, i) => (
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

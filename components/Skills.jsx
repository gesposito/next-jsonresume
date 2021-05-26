import React from "react";

export function Skills({ skills }) {
  return (
    <>
      {!!skills?.length && (
        <section className="section">
          <h2 className="section-title text-xl mt-4 text-gray-400">Skills</h2>
          <section id="skills">
            {skills.map((item, i) => (
              <React.Fragment key={i}>
                <div className="item">
                  {item.name && (
                    <div className="name text-xl mt-6 font-semibold">
                      {item.name}
                    </div>
                  )}
                  {item.level && (
                    <div className={"mt-4 level " + item.level.toLowerCase()}>
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

import React from "react";

export function Interests({ interests }) {
  return (
    <>
      {!!interests?.length && (
        <section className="section">
          <h2 className="section-title" className="section-title">
            Interests
          </h2>
          <section id="interests">
            {interests.map((item, i) => (
              <React.Fragment key={i}>
                <div className="item">
                  {item.name && <div className="name">{item.name}</div>}
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

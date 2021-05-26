import React from "react";

export function Interests({ interests }) {
  return (
    <>
      {!!interests?.length && (
        <section className="section">
          <h2 className="section-title text-xl mt-4 text-gray-500">
            Interests
          </h2>
          <section id="interests" className="pl-5">
            {interests.map((item, i) => (
              <React.Fragment key={i}>
                <div className="item mt-4">
                  {item.name && <div className="name ">{item.name}</div>}
                  {!!item.keywords?.length && (
                    <ul className="keywords">
                      {item.keywords.map((item, i) => (
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

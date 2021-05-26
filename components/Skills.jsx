import React from "react";

export function Skills({ skills }) {
  return (
    <>
      {!!skills?.length && (
        <section className="section">
          <h2 className="section-title text-xl mt-4 text-gray-500">Skills</h2>
          <section id="skills" className="pl-5">
            {skills.map((item, i) => (
              <div className="item" key={i}>
                {item.name && (
                  <div className="name text-lg mt-6 font-semibold">
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
                      <li
                        key={i}
                        className="mr-1 mb-1 text-sm bg-gray-100 p-1.5 rounded border-gray-300 border border-l-0 border-t-0 inline-block"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        </section>
      )}
    </>
  );
}

import React from "react";

export function Languages({ languages }) {
  return (
    <>
      {!!languages?.length && (
        <section className="section">
          <h2 className="section-title text-xl mt-4 text-gray-400">
            Languages
          </h2>
          <section id="languages">
            {languages.map((item, i) => (
              <div className="item" key={i}>
                {item.language && (
                  <div className="mt-4 language">{item.language}</div>
                )}
                {item.fluency && (
                  <div className="fluency">
                    <em>{item.fluency}</em>
                  </div>
                )}
              </div>
            ))}
          </section>
        </section>
      )}
    </>
  );
}

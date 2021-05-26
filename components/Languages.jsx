import React from "react";

export function Languages({ languages }) {
  return (
    <>
      {!!languages?.length && (
        <section className="section">
          <h2 className="section-title text-xl mt-4 text-gray-500">
            Languages
          </h2>
          <section id="languages" className="flex pl-5">
            {languages.map((item, i) => (
              <div className="item mr-6" key={i}>
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

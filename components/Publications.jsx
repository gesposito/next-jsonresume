import React from "react";

export function Publications({ publications }) {
  return (
    <>
      {!!publications?.length && (
        <section className="section">
          <h2 className="section-title text-xl mt-4 text-gray-500">
            Publications
          </h2>
          <section id="publications" className="pl-5">
            {publications.map((item, i) => (
              <div className="item" key={i}>
                {item.name && (
                  <span className="name text-xl mt-6 font-semibold">
                    {item.website ? (
                      <span className="website">
                        <a href={item.website}>{item.name}</a>
                      </span>
                    ) : (
                      <> {item.name}</>
                    )}
                  </span>
                )}
                {item.publisher && (
                  <span className="publisher">in {item.publisher},</span>
                )}
                {item.releaseDate && (
                  <span className="date text-gray-600 text-sm">{item.DMY}</span>
                )}
                {item.summary && (
                  <div className="summary my-4">
                    <p className="text-gray-800 text-lg mt-4 whitespace-pre-line text-justify	">
                      {item.summary}
                    </p>
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

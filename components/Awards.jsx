import React from "react";

export function Awards({ awards }) {
  return (
    <>
      {!!awards?.length && (
        <section className="section">
          <h2 className="section-title text-xl mt-4 text-gray-400">Awards</h2>
          <section id="awards">
            {awards.map((item, i) => (
              <React.Fragment key={i}>
                {item.date && (
                  <div className="date text-gray-600 text-sm">{item.DMY}</div>
                )}
                <div className="item">
                  {item.title && <div className="title">{item.title}</div>}
                  {item.awarder && (
                    <div className="awarder">{item.awarder}</div>
                  )}
                  {item.summary && (
                    <div className="summary my-4">
                      <p className="text-gray-800 text-lg mt-4 whitespace-pre-line">
                        {item.summary}
                      </p>
                    </div>
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

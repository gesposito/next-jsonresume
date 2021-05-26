import React from "react";

export function Awards({ awards }) {
  return (
    <>
      {!!awards?.length && (
        <section className="section">
          <h2 className="section-title">Awards</h2>
          <section id="awards">
            {awards.map((item, i) => (
              <React.Fragment key={i}>
                {item.date && <div className="date">{item.DMY}</div>}
                <div className="item">
                  {item.title && <div className="title">{item.title}</div>}
                  {item.awarder && (
                    <div className="awarder">{item.awarder}</div>
                  )}
                  {item.summary && (
                    <div className="summary">
                      <p>{item.summary}</p>
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

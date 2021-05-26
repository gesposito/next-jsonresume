import React from "react";

export function Publications({ publications }) {
  return (
    <>
      {!!publications?.length && (
        <section className="section">
          <h2 className="section-title">Publications</h2>
          <section id="publications">
            {publications.map((item, i) => (
              <React.Fragment key={i}>
                <div className="item">
                  {item.name && (
                    <span className="name">
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
                  {item.releaseDate && <span className="date">{item.DMY}</span>}
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

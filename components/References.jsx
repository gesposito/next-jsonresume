import React from "react";

export function References({ references }) {
  return (
    <>
      {!!references?.length && (
        <section className="section">
          <h2 className="section-title text-xl mt-4 text-gray-400">
            References
          </h2>
          <section id="references">
            {references.map((item, i) => (
              <div className="item" key={i}>
                {item.reference && (
                  <blockquote className="reference">
                    “ {item.reference} ”
                  </blockquote>
                )}
                {item.name && (
                  <div className="name text-xl mt-6 font-semibold">
                    {item.name}
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

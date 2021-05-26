import React from "react";

export function References({ references }) {
  return (
    <>
      {!!references?.length && (
        <section className="section">
          <h2 className="section-title text-xl mt-4 text-gray-500">
            References
          </h2>
          <section id="references" className="mt-4">
            {references.map((item, i) => (
              <div className="item border-l-4 border-red-300 mt-6 pl-3" key={i}>
                {item.reference && (
                  <blockquote className="reference italic">
                    “ {item.reference} ”
                  </blockquote>
                )}
                {item.name && (
                  <div className="name text-lg font-medium">{item.name}</div>
                )}
              </div>
            ))}
          </section>
        </section>
      )}
    </>
  );
}

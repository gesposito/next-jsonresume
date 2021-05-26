import React from "react";

export function Summary({ summary }) {
  return (
    <React.Fragment>
      {summary && (
        <React.Fragment>
          <section className="section main-summary">
            <h2 className="section-title text-xl mt-4 text-gray-500">About</h2>
            <section>
              <p className="text-gray-800 text-lg mt-4 whitespace-pre-line text-justify	pl-5">
                {summary}
              </p>
            </section>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

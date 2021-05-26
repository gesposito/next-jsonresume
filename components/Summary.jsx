import React from "react";

export function Summary({ summary }) {
  return (
    <React.Fragment>
      {summary && (
        <React.Fragment>
          <section className="section main-summary">
            <h2 className="section-title">About</h2>
            <section>
              <p>{summary}</p>
            </section>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

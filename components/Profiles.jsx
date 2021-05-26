import React from "react";

export function Profiles({ profiles }) {
  return (
    <>
      {!!profiles?.length && (
        <div id="profiles" className="flex justify-start">
          {profiles.map((item, i) => (
            <React.Fragment key={i}>
              <div className="item">
                {item.username && (
                  <span className="username">
                    {item.url ? (
                      <span
                        className={`url icon ${item.network.toLowerCase()}`}
                      >
                        <a href={item.url} className="text-purple-600	">
                          {item.username}
                        </a>
                      </span>
                    ) : (
                      <> {item.username}</>
                    )}
                  </span>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
}

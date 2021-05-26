import React from "react";

export function Profiles({ profiles }) {
  return (
    <>
      {!!profiles?.length && (
        <>
          <div id="profiles">
            {profiles.map((item, i) => (
              <React.Fragment key={i}>
                <div className="item">
                  {item.network && (
                    <>
                      <span
                        className={
                          "network fa fa-" +
                          item.spaceToDash +
                          " " +
                          item.spaceToDash
                        }
                      />
                    </>
                  )}
                  {item.username && (
                    <>
                      <span className="username">
                        {item.url ? (
                          <>
                            <span className="url">
                              <a href={item.url}>{item.username}</a>
                            </span>
                          </>
                        ) : (
                          <> {item.username}</>
                        )}
                      </span>
                    </>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </>
  );
}

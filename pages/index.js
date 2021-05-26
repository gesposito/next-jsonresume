import React from "react";

import Head from "next/head";

export default function Home({ data }) {
  if (!Object.keys(data).length) {
    return null;
  }

  const {
    meta, // theme
    basics: {
      name,
      label,
      image,
      summary,
      website,
      email,
      phone,
      location: { address, postalCode, city, countryCode, region },
      profiles,
    },
    education,
    references,
    skills,
    languages,
    awards,
    publications,
    work,
    volunteer,
    interests,
  } = data;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <div id="resume">
        <header id="header">
          {image ? (
            <React.Fragment>
              <img src={image} alt={name} />
              <div className="middle">
                <h1 className="name">{name}</h1>
                <h2 className="label">{label}</h2>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div>
                <h1 className="name">{name}</h1>
                <h2 className="label">{label}</h2>
              </div>
            </React.Fragment>
          )}
        </header>

        <section id="basics">
          <div id="location">
            {address && (
              <React.Fragment>
                <span className="fa fa-map-marker" />
                <span className="address">{address},</span>
              </React.Fragment>
            )}
            {postalCode && (
              <React.Fragment>
                <span className="postalCode">{postalCode},</span>
              </React.Fragment>
            )}
            {city && (
              <React.Fragment>
                <span className="city">{city}</span>
              </React.Fragment>
            )}
            {countryCode && (
              <React.Fragment>
                <span className="countryCode">({countryCode}),</span>
              </React.Fragment>
            )}
            {region && (
              <React.Fragment>
                <span className="region">{region}</span>
              </React.Fragment>
            )}
          </div>
          <div id="contact">
            {website && (
              <React.Fragment>
                <div className="website">
                  <a href={website}>{website}</a>
                </div>
              </React.Fragment>
            )}
            {email && (
              <React.Fragment>
                <div className="email">
                  <span className="fa fa-envelope" />
                  <a href={"mailto:" + email}>{email}</a>
                </div>
              </React.Fragment>
            )}
            {phone && (
              <React.Fragment>
                <div className="phone">
                  <span className="fa fa-phone-square" />
                  {phone}
                </div>
              </React.Fragment>
            )}
          </div>
          {profiles?.length && (
            <React.Fragment>
              <div id="profiles">
                {profiles.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="item">
                      {item.network && (
                        <React.Fragment>
                          <span
                            className={
                              "network fa fa-" +
                              item.spaceToDash +
                              " " +
                              item.spaceToDash
                            }
                          />
                        </React.Fragment>
                      )}
                      {item.username && (
                        <React.Fragment>
                          <span className="username">
                            {item.url ? (
                              <React.Fragment>
                                <span className="url">
                                  <a href={item.url}>{item.username}</a>
                                </span>
                              </React.Fragment>
                            ) : (
                              <React.Fragment> {item.username}</React.Fragment>
                            )}
                          </span>
                        </React.Fragment>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </React.Fragment>
          )}
        </section>

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

        {work?.length && (
          <React.Fragment>
            <section className="section">
              <h2 className="section-title">Experience</h2>
              <section id="work">
                {work.map((item, i) => (
                  <React.Fragment key={i}>
                    {item.company && (
                      <React.Fragment>
                        <header>
                          <h3 className="name">{item.company}</h3>
                        </header>
                      </React.Fragment>
                    )}
                    <div className="date">
                      {item.startDate && (
                        <React.Fragment>
                          <span className="startDate">{item.MY}</span>
                        </React.Fragment>
                      )}
                      {item.endDate ? (
                        <React.Fragment>
                          <span className="endDate">- {item.MY}</span>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <span className="endDate">- Present</span>
                        </React.Fragment>
                      )}
                    </div>
                    <div className="item">
                      {item.position && (
                        <React.Fragment>
                          <div className="position">{item.position}</div>
                        </React.Fragment>
                      )}
                      {item.website && (
                        <React.Fragment>
                          <div className="website">
                            <a href={item.website}>{item.website}</a>
                          </div>
                        </React.Fragment>
                      )}
                      {item.summary && (
                        <React.Fragment>
                          <div className="summary">
                            <p>{item.summary}</p>
                          </div>
                        </React.Fragment>
                      )}
                      {item.highlights?.length && (
                        <React.Fragment>
                          <ul className="highlights">
                            {item.highlights.map((item, i) => (
                              <React.Fragment key={i}>
                                <li>{item}</li>
                              </React.Fragment>
                            ))}
                          </ul>
                        </React.Fragment>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </section>
            </section>
          </React.Fragment>
        )}
        {education?.length && (
          <React.Fragment>
            <section className="section">
              <h2 className="section-title">Education</h2>
              <section id="education">
                {education.map((item, i) => (
                  <React.Fragment key={i}>
                    <header>
                      {item.institution && (
                        <React.Fragment>
                          <h3 className="institution">{item.institution}</h3>
                        </React.Fragment>
                      )}
                      <div className="date">
                        {item.startDate && (
                          <React.Fragment>
                            <span className="startDate">{item.Y}</span>
                          </React.Fragment>
                        )}
                        {item.endDate ? (
                          <React.Fragment>
                            <span className="endDate">- {item.Y}</span>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <span className="endDate">- Present</span>
                          </React.Fragment>
                        )}
                      </div>
                    </header>
                    <div className="item">
                      {item.studyType && (
                        <React.Fragment>
                          <div className="studyType">{item.studyType}</div>
                        </React.Fragment>
                      )}
                      {item.area && (
                        <React.Fragment>
                          <div className="area">{item.area}</div>
                        </React.Fragment>
                      )}
                      {item.gpa && (
                        <React.Fragment>
                          <div>
                            <span className="fa fa-graduation-cap" />
                            <span className="gpa"> GPA: {item.gpa}</span>
                          </div>
                        </React.Fragment>
                      )}
                      {item.courses?.length && (
                        <React.Fragment>
                          <ul className="courses">
                            {item.courses.map((item, i) => (
                              <React.Fragment key={i}>
                                <li>{item}</li>
                              </React.Fragment>
                            ))}
                          </ul>
                        </React.Fragment>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </section>
            </section>
          </React.Fragment>
        )}

        {volunteer?.length && (
          <React.Fragment>
            <section className="section">
              <h2 className="section-title">Volunteer</h2>
              <section id="volunteer">
                {volunteer.map((item, i) => (
                  <React.Fragment key={i}>
                    {item.organization && (
                      <React.Fragment>
                        <header>
                          <h3 className="company">{item.organization}</h3>
                          <div className="date">
                            {item.startDate && (
                              <React.Fragment>
                                <span className="startDate">{item.MY}</span>
                              </React.Fragment>
                            )}
                            {item.endDate ? (
                              <React.Fragment>
                                <span className="endDate">- {item.MY}</span>
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                <span className="endDate">- Present</span>
                              </React.Fragment>
                            )}
                          </div>
                        </header>
                      </React.Fragment>
                    )}
                    <div className="item">
                      {item.position && (
                        <React.Fragment>
                          <div className="position">{item.position}</div>
                        </React.Fragment>
                      )}
                      {item.website && (
                        <React.Fragment>
                          <div className="website">
                            <a href={item.website}>{item.website}</a>
                          </div>
                        </React.Fragment>
                      )}
                      {item.summary && (
                        <React.Fragment>
                          <div className="summary">
                            <p>{item.summary}</p>
                          </div>
                        </React.Fragment>
                      )}
                      {item.highlights?.length && (
                        <React.Fragment>
                          <ul className="highlights">
                            {item.highlights.map((item, i) => (
                              <React.Fragment key={i}>
                                <li>{item}</li>
                              </React.Fragment>
                            ))}
                          </ul>
                        </React.Fragment>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </section>
            </section>
          </React.Fragment>
        )}
        {awards?.length && (
          <React.Fragment>
            <section className="section">
              <h2 className="section-title">Awards</h2>
              <section id="awards">
                {awards.map((item, i) => (
                  <React.Fragment key={i}>
                    {item.date && (
                      <React.Fragment>
                        <div className="date">{item.DMY}</div>
                      </React.Fragment>
                    )}
                    <div className="item">
                      {item.title && (
                        <React.Fragment>
                          <div className="title">{item.title}</div>
                        </React.Fragment>
                      )}
                      {item.awarder && (
                        <React.Fragment>
                          <div className="awarder">{item.awarder}</div>
                        </React.Fragment>
                      )}
                      {item.summary && (
                        <React.Fragment>
                          <div className="summary">
                            <p>{item.summary}</p>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </section>
            </section>
          </React.Fragment>
        )}
        {publications?.length && (
          <React.Fragment>
            <section className="section">
              <h2 className="section-title">Publications</h2>
              <section id="publications">
                {publications.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="item">
                      {item.name && (
                        <React.Fragment>
                          <span className="name">
                            {item.website ? (
                              <React.Fragment>
                                <span className="website">
                                  <a href={item.website}>{item.name}</a>
                                </span>
                              </React.Fragment>
                            ) : (
                              <React.Fragment> {item.name}</React.Fragment>
                            )}
                          </span>
                        </React.Fragment>
                      )}
                      {item.publisher && (
                        <React.Fragment>
                          <span className="publisher">
                            in {item.publisher},
                          </span>
                        </React.Fragment>
                      )}
                      {item.releaseDate && (
                        <React.Fragment>
                          <span className="date">{item.DMY}</span>
                        </React.Fragment>
                      )}
                      {item.summary && (
                        <React.Fragment>
                          <div className="summary">
                            <p>{item.summary}</p>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </section>
            </section>
          </React.Fragment>
        )}
        {skills?.length && (
          <React.Fragment>
            <section className="section">
              <h2 className="section-title">Skills</h2>
              <section id="skills">
                {skills.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="item">
                      {item.name && (
                        <React.Fragment>
                          <div className="name">{item.name}</div>
                        </React.Fragment>
                      )}
                      {item.level && (
                        <React.Fragment>
                          <div className={"level " + item.toLowerCase}>
                            <em>{item.level}</em>
                            <div className="bar" />
                          </div>
                        </React.Fragment>
                      )}
                      {item.keywords?.length && (
                        <React.Fragment>
                          <ul className="keywords">
                            {item.keywords.map((item, i) => (
                              <React.Fragment key={i}>
                                <li>{item}</li>
                              </React.Fragment>
                            ))}
                          </ul>
                        </React.Fragment>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </section>
            </section>
          </React.Fragment>
        )}
        {languages?.length && (
          <React.Fragment>
            <section className="section">
              <h2 className="section-title">Languages</h2>
              <section id="languages">
                {languages.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="item">
                      {item.language && (
                        <React.Fragment>
                          <div className="language">{item.language}</div>
                        </React.Fragment>
                      )}
                      {item.fluency && (
                        <React.Fragment>
                          <div className="fluency">
                            <em>{item.fluency}</em>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </section>
            </section>
          </React.Fragment>
        )}
        {interests?.length && (
          <React.Fragment>
            <section className="section">
              <h2 className="section-title" className="section-title">
                Interests
              </h2>
              <section id="interests">
                {interests.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="item">
                      {item.name && (
                        <React.Fragment>
                          <div className="name">{item.name}</div>
                        </React.Fragment>
                      )}
                      {item.keywords?.length && (
                        <React.Fragment>
                          <ul className="keywords">
                            {item.keywords.map((item, i) => (
                              <React.Fragment key={i}>
                                <li>{item}</li>
                              </React.Fragment>
                            ))}
                          </ul>
                        </React.Fragment>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </section>
            </section>
          </React.Fragment>
        )}
        {references?.length && (
          <React.Fragment>
            <section className="section">
              <h2 className="section-title">References</h2>
              <section id="references">
                {references.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="item">
                      {item.reference && (
                        <React.Fragment>
                          <blockquote className="reference">
                            “ {item.reference} ”
                          </blockquote>
                        </React.Fragment>
                      )}
                      {item.name && (
                        <React.Fragment>
                          <div className="name">{item.name}</div>
                        </React.Fragment>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </section>
            </section>
          </React.Fragment>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  let data = {};
  try {
    const query = context.query.url
      ? `?url=${encodeURI(context.query.url)}`
      : "";
    const url = `http://${context.req.headers.host}/api/resume${query}`;
    const response = await fetch(url);
    data = await response.json();
  } catch (e) {
    console.error(e);
  }

  return {
    // will be passed to the page component as props
    props: { data },
  };
}

export function Contact({ website, email, phone }) {
  return (
    <div id="contact">
      {website && (
        <>
          <div className="website">
            <a href={website}>{website}</a>
          </div>
        </>
      )}
      {email && (
        <>
          <div className="email">
            <span className="fa fa-envelope" />
            <a href={"mailto:" + email}>{email}</a>
          </div>
        </>
      )}
      {phone && (
        <>
          <div className="phone">
            <span className="fa fa-phone-square" />
            {phone}
          </div>
        </>
      )}
    </div>
  );
}

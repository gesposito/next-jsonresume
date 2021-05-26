export function Contact({ website, email, phone }) {
  return (
    <div id="contact">
      {website && (
        <div className="icon website">
          <a href={website}>{website}</a>
        </div>
      )}
      {email && (
        <div className="icon email">
          <a href={"mailto:" + email}>{email}</a>
        </div>
      )}
      {phone && <div className="icon phone">{phone}</div>}
    </div>
  );
}

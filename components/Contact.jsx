export function Contact({ website, email, phone }) {
  return (
    <div id="contact">
      {email && (
        <div className="icon email">
          <a href={"mailto:" + email} className="text-purple-600	">
            {email}
          </a>
        </div>
      )}
      {phone && <div className="icon phone ">{phone}</div>}
      {website && (
        <div className="icon website">
          <a href={website} className="text-purple-600	">
            {website}
          </a>
        </div>
      )}
    </div>
  );
}

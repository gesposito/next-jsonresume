export function Header({ image, name, label }) {
  return (
    <header id="header">
      {image ? (
        <>
          <img src={image} alt={name} />
          <div className="middle">
            <h1 className="name">{name}</h1>
            <h2 className="label">{label}</h2>
          </div>
        </>
      ) : (
        <div>
          <h1 className="name">{name}</h1>
          <h2 className="label">{label}</h2>
        </div>
      )}
    </header>
  );
}

export function Header({ image, name, label }) {
  return (
    <header id="header" className="mt-8">
      {image ? (
        <>
          <img src={image} alt={name} />
          <div>
            <h1 className="name text-3xl text-gray-900 font-semibold">
              {name}
            </h1>
            <h2 className="label text-xl text-gray-600 font-normal">{label}</h2>
          </div>
        </>
      ) : (
        <div>
          <h1 className="name text-3xl text-gray-900 font-semibold">{name}</h1>
          <h2 className="label text-xl text-gray-600 font-normal">{label}</h2>
        </div>
      )}
    </header>
  );
}

export function Location({
  location: { address, postalCode, city, countryCode, region },
}) {
  return (
    <div id="location">
      {address && (
        <>
          <span className="fa fa-map-marker" />
          <span className="address">{address}, </span>
        </>
      )}
      {postalCode && <span className="postalCode">{postalCode}, </span>}
      {city && <span className="city">{city} </span>}
      {region && <span className="region">({region}), </span>}
      {countryCode && <span className="countryCode">{countryCode}</span>}
    </div>
  );
}
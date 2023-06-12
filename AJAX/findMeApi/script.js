async function findIP() {
  try {
    const resultElement = document.getElementById("result");

    resultElement.innerHTML = "";

    const loader = document.createElement("div");
    loader.className = "loader";
    resultElement.appendChild(loader);

    const ipResponse = await fetch("https://api.ipify.org/?format=json");
    const ipData = await ipResponse.json();
    const ipAddress = ipData.ip;
    console.log(ipAddress);

    const geoResponse = await fetch(`http://ip-api.com/json/${ipAddress}`);
    const geoData = await geoResponse.json();
    console.log(geoData);

    const { timezone, country, regionName, city, zip } = geoData;

    resultElement.innerHTML = `
      <p><strong>Континент:</strong> ${timezone}</p>
      <p><strong>Країна:</strong> ${country}</p>
      <p><strong>Регіон:</strong> ${regionName}</p>
      <p><strong>Місто:</strong> ${city}</p>
      <p><strong>Район:</strong> ${zip}</p>
    `;
  } catch (error) {
    console.error(error);
  }
}

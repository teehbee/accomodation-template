fetch("../navigation/header.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    return response.text();
  })
  .then((data) => {
    const header = document.createElement("header");
    header.innerHTML = data;
    document.body.prepend(header);
  })

  .catch((error) =>
    console.error("There was a problem with fetching the header:", error),
  );

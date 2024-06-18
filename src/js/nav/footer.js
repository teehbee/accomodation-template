fetch("../navigation/footer.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    return response.text();
  })
  .then((data) => {
    const footer = document.createElement("footer");
    footer.innerHTML = data;
    document.body.append(footer);
  })

  .catch((error) =>
    console.error("There was a problem with fetching the footer:", error),
  );

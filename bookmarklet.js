javascript: () => {
  if (window.location.hostname == "datawrapper.dwcdn.net") {
    const dw_id = window.location.href
      .replace("https://datawrapper.dwcdn.net/", "")
      .split("/")[0];
    const dw_edit_url =
      "https://app.datawrapper.de/chart/" + dw_id + "/publish";
    location.href = dw_edit_url;
  } else {
    document.querySelectorAll("iframe").forEach(function (i, j) {
      const src = i.src.toString();
      if (src.indexOf("datawrapper") >= 0) {
        const dw_id = src
          .replace("https://datawrapper.dwcdn.net/", "")
          .split("/")[0];
        const dw_edit_url =
          "https://app.datawrapper.de/chart/" + dw_id + "/publish";
        console.log("Edit URL found:", dw_edit_url);
        let a = document.createElement("a");
        a.innerText = "Editer le graphique " + dw_id;
        a.href = dw_edit_url;
        a.target = "_blank";
        i.parentNode.insertBefore(a, i);
      }
    });
  }
};

# Datawrapper Bookmarklet: DW Translate

Fügt Links hinzu, um DW-Grafiken mit dem Übersetzungstool zu übersetzen.

Übersicht:

> ![Screenshot](screen-translate-de.png)

#### Verwendung

Kopieren und fügen Sie den JavaScript-Code aus dem Feld unten in ein neues Lesezeichen ein:

> ![Add bookmark](add-bookmark.png)

Denken Sie daran, dass ein Bookmarklet nicht harmlos ist, sondern von Hackern dazu benutzt werden kann, z.B. Ihre Facebook-Sitzung zu stehlen. Führen Sie ein verdächtiges Bookmarklet nicht aus.

```
javascript: if (window.location.hostname == "datawrapper.dwcdn.net") {
  const dw_id = window.location.href
    .replace("https://datawrapper.dwcdn.net/", "")
    .split("/")[0];
  const dw_translate_url =
    "https://interaktiv.tagesanzeiger.ch/dw-translate/#/chart/" + dw_id;
  location.href = dw_translate_url;
} else {
  document.querySelectorAll("iframe").forEach(function (i, j) {
    const src = i.src.toString();
    if (src.indexOf("datawrapper") >= 0) {
      const dw_id = src
        .replace("https://datawrapper.dwcdn.net/", "")
        .split("/")[0];
      const dw_translate_url =
        "https://interaktiv.tagesanzeiger.ch/dw-translate/#/chart/" + dw_id;
      let a = document.createElement("a");
      a.innerText = dw_id + " übersetzen";
      a.href = dw_translate_url;
      a.target = "_blank";
      a.style.textDecoration = 'none';
      a.style.padding = '1rem';
      a.style.border = '1px solid steelblue';
      a.style.borderRadius = '99px';
      a.style.display = 'inline-block';
      a.style.color = 'steelblue';
      a.style.fontSize = '1.5rem';
      a.style.fontFamily = 'sans-serif';
      i.parentNode.insertBefore(a, i);
    }
  });
}

```


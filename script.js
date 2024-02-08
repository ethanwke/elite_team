function link(link) {
  window.open("https://" + link);
}

function btn_showImgText(imgId, textId) {
  const img = document.getElementById(imgId);
  const text = document.getElementById(textId);
  if (img.style.display === "none") {
    img.style.display = 'inline';
    text.style.display = "none";
  }
  else {
    img.style.display = 'none';
    text.style.display = "inline";
  }
}

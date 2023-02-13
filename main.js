const play = () => {
  link = document.getElementById("link").value;
  document.getElementById("frame").innerHTML = `<iframe title="YouTube Video" src="https://www.youtube-nocookie.com/embed/${link.match(/(youtube.com%7Cyoutube-nocookie.com%7Cyoutu.be)\/(watch\?v=|v\/|embed\/)([0-9A-Za-z-_]{11})/)[3]}?rel=0&amp;autoplay=1" allowfullscreen=""></iframe>`
}

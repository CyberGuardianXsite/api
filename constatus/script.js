function  setTitle(t) {
  document.getElementById("title").textContent = t;
}
function  setText(t) {
  document.getElementById("status").textContent = t;
}
const url = new URL(window.location);
const searchParams = url.searchParams;
let w = searchParams.get('status');
if (w == '200') {
  setTitle("200, ok");
  setText('{\"status\":\"200\",\"ok\":\"true\",\"robot\":\"false\"}')
} else {
  if (w == '403') {
    setTitle("403")
    setText("{\"status\":\"403\",\"ok\":\"false\",\"robot\":\"true\"}")
  } else {
    if (w == '503') {
      setTitle("503")
      setText("{\"status\":\"503\",\"ok\":\"false\",\"robot\":\"not\"}")
    }
  }
}

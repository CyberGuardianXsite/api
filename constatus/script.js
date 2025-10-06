function  setTitle(t) { document.getElementById("title").textContent = t; };
function  setText(t) { document.getElementById("status").textContent = t; };
const url = new URL(window.location);
const searchParams = url.searchParams;
let w = searchParams.get('status');
if (w == '200') { setTitle("200, ok"); setText('{"status":"200","ok":"true"}') };

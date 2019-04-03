// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const saveLincoln = document.getElementById("save_lincoln");
let op = 1;
const foreground = document.getElementById("foreground")

function fade() {
  op -= 0.1
  foreground.style.opacity = op
}

saveLincoln.addEventListener("click", function(){
  const interval = parseInt(document.querySelector("#interval").value);
  setInterval(fade, interval)
})

const niceButton = document.getElementById("nice-button")
const display = document.getElementById("display")

niceButton.onclick = function () {
  console.log("こんにちは")
  display.textContent = "こんにちは"
}

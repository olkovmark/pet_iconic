// ========= Navigation≈≈≈≈≈≈≈≈≈≈
const nav = document.getElementById("nav");

document
  .getElementById("nav_open")
  .addEventListener("click", () => (nav.style.display = "flex"));
document
  .getElementById("nav_exit")
  .addEventListener("click", () => (nav.style.display = "none"));

// ========= Member≈≈≈≈≈≈≈≈≈≈

const member = document.getElementById("member");
let memberNumber = 0;

document.getElementById("member_left").addEventListener("click", () => {
  memberNumber = memberNumber == 0 ? 4 : memberNumber - 1;
  member.style.setProperty("--number", memberNumber);
});
document.getElementById("member_right").addEventListener("click", () => {
  memberNumber = memberNumber == 4 ? 0 : memberNumber + 1;
  member.style.setProperty("--number", memberNumber);
});

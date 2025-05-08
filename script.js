const themeBtn = document.getElementById("themeBtn");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(savedTheme);

// Function to toggle theme and animate button
function toggleTheme() {
  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";

  // Switch theme
  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);

  // Save new preference
  localStorage.setItem("theme", newTheme);

  // Trigger animation
  themeBtn.classList.add("animate");
  setTimeout(() => themeBtn.classList.remove("animate"), 500);
}

// Event listener
themeBtn.addEventListener("click", toggleTheme);

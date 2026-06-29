// Mobile menu toggle
document.querySelector(".nav-toggle").addEventListener("click", function () {
	var n = document.querySelector(".navlinks");
	var open = n.style.display === "flex";
	n.style.display = open ? "none" : "flex";
	n.style.flexDirection = "column";
	n.style.position = "absolute";
	n.style.top = "80px";
	n.style.left = "0";
	n.style.right = "0";
	n.style.background = "#fff";
	n.style.padding = "18px 24px";
	n.style.borderBottom = "1px solid var(--line)";
});
// Template tab active state
document.querySelectorAll(".tab").forEach(function (t) {
	t.addEventListener("click", function () {
		document.querySelectorAll(".tab").forEach(function (x) {
			x.classList.remove("active");
		});
		t.classList.add("active");
	});
});

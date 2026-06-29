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

// Filter Menu Js
function setupFilterAnimation(containerSelectors) {
	const selectors = Array.isArray(containerSelectors)
		? containerSelectors
		: [containerSelectors];

	selectors.forEach(containerSelector => {
		const container = document.querySelector(containerSelector);
		if (!container) return;

		const buttons = container.querySelectorAll(".menu-group button");
		if (!buttons.length) return;

		const initial = container.querySelector(".menu-group .active");
		if (initial) {
			initial.classList.add("active");
		}

		buttons.forEach(button => {
			button.addEventListener("click", () => {
				buttons.forEach(btn => btn.classList.remove("active"));
				button.classList.add("active");
			});
		});
	});
}

setupFilterAnimation([".demo-filter-menu"]);

// Filter Item Js
document.addEventListener("DOMContentLoaded", function () {
	const container = document.querySelector(".demo-box");
	if (!container) return;

	imagesLoaded(container, function () {
		const iso = new Isotope(container, {
			itemSelector: ".demo-item",
			percentPosition: true,
			masonry: {
				columnWidth: container.querySelector(".filter-sizer"),
				gutter: container.querySelector(".gutter-sizer"),
			},
		});

		const buttonGroup = document.querySelector(".demo-button-group");
		if (!buttonGroup) return;

		// active button
		const activeBtn = buttonGroup.querySelector("button.active");
		if (activeBtn) {
			const filterValue = activeBtn.getAttribute("data-filter");
			iso.arrange({ filter: filterValue });
		}

		// click filter change
		buttonGroup.addEventListener("click", function (event) {
			const target = event.target;
			if (target.tagName.toLowerCase() === "button") {
				buttonGroup
					.querySelectorAll("button")
					.forEach(btn => btn.classList.remove("active"));
				target.classList.add("active");

				const filterValue = target.getAttribute("data-filter");
				iso.arrange({ filter: filterValue });
			}
		});
	});
});

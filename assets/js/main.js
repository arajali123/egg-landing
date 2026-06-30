// Mobile Menu Js
$(".mobile-bar").on("click", function () {
	$(".mobile-menu-area").addClass("opened");
	$(".body-overlay").addClass("opened");
});
$(".close-btn").on("click", function () {
	$(".mobile-menu-area").removeClass("opened");
	$(".body-overlay").removeClass("opened");
	$(".mobile-bar").removeClass("on");
});
$(".body-overlay").on("click", function () {
	$(".mobile-menu-area").removeClass("opened");
	$(".body-overlay").removeClass("opened");
	$(".mobile-bar").removeClass("on");
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

// Testimonial Slider Js
if ($(".testimonial-slider").length > 0) {
	var testimonial = new Swiper(".testimonial-slider", {
		slidesPerView: 1,
		spaceBetween: 25,
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 1500,
		},
		pagination: {
			el: ".testimonial-pagination",
			clickable: true,
		},
	});
}

const toggle = document.querySelector("#toggle");

let isOpen = false;

function myFunction(x) {
	const list = document.querySelector("#nav-list");
	if (isOpen == false) {
		x.classList.toggle("change");
		list.style.transform = "translateX(0)";
		console.log("opened");

		isOpen = true;
	} else {
		x.classList.toggle("change");
		list.style.transform = "translateX(-100vw)";
		console.log("closed");
		isOpen = false;
	}
}

toggle.addEventListener("click", myFunction);

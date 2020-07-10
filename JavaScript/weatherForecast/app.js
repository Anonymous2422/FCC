const btn = document.querySelector("#search-btn");
const txt = document.querySelector("#search");
const cel = document.querySelector("#celcius");
const faren = document.querySelector("#faren");
const output = document.querySelector(".output");
const city = document.querySelector(".city");
async function getData(event) {
	event.preventDefault();
	if (txt.value.length != 0) {
		try {
			const API_KEY = "0eb7fc14f5406dda79664c947e0416ab";

			let url = `https://api.openweathermap.org/data/2.5/weather?q=${txt.value}&appid=${API_KEY}&units=metric`;

			let data = await fetch(url);
			data = await data.json();

			console.log(data);
			output.innerHTML = "" + Math.round(data.main.temp);
			city.innerHTML = txt.value + ", " + data.sys.country;
			txt.value = "";
		} catch (error) {
			console.log(error);
			output.innerHTML = "NaN";
			txt.value = "";
			city.innerHTML = "";
		}
	}
}

let flag = false;
async function change() {
	if (flag == true) {
		output.innerHTML = Math.round(
			(parseInt(output.innerHTML) - 32) * (5 / 9)
		).toString();
		cel.classList.add("selected");
		faren.classList.remove("selected");
		flag = false;
	} else {
		output.innerHTML = Math.round(
			parseInt(output.innerHTML) * 1.8 + 32
		).toString();
		faren.classList.add("selected");
		cel.classList.remove("selected");
		flag = true;
	}
}

btn.addEventListener("click", getData);

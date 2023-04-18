let myLeads = [];
const inputEl = document.getElementById("input-el");
console.log(inputEl);

const inputBtn = document.getElementById("input-btn");
console.log(inputBtn);

const ulEl = document.getElementById("ul-el");
console.log(ulEl);

inputBtn.addEventListener("click", function () {
	console.log("Button clicked!");
	myLeads.push(inputEl.value);
	console.log(myLeads);
	inputEl.value = "";
	renderLeads();
});

function renderLeads() {
	let listItems = "";
	console.log(listItems);

	for (let i = 0; i < myLeads.length; i++) {
		console.log(myLeads[i]);
		listItems += "<li>" + myLeads[i] + "</li>";
		console.log(listItems);
		// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
		// const li = document.createElement("li");
		// li.textContent = myLeads[i];
		// ulEl.append(li);
	}

	ulEl.innerHTML = listItems;
	console.log(ulEl.innerHTML);
}

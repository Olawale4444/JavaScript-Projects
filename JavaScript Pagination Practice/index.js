
const list_element = document.getElementById('list');
const pagination_1_element = document.getElementById('pagination_1');

const list_items = [
	"1	Ceelo Green",
	"2	The Weeknd",
	"3	Skylar gray",
	"4	Eminem",
	"5	Skepta",
	"6	Asap Rocky",
	"7	Miguel",
	"8	Tyler the Creator",
	"9	Roddy Rich",
	"10	Burna Boy",
	"11	Mac Miller",
	"12	Hozier",
	"13	Skepta",
	"14	Masego",	
];

let immediatePage = 1;
let rows = 5;

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (var i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
		item_element.classList.add('item');
		item_element.innerText = item;
		
		wrapper.appendChild(item_element);
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (var j = 1; j < page_count + 1; j++) {
		let btn = pagination_1Button(j, items);

		wrapper.appendChild(btn);
	}
}

function pagination_1Button (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (immediatePage == page) button.classList.add('active');

	button.addEventListener('click', function () {
		immediatePage = page;
		
		DisplayList(items, list_element, rows, immediatePage);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}
DisplayList(list_items, list_element, rows, immediatePage);
SetupPagination (list_items, pagination_1_element, rows);
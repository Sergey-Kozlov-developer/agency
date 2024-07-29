const menu = document.querySelector(".nav-list");

const items = [
	{ name: "About", id: "about" },
	{ name: "Services", id: "services" },
	{ name: "Pricing", id: "pricing" },
	{ name: "Blog", id: "blog" },
];

function navMenu() {
	items.forEach((item) => {
		const html = `
			<li data-menu-item>
						<a href="#${item.id}">${item.name}</a>
					</li>
		`;
		menu.insertAdjacentHTML("beforeend", html);
	});

	// Добавляем обработчик событий для плавного перехода
	menu.addEventListener("click", (event) => {
		if (event.target.tagName === "a") {
			event.preventDefault(); // Предотвращаем стандартное поведение ссылки
			const targetId = event.target.getAttribute("href").substring(1); // Получаем id цели
			const targetElement = document.getElementById(targetId); // Находим целевой элемент

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: "smooth", // Указываем плавную прокрутку
					block: "start", // Устанавливаем позицию элемента в начале видимой области
				});
			}
		}
	});
}

export default navMenu;

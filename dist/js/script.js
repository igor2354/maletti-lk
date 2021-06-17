document.addEventListener(
	"DOMContentLoaded",
	function () {
		// Показать скрыть пароль
		let elViewPass = document.querySelectorAll(".icon-view-password");

		if (elViewPass != null) {
			elViewPass.forEach((element) => {
				element.addEventListener("click", (e) => {
					let inputPassword = e.target.parentNode.querySelector("input");

					if (inputPassword.getAttribute("type") == "text") {
						inputPassword.setAttribute("type", "password");
					} else {
						inputPassword.setAttribute("type", "text");
					}
				});
			});
		}
	},
	false
);

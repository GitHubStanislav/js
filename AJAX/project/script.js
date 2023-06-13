class VisitModal {
    constructor() {
        this.modal = document.getElementById("modal");
        this.createVisitButton = document.getElementById("create-visit-button");
        this.closeButton = document.getElementsByClassName("close")[0];
        this.createButton = document.getElementById("create-button");
        this.visitList = document.getElementById("visit-list");
        this.doctorSelect = document.getElementById("doctor-select");
        this.commonFields = document.getElementById("common-fields");
        this.cardiologistFields = document.getElementById("cardiologist-fields");
        this.dentistFields = document.getElementById("dentist-fields");
        this.therapistFields = document.getElementById("therapist-fields");

        this.createVisitButton.addEventListener("click", this.openModal.bind(this));
        this.closeButton.addEventListener("click", this.closeModal.bind(this));
        this.createButton.addEventListener("click", this.createVisit.bind(this));
        this.doctorSelect.addEventListener("change", this.showDoctorFields.bind(this));

        this.loadVisits(); // Загрузить карточки при загрузке страницы
    }

    openModal() {
        this.modal.style.display = "block";
    }

    closeModal() {
        this.modal.style.display = "none";
    }

    createVisit() {
        // Получить значения полей формы
        const visitPurposeInput = document.getElementById("visit-purpose-input");
        const visitDescriptionInput = document.getElementById("visit-description-input");
        const prioritySelect = document.getElementById("common-priority-select");
        const fullNameInput = document.getElementById("full-name-input");

        // Проверка заполнения обязательных полей
        if (
            this.doctorSelect.value === "" ||
            visitPurposeInput.value === "" ||
            visitDescriptionInput.value === "" ||
            prioritySelect.value === "" ||
            fullNameInput.value === ""
        ) {
            alert("Please fill in all required fields.");
            return;
        }

        // Создание объекта с данными визита
        const visitData = {
            doctor: this.doctorSelect.value,
            title: visitPurposeInput.value,
            description: visitDescriptionInput.value,
            priority: prioritySelect.value,
            fullName: fullNameInput.value,
        };

        const token = "5421f6d0-11a0-4b32-8b0e-2d5476a236a0";

        // Отправка данных визита на сервер
        fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(visitData),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response); // Получение ответа от сервера

                // Очистка полей формы
                this.doctorSelect.value = "";
                visitPurposeInput.value = "";
                visitDescriptionInput.value = "";
                prioritySelect.value = "";
                fullNameInput.value = "";

                this.closeModal();

                // Создание карточки визита на странице
                this.createVisitCard(response);
            })
            .catch((error) => {
                console.log("An error occurred:", error);
            });
    }

    createVisitCard(visit) {
        // Создание HTML-элемента карточки визита
        const visitCard = document.createElement("div");
        visitCard.className = "visit-card";
        visitCard.innerHTML = `
      <h3>${visit.title}</h3>
      <p>${visit.description}</p>
      <p>${visit.doctor}</p>
      <p>${visit.priority}</p>
      <p>${visit.fullName}</p>
    `;

        // Добавление карточки в список
        this.visitList.appendChild(visitCard);

        // Сохранение карточки в локальном хранилище браузера
        this.saveVisit(visitCard.outerHTML);
    }

    saveVisit(visitHTML) {
        // Получение сохраненных карточек из локального хранилища
        const savedVisits = localStorage.getItem("visits") || "[]";
        const visits = JSON.parse(savedVisits);

        // Добавление новой карточки
        visits.push(visitHTML);

        // Сохранение карточек в локальном хранилище
        localStorage.setItem("visits", JSON.stringify(visits));
    }

    loadVisits() {
        // Получение сохраненных карточек из локального хранилища
        const savedVisits = localStorage.getItem("visits") || "[]";
        const visits = JSON.parse(savedVisits);

        // Добавление карточек в список на странице
        visits.forEach((visitHTML) => {
            const visitCard = document.createElement("div");
            visitCard.className = "visit-card";
            visitCard.innerHTML = visitHTML;
            this.visitList.appendChild(visitCard);
        });

        // Проверка наличия сохраненных карточек и отображение сообщения, если их нет
        if (visits.length === 0) {
            this.displayNoItemsMessage();
        }
    }

    displayNoItemsMessage() {
        const noItemsMessage = document.createElement("p");
        noItemsMessage.textContent = "No items have been added.";
        this.visitList.appendChild(noItemsMessage);
    }

    showDoctorFields() {
        // Проверка выбранного врача и отображение соответствующих полей
        const selectedDoctor = this.doctorSelect.value;

        if (selectedDoctor === "Cardiologist") {
            this.commonFields.style.display = "block";
            this.cardiologistFields.style.display = "block";
            this.dentistFields.style.display = "none";
            this.therapistFields.style.display = "none";
        } else if (selectedDoctor === "Dentist") {
            this.commonFields.style.display = "block";
            this.cardiologistFields.style.display = "none";
            this.dentistFields.style.display = "block";
            this.therapistFields.style.display = "none";
        } else if (selectedDoctor === "Therapist") {
            this.commonFields.style.display = "block";
            this.cardiologistFields.style.display = "none";
            this.dentistFields.style.display = "none";
            this.therapistFields.style.display = "block";
        } else {
            this.commonFields.style.display = "block";
            this.cardiologistFields.style.display = "none";
            this.dentistFields.style.display = "none";
            this.therapistFields.style.display = "none";
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    new VisitModal();
});

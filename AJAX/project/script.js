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

        this.loadVisits(); // Завантажити карточки при завантаженні сторінки
    }

    openModal() {
        this.modal.style.display = "block";
    }

    closeModal() {
        this.modal.style.display = "none";
    }

    createVisit() {
        // Отримати значення полів з форми
        const visitPurposeInput = document.getElementById("visit-purpose-input");
        const visitDescriptionInput = document.getElementById("visit-description-input");
        const prioritySelect = document.getElementById("common-priority-select");
        const fullNameInput = document.getElementById("full-name-input");

        // Перевірка на заповненість обов'язкових полів
        if (
            this.doctorSelect.value === "" ||
            visitPurposeInput.value === "" ||
            visitDescriptionInput.value === "" ||
            prioritySelect.value === "" ||
            fullNameInput.value === ""
        ) {
            alert("Будь ласка, заповніть всі обов'язкові поля.");
            return;
        }

        // Створення об'єкту з даними візиту
        const visitData = {
            doctor: this.doctorSelect.value,
            title: visitPurposeInput.value,
            description: visitDescriptionInput.value,
            priority: prioritySelect.value,
            fullName: fullNameInput.value,
        };

        const token = "5421f6d0-11a0-4b32-8b0e-2d5476a236a0";

        // Відправити дані візиту на сервер
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
                console.log(response); // Отримання відповіді від сервера

                // Очистити поля форми
                this.doctorSelect.value = "";
                visitPurposeInput.value = "";
                visitDescriptionInput.value = "";
                prioritySelect.value = "";
                fullNameInput.value = "";

                this.closeModal();

                // Створення карточки візиту на сторінці
                this.createVisitCard(response);
            })
            .catch((error) => {
                console.log("An error occurred:", error);
            });
    }

    createVisitCard(visit) {
        // Створення HTML-елементу карточки візиту
        const visitCard = document.createElement("div");
        visitCard.className = "visit-card";
        visitCard.innerHTML = `
            <h3>${visit.title}</h3>
            <p>${visit.description}</p>
            <p>${visit.doctor}</p>
            <p>${visit.priority}</p>
            <p>${visit.fullName}</p>
        `;

        // Додавання карточки в список
        this.visitList.appendChild(visitCard);

        // Збереження карточки в локальне сховище браузера
        this.saveVisit(visitCard.outerHTML);
    }

    saveVisit(visitHTML) {
        // Отримати збережені карточки з локального сховища
        const savedVisits = localStorage.getItem("visits") || "[]";
        const visits = JSON.parse(savedVisits);

        // Додати нову карточку
        visits.push(visitHTML);

        // Зберегти карточки у локальному сховищі
        localStorage.setItem("visits", JSON.stringify(visits));
    }

    loadVisits() {
        // Отримати збережені карточки з локального сховища
        const savedVisits = localStorage.getItem("visits") || "[]";
        const visits = JSON.parse(savedVisits);

        // Додати карточки до списку на сторінці
        visits.forEach((visitHTML) => {
            const visitCard = document.createElement("div");
            visitCard.className = "visit-card";
            visitCard.innerHTML = visitHTML;
            this.visitList.appendChild(visitCard);
        });
    }

    showDoctorFields() {
        // Перевірка вибраного лікаря і відображення відповідних полів
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

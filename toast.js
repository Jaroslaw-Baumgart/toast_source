
class Toast {
    constructor() {
        this.toastsContainerId = "toasts-container";
        this.init();
    }

    init = () => {
        this.container = document.createElement("div");
        this.container.id = this.toastsContainerId;
        this.container.classList.add("toasts-container");
        document.body.appendChild(this.container);
    }

    create = (content, {
        type = "success",
        duration = 2000,
        callbackDestroyed
    }) => {
        const toastEl = document.createElement("div");
        toastEl.classList.add("toast");
        toastEl.classList.add(type);
        toastEl.innerHTML = content;

        this.container.appendChild(toastEl);

        if (duration) {
            setTimeout( () => {
                toastEl.classList.add("toast-destroy");
                toastEl.addEventListener("animationend", () => {
                    this.removeToast(toastEl, callbackDestroyed);
                });
            }, duration);
        }

        toastEl.addEventListener("click", () => {
            toastEl.classList.add("toast-destroy");
                toastEl.addEventListener("animationend", () => {
                    this.removeToast(toastEl, callbackDestroyed);
                });
        });
    }

    removeToast = (toastEl, callbackDestroyed) => {
        toastEl.remove();
        if (callbackDestroyed) callbackDestroyed();
    }

    generateRandomToast = () => {
        const types = ["success", "danger", "warning", "light", "dark"];
        const type = types[ Math.ceil(Math.random() * types.length) ];
        const duration = Math.ceil(Math.random() * 5000);
        this.create("random toast", {type: type, duration: duration});
    }
}

const toast = new Toast();
toast.create("succes toast", { type: "success" });
toast.create("danger toast", { type: "danger", duration: 3000 });
toast.create("warning toast", { type: "warning", duration: 5000 });
toast.create("light toast", { type: "light", duration: 6000 });
toast.create("dark toast", { 
    type: "dark", duration: 9000,
    callbackDestroyed: () => {
        console.log("toast destroyed!");
    }
});


const randomToastButton = document.getElementById("random-toast");
randomToastButton.addEventListener("click", toast.generateRandomToast);





# 🚀 Toast Notifications

## 📌 Description

This project enables dynamic display of toast notifications in the browser. Notifications can have different styles, display durations, and can be generated randomly.

## 🎯 Features

- Create notifications with different styles (`success`, `danger`, `warning`, `light`, `dark`).
- Set display duration for notifications.
- Close notifications by clicking on them.
- Automatically remove notifications after a specified time.
- Generate random notifications using a button.

## 🛠 Technologies

- HTML
- CSS
- JavaScript (Vanilla JS)
- FontAwesome (for close icons)

## 📂 Project Structure

```
/
├── index.html       # Main page
├── style.css        # Notification styling
├── toast.js         # Notification logic
└── README.md        # Documentation
```

## 🚀 How to Run?

1. Download or clone the repository.
2. Open the project in Visual Studio Code.
3. Install the **Live Server** extension if not already installed.
4. Right-click on `index.html` and select **Open with Live Server**.
5. Click the "Make toast" button to see a random notification.

## 📝 Example Usage

To manually create a notification in JavaScript:

```js
const toast = new Toast();
toast.create("Operation successful", { type: "success", duration: 3000 });
```

## 👨‍💻 Author

Created by **Jarosław Baumgart**.

## 📜 License

This project is available under the **MIT License**.

## 📬 Contact

If you have any questions, feel free to reach out:

🔗 **GitHub:** [Jaroslaw-Baumgart](https://github.com/Jaroslaw-Baumgart)  
📧 **Email:** jaroslawbaumgart@gmail.com

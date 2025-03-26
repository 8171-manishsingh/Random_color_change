
# Random Background Color Changer  

This project is a simple web application that changes the background color randomly each time a button is clicked. It is built using **HTML, CSS, and JavaScript**.  

## 🚀 Features  
- Changes background color randomly on button click  
- Uses JavaScript `Math.random()` to generate colors  
- Simple and lightweight with clean UI  
- No external libraries required  

## 🎨 Technologies Used  
- **HTML** for structure  
- **CSS** for styling  
- **JavaScript** for functionality  

## 📷 Preview  
*(Add a screenshot or GIF of your project here)*  

## 🔧 How to Use  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```
2. Open `index.html` in your browser.  
3. Click the button to change the background color!  

## 🛠 Code Overview  
```html
<button onclick="changeColor()">Change Background Color</button>
```
```css
body {
  transition: background 0.5s ease;
}
```
```js
function changeColor() {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}
```

## 📜 License  
This project is open-source and available under the **MIT License**.  

---

https://github.com/user-attachments/assets/e68ca579-ee23-43ba-9cbc-58d5b1056025



Would you like me to add anything specific? 😊




function userName() {
    let name = prompt("Enter your name please:");
    if (name) {
        alert(`Hello, ${name}! How are you?`);
    }
}
userName();
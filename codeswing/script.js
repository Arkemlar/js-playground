const div = document.getElementById("content");
write = (content) => (div.innerHTML += content);

write("Sometext");
console.log("Log");

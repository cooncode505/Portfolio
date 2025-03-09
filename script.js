let input = document.querySelector("input");
let textarea = document.querySelector("textarea");
let submitLink = document.querySelector("#submitLink");
let description;
let subject;
input.addEventListener("input", (e) => {
    subject = e.target.value;
});
textarea.addEventListener("input", (e) => {
    description = e.target.value;
});
submitLink.addEventListener("click", (e) => {
    // e.preventDefault();  // Commented out, but can be useful if the link needs to behave like a button
    submitLink.href = `mailto:example@gmail.com?subject=${subject}&body=${description}`;
});

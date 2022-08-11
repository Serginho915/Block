let name = prompt(`Enter your name`);
if (name) name = name.trim();

while (!name) {
    name = prompt(`Enter your name again`);
    if (name) name = name.trim();
}

let surname = prompt(`Enter your surname`);
if (surname) surname = surname.trim();

while (!surname) {
    surname = prompt(`Enter your surname again`);
    if (surname) surname = surname.trim();
}

let email = prompt(`Enter your email`);
if (email) email = email.replaceAll(` `,``).toLowerCase();

while (!email || !email.includes(`@`) || email.startsWith(`@`) || email.endsWith(`@`)) {
    email = prompt(`Enter your email again`);
    if (email) email = email.replaceAll(` `,``).toLowerCase();
}

let year = prompt(`Enter your year of birth`)
if (year) year = year.replaceAll(` `,``);

while (!year || isNaN(year)) {
    year = prompt(`Enter your year of birth again`)
    if (year) year = year.replaceAll(` `,``);
}

const thisYear = new Date().getFullYear();
let age = thisYear - year;

document.write(`<ul >
    ${name && surname ? `<li>Full name: ${name} ${surname}</li>` : ``}
    ${email ? `<li>Email: ${email}</li>` : ``}
    ${year ? `<li>Age: ${age}</li>` : ``} 
</ul>`)
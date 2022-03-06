console.log(document);
console.log(document.title);
console.log(document.domain);
console.log(document.URL);
console.log(document.head);
console.log(document.body);
console.log(document.images);
console.log(document);
console.log(document.links);
console.log(document.scripts);


console.log(document.title);

 document.title = "WELCOME";
 console.log(document.title);

let tt =document.title;
tt.innertext = "hi";


const Mtitle = document.getElementById("main_title");

console.log(Mtitle);
Mtitle.innerText = "DHAKA";
Mtitle.innerHTML = "DHAKA";


const subst =  document.getElementsByClassName("st");
subst[0].innerHTML = "<h4>MREN STACK DEVLELOPER</h4>";

const mpara = document.getElementsByClassName('para');
mpara[0].innerText = "Hlw Full Stack DEveloper";
mpara[1].innerHTML = "<h1>Hlw Full Stack DEveloper</h1>";



const tag = document.getElementsByTagName('a');
tag[0].innerHTML = "Name";
tag[1].innerHTML = "Phone";
tag[2].innerHTML = "Email";
tag[3].innerHTML = "Image";
tag[4].innerHTML = "References Person";
console.log(tag);


let test = document.querySelector('h1');
console.log(test);
let dd = document.querySelectorAll('h1');
dd[0].innerText ="SYLHET";
console.log(dd[0]);
console.log(dd[1]);



let heading = document.querySelector('h1.head');
console.log(heading.getAttribute('name'));

heading.setAttribute('style','color:red;');


let text =document.querySelector("#h");

text.setAttribute("class", "sc");
let ans = text.hasAttribute("class", "sc");
console.log(text);
console.log(ans);
let gA = text.getAttribute('class')
console.log(gA);
let name = 'jon';
let age = 40;
let city = 'gyor';


html= `
<ul>
<li>Name: ${name} </li>
<li>Age: ${age} </li>
<li>City: ${city} </li>

</ul>
`;


document.body.innerHTML = html;
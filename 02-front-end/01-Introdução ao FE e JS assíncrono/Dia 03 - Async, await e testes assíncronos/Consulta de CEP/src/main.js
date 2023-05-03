import getAddressFromCep from "./getAdressFromCep";
import Swal from 'sweetalert2';
import "./style.css";
import '@sweetalert2/theme-dark/dark.min.css';
// import "@sweetalert2/theme-dark/dark.css";
// import Swal from 'sweetalert2/dist/sweetalert2.js';

const input = document.querySelector('#input-field');
const button = document.querySelector('button');
const dataParagraph = document.querySelector('.data-paragraph');

button.addEventListener('click', handleClick)

export async function handleClick() {
  const CEP = input.value;
  
  try {
    const data = await getAddressFromCep(CEP)
    const information = `<p><span class='green'>CEP:</span> ${data.cep}</p>
    <p><span class='green'>UF:</span> ${data.uf}</p>
    <p><span class='green'>Localidade:</span> ${data.localidade}</p>
    <p><span class='green'>DDD:</span> ${data.ddd}</p>
    <p><span class='green'>Bairro:</span> ${data.bairro}</p>
    <p><span class='green'>Logradouro:</span> ${data.logradouro}</p>
    `
    dataParagraph.innerHTML = information;
    
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops, algo deu errado',
      text: `Mensagem de erro: ${error.message}`,
      // background: "rgb(50, 50, 50)",
      // color: "white",
    });
  
  }
  
}
  





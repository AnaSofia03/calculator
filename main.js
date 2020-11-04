function calculate(tipo, valor) {

  if (tipo === 'acao') {
    if (valor === 'c') {
      document.querySelector('.input1').value = '';
    };

    if (valor === '/' || valor === '*' || valor === '-' || valor === '+' || valor === '.') {
      document.querySelector('.input1').value += valor;
    };


    if (valor === '=') {
      let resultInput = eval(document.querySelector('.input1').value);
      document.querySelector('.input1').value = resultInput;
    }

  }
  else if (tipo === 'valor') {
    document.querySelector(".input1").value += valor;
  }
 // console.log(valor)

};

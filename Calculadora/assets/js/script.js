function Calculadora() {
  this.display = document.querySelector('.display');

  this.iniciar = () => {
    this.capturaEnter();
    this.capturaClique();
  };

  this.capturaEnter = () => {
    document.addEventListener('keydown', el => {
      if (el.keyCode === 13) {
        this.realizaConta();
      };
    })
  };

  this.capturaClique = () => {
    document.addEventListener('click', el => {
      const ele = el.target;
      if (ele.classList.contains('btn-num')) this.addNumber(ele);
      if (ele.classList.contains('btn-del')) this.removeNumber();
      if (ele.classList.contains('btn-clear')) this.limpaDisplay();
      if (ele.classList.contains('btn-eq')) this.realizaConta();
    })
  };

  this.addNumber = el => {
    this.display.value += el.innerText;
  };

  this.removeNumber = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.limpaDisplay = () => {
    this.display.value = '';
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida');
      }

      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
    }
  }
}

const calculadora = new Calculadora();
calculadora.iniciar();
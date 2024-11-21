/* mexe com o valor dos status*/
      const inputNumero = document.getElementById('numero');
      const titulo = document.getElementById('titulo');
  
      inputNumero.addEventListener('input', () => {
          const valor = Number(inputNumero.value); 
    
          // Altera o texto do span com base no valor
          // Altera o texto e a cor do título com base no valor
    if (valor === 1) {
      titulo.style.color = '#bd0000'; 
      titulo.textContent = 'Péssimo';
    } else if (valor === 2) {
      titulo.style.color = '#720000'; 
      titulo.textContent = 'Ruim';
    } else if (valor === 3) {
      titulo.style.color = '#64B67C'; 
      titulo.textContent = 'Aceitável';
    } else if (valor >= 4 && valor <= 8) {
      titulo.style.color = '#06b6d4'; 
      titulo.textContent = 'Bom';
    } else if (valor === 0) {
      titulo.style.color = 'black'; 
      titulo.textContent = 'Desconhecido';
    } else {
      titulo.style.color = 'gray'; 
      titulo.textContent = 'Desconhecido';
    }
  });
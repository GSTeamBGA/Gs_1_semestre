const input = document.getElementById('numero');
        const span = document.getElementById('colorido');

        input.addEventListener('input', () => {
            const valor = parseInt(input.value);

            if (valor <= 0) {
                span.style.color = 'black';
                alert('Número inválido');
            } else if (valor >=1 && valor <=2 ) {
                span.style.color = '#720000';
            }else if (valor >=3) {
                    span.style.color = '#64B67C';
            } else {
                span.style.color = 'black';
            }
        });

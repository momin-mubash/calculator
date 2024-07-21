const calculatorScreen = document.getElementById('calculator-screen');

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;
        const value = button.textContent;
        let screenValue = calculatorScreen.value;

        if (!action) {
            calculatorScreen.value = screenValue === '0' ? value : screenValue + value;
        } else {
            switch (action) {
                case 'clear':
                    calculatorScreen.value = '';
                    break;
                case 'delete':
                    calculatorScreen.value = screenValue.slice(0, -1);
                    break;
                case 'percent':
                    calculatorScreen.value = (parseFloat(screenValue) / 100).toString();
                    break;
                case 'divide':
                case 'multiply':
                case 'subtract':
                case 'add':
                    calculatorScreen.value += value;
                    break;
                case 'decimal':
                    if (!screenValue.includes('.')) {
                        calculatorScreen.value += '.';
                    }
                    break;
                case 'calculate':
                    try {
                        calculatorScreen.value = eval(screenValue.replace(/×/g, '*').replace(/÷/g, '/'));
                    } catch {
                        calculatorScreen.value = 'Error';
                    }
                    break;
            }
        }
    });
});

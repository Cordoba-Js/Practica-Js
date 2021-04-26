const display_first = document.getElementById('display-first');
const display_second = document.getElementById('display-second');


const display = new Display(display_first, display_second);

document.querySelectorAll('.num').forEach((num_btn) => {
    num_btn.addEventListener('click', () => {
        display.concatNum(num_btn.innerHTML);
    })
})

document.querySelectorAll('.operator').forEach((op_btn) => {

    op_btn.addEventListener('click', () => {
        
        switch(op_btn.name){
            case 'deleteAll':
                display.deleteAll();
                break;
            case 'deleteLast':
                display.deleteLastNum();
                break;
            case 'divide':
                display.calculate('divide', op_btn.innerHTML);
                break;
            case 'substract':
                display.calculate('substract', op_btn.innerHTML);
                break;
            case 'multiply':
                display.calculate('multiply', op_btn.innerHTML);
                break;
            case 'add':
                display.calculate('add', op_btn.innerHTML);
                break;
            case 'equal':
                display.calculate('equal', op_btn.innerHTML);
                break;
        }
        
    })
})

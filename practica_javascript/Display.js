class Display {
    constructor(display_first, display_second){
        this.display_first = display_first;
        this.display_second = display_second;
        this.op_type = '';
        this.op_symbol='';
        this.calc = new Calc();
        this.num1 = '';
        this.num2 = '';
    }

    showValues(){
        this.display_first.textContent = `${this.num1} ${this.op_symbol}`;
        this.display_second.textContent = this.num2;
    }

    concatNum(num){
        const lastCh = this.num2.charAt(this.num2.length - 1);

        if((num === '.' || num === '-') && (this.num2.includes('.') || lastCh == '-')) {return};

        this.num2 += num;
        this.showValues();
    }

    deleteLastNum(){
        if(this.num2 === ''){return};

        this.num2 = this.num2.slice(0,-1);
        this.showValues();
    }
    
    deleteAll(){
        this.num1 = '';
        this.num2 = '';
        this.op_type = '';
        this.op_symbol = '';
        this.calc_num1='';
        this.showValues();
    }

    changeSymbol(op_symbol, op_type){
        if(this.op_symbol === '-' && op_symbol === '-'){
            this.concatNum(op_symbol);
        }else {
            this.op_symbol = op_symbol;
            this.op_type = op_type;
            this.showValues();
        }
    }

    calculate(op_type, op_symbol){
        let num1 = parseFloat(this.num1);
        let num2 = parseFloat(this.num2);

        console.log(num1);
        console.log(num2);

        if (op_symbol === '-' && isNaN(num2) && isNaN(num1)){
            this.concatNum(op_symbol);

        } else if(op_symbol !== '=' && !isNaN(num2) && isNaN(num1)){
            this.num1 = num2;
            this.op_type = op_type;
            this.op_symbol = op_symbol;
            this.num2 = '';
            this.showValues();

        } else if(op_symbol !== '=' && isNaN(num2) && !isNaN(num1)){
            this.changeSymbol(op_symbol, op_type);

        }else if(op_symbol !== '=' && !isNaN(num2) && !isNaN(num2)){
            if(this.op_symbol === '/' && num2 == 0){
                alert('La divisiones por 0 no están definidas');
                this.deleteAll();
            }else{
                this.num1 = this.calc[this.op_type](num1, num2);
                this.num2 = '';
                this.changeSymbol(op_symbol, op_type);
            }
            
        }else if(op_symbol === '=' && !isNaN(num2) && !isNaN(num2)){
            if(this.op_symbol === '/' && num2=== 0){
                alert('La divisiones por 0 no están definidas');
                this.deleteAll();

            }else{
                this.num1 = this.calc[this.op_type](num1, num2);
                this.num2 = '';
                this.changeSymbol('','');
            }
        }
    }
}
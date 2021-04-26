class Display {
    constructor(display_first, display_second){
        this.display_first = display_first;
        this.display_second = display_second;
        this.op_type = '';
        this.calc = new Calc();
        this.calc_num1 = '';
        this.calc_num2 = '';
        this.num1 = '';
        this.num2 = '';
    }

    /*getDisplayFirst(){
        return this.display_first;
    }*/

    showValues(){
        this.display_first.textContent = this.num1;
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
        this.showValues();
    }

    calculate(op_type, op_symbol){
        let num1 = parseFloat(this.calc_num1);
        let num2 = parseFloat(this.num2);

        if((isNaN(num2) || isNaN(num1)) && op_symbol === '='){
            return
        } else if (isNaN(num2) && op_symbol === '-'){
            this.concatNum(op_symbol);

        } else if(isNaN(num1) && op_symbol !== "="){
            
            this.calc_num1 = num2;
            this.op_type = op_type;
            this.concatNum(' ' + op_symbol);
            this.num1 = this.num2;
            this.num2 = '';
        } else if(isNaN(num2) && op_symbol !== ('=' || '-')){
            this.deleteLastNum();
            this.concatNum(op_symbol);
        }
        /*
        if(isNaN(num2) && (op_symbol !== '-')){
            return
        }else if(isNaN(num1) && !isNaN(num2) && op_symbol !== "="){
            num1 = num2;
            num1
        }*/
    }
}
class ContaBancaria {
    constructor(agencia,numero,tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo) return "Saldo insuficiente";
        else this._saldo -= valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo += valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(cartaoCredito){
        super('corrente');
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(){
        super('poupança');
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(){
        super('universitária');
    }

    saque(valor){
        if(valor > this._saldo) return "Saldo insuficiente";
        else if(valor > 500) return "Valor invalido";
        else this._saldo -= valor;
        return this._saldo;
    }
}


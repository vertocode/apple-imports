export class Currency {
    dollar: number = 0

    getDollar() {
        if (this.dollar) {
            return this.dollar
        }
      return fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
        .then(response => response.json())
        .then(data =>
        {
            const dollar = data['USDBRL']['bid']
            this.dollar = dollar
            console.log(this.dollar)
            return dollar
        })
    }
}
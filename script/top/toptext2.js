class TopText2 extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `                    
        <p>Banyak orang yang membuang sampah dan banyak juga orang yang memanfaatkannya</p>
        `;
    }
}

customElements.define("toptext-b", TopText2);
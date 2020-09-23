class TopText extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `                    
        <h1>Buang</h1>
        <h3>atau</h3>
        <h1>Gunakan ?</h1>
`;
    }
}

customElements.define("toptext-a", TopText);
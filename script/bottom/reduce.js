class Reduce extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `            
        <h3>Reduce</h3>
        <p>Reduceberarti mengurangi segala sesuatu yang mengakibatkan sampah</p>
`;
    }
}

customElements.define("reduce-bottom", Reduce);
class BottomHeader extends HTMLElement {
    connectedCallback (){
        this.render();
    }

    render(){
        this.innerHTML = `            
        <h2>Mengelola Dan Menangani Sampah</h2>
        <h3>(3R)</h3>
`;
    }
}
customElements.define("b-header", BottomHeader);
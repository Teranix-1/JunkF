class Recycle extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `            
        <h3>Recycle</h3>
        <p>Recycle berarti mengolah kembali (daur ulang) sampah menjadi barang atau produk baru yang bermanfaat</p>
`;
    }
}

customElements.define("recycle-bottom", Recycle);
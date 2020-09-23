class Reuse extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `            
        <h3>Reuse</h3>
        <p>Reuse berarti menggunakan kembali sampah yang masih dapat digunakan untuk fungsi yang sama</p>
`;
    }
}

customElements.define("reuse-bottom", Reuse);
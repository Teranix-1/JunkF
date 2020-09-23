class Footer2 extends  HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `             
        <p>Name: Teranix</p>
        <p>Location: Anonym</p>
        <p>Rilis: 8 September 2020</p>
        <p>Theme: Buat Dadakan&copy;</p> 
`;
    }
}

customElements.define("footer-b", Footer2);
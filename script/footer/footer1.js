class Footer1 extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `             
        <h3>Junk Education&copy;</h3></div>
        `;
    }
}

customElements.define("footer-a", Footer1);
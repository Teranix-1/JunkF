class B3 extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `                  
        <p class="txt-contents">Limbah B3 dapat diartikan sebagai suatu buangan atau limbah yang sifat dan konsentrasinya mengandung zat yang beracun dan berbahaya</p>
        `;
    }
}

customElements.define("b3-b", B3);
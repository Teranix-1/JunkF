class Organik extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `                  
        <p class="txt-contents">Sampah Organik adalah sampah yang dapat terurai secara sempurna dengan sendirinya melalui proses biologi baik aerob maupun anaerob</p>
        `;
    }
}

customElements.define("organik-a", Organik);
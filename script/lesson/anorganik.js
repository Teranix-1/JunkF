class Anorganik extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `       
        <p class="txt-contents">Sampah Anorganik adalah sampah yang tidak bisa terurai oleh proses biologi. Sampah ini dapat terurai secara alami namun dalam waktu yang sangat lama</p>
        `;
    }
}

customElements.define("anorganik-c", Anorganik);
import {BaseComponent} from './baseComponent.js'
class Manga extends BaseComponent {

    constructor() {
        super()
        this.props = {
            "img": "",
            "content": "",
            "chapters": '',
            "views": "",
            "likes": ""
        }
    }
    static get observedAttributes() {
        return ["img","content","chapters","views","likes"]
    }
    render() {
        this._shadowRoot.innerHTML = 
        `
        <div class="container">
            <div class="Manga">
                <img src="${this.props["img"]}" />
                <div class="content">${this.props["content"]}</div>
                <div class="box">
                    <div class="chapters">${this.props["chapters"]}</div>
                </div>
                
                <div class=views>${this.props["views"]}</div>
                <div class="likes">${this.props["likes"]}</div>        
            </div>
        </div>  
        `
    }
}

window.customElements.define("manga-container", Manga)
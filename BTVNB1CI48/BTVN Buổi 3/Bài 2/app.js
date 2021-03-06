class BlackPinkProfile extends HTMLElement {
  constructor() {
    super();
    //Khởi tạo shadow Dom
    this._shadowRoot = this.attachShadow({ mode: "open" });

    //khởi tạo nguyên mẫu Template(Bên trong chứa những cái gì)
    this._shadowRoot.innerHTML = `
        <img src="" alt="photo">
        <p id="name"></p>
        <p id="age"></p>
        <p id="address"></p>
        `;
    //Lấy các phần tử bên trong shadow root. tương tác với nó khi có thay đổi
    this.$name = this.shadowRoot.querySelector("#name");
    this.$photo = this.shadowRoot.querySelector("img");
    this.$age = this.shadowRoot.querySelector("#age");
    this.$address = this.shadowRoot.querySelector("#address");
  }

  //quan sát những thuộc tính có trong thẻ
  static get observedAttributes() {
    return ["name", "photo", "age", "address"];
  }

  // quan sát sự thay đổi về thuộc tính khi thuộc tính của thẻ thay đổi thì chạy phương thức này
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "name") {
      this.$name.innerHTML = newValue;
    } else if (name === "photo") {
      this.$photo.setAttribute("src", newValue);
    } else if (name === "age") {
      this.$age.innerHTML = newValue;
    } else if (name === "address") {
      this.$address.innerHTML = newValue;
    }
  }
}

window.customElements.define("my-profile", BlackPinkProfile);

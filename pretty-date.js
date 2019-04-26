class PrettyDate extends HTMLElement {
    static get is() {
        return "pretty-date"
    }

    static get observedAttributes() {
        return ["timestamp", "only-time"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
    }

    render() {
        const timestamp = parseInt(this.timestamp);
        if (!isNaN(timestamp)) {
            const date = new Date(timestamp);
            if (this.getAttribute("only-time") != null) {
                this.innerText = date.toLocaleTimeString();
            } else {
                this.innerText = date.toLocaleDateString() + " " + date.toLocaleTimeString();
            }
        }
    }
}

customElements.define("pretty-date", PrettyDate);
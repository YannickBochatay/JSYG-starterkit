import "./styles.css"

/**
* My demo class
*/
export default class HelloWorld {

  /**
  * Constructor
  * @param {string} text message you want to display (optional)
  */
  constructor(text = "Hello world") {

    this.text = text
  }

  /**
  * html rendering
  */
  render() {

    var div = document.createElement("div")

    div.textContent = this.text

    return div
  }
}

document.body.appendChild( new HelloWorld().render() )

import { Application } from "@hotwired/stimulus"
import "jquery"
import "popper.js"
import "bootstrap"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
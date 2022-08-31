import { createRoot } from "react-dom/client"
import { BrowserRouter, HashRouter } from "react-router-dom"
import { App } from "~/App"

const root = createRoot(document?.getElementById("root") as Element)

root.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>
)

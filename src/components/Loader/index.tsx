import Loading from "~/assets/images/loading.gif"
import loaderStyles from "./loader.module.css"
export const Loader = () => {
  return <img src={Loading} alt="Loading..." className={loaderStyles.loader} />
}

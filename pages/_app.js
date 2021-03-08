import { ProvideAuth } from "../hooks/use-auth.js";
import Layout from "../components/Layout"
import '../styles/globals.scss'
import {AuthProvider} from "../contexts/AuthContext"

function MyApp({ Component, pageProps }) {
  
  return (
  
  <ProvideAuth>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </ProvideAuth>
  
)}

export default MyApp

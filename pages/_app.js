import '../styles/globals.css';
import { Footer, Navbar } from '../components';

const App = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default App;

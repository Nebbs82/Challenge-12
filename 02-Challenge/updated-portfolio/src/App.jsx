import { Outlet } from "react-router-dom";
import Header from './Header.jsx';
import Footer from './Footer.jsx';


function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
        <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
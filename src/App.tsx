import { AuthProvider } from "./providers";
import './index.scss'
import { Header } from "./components";


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header/>
      </div>
    </AuthProvider>
  );
}

export default App;

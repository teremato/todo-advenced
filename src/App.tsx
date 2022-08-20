import { AuthProvider, ThemeProvider } from "./providers";
import { Aside, Header, Page } from "./components";
import './index.scss'
import { Home } from "./screens/home/home";


function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="App">
          <Header/>
          <div className='App_main_content'>
            <Aside/>
            <Page>
              <Home/>
            </Page>
          </div>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

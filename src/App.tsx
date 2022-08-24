import { ThemeProvider } from "./providers";
import { Aside, Header, Page, Routing } from "./components";
import './index.scss'


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header/>
        <div className='App_main_content'>
          <Aside/>
          <Page>
            <Routing/>
          </Page>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

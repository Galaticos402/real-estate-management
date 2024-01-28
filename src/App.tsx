import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

function App() {

  return (
    <>
      <MantineProvider>
        <Router>
          <AppRoute />
        </Router>
      </MantineProvider>
    </>
  );
}

export default App;

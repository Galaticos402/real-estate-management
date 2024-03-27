import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";

function App() {
  return (
    <>
      <MantineProvider>
        <Notifications />
        <Router>
          <AppRoute />
        </Router>
      </MantineProvider>
    </>
  );
}

export default App;

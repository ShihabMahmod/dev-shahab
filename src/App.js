import { ThemeProvider as NextThemesProvider } from "next-themes";
import './font.css';
import UserRoutes from './routes/UserRoutes';
import { NextThemeConfigProvider } from "./themes";
function App() {
  return (
    <NextThemesProvider>
      <NextThemeConfigProvider>
        <UserRoutes />
      </NextThemeConfigProvider>
    </NextThemesProvider>
  );
}

export default App;

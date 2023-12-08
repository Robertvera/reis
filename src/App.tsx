import "./App.css";
import FormComponent from "./components/form/form.component";
import { Drawer } from "./components/drawer/drawer.component";
import { Title } from "./components/heading/title.component";
import { Subtitle } from "./components/heading/subtitle.component";
import { createClient } from "@supabase/supabase-js";

const { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY } = process.env;

const supabase = createClient(
  REACT_APP_SUPABASE_URL as string,
  REACT_APP_SUPABASE_ANON_KEY as string
);

function App() {
  return (
    <>
      <div className="container mx-auto overflow-auto form-container">
        <Title />
        <Subtitle />
        <FormComponent />
      </div>
      <Drawer supabaseInstance={supabase} />
    </>
  );
}

export default App;

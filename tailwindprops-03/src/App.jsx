import "./App.css";
import Cards from "./Components/Cards";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-pink-600 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Cards
        place="Taj Mahal"
        city="Agra"
        url={
          "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg"
        }
      />
      <Cards
        place="India Gate"
        city="Delhi"
        url={
          "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </>
  );
}

export default App;

import "./App.css";
import PopoverComponent from "./components/Popover/Popover";

function App() {
  return (
    <div>
      <PopoverComponent>
        <PopoverComponent.Button>Click me</PopoverComponent.Button>
        <PopoverComponent.List>
          {Array.from({ length: 3 }).map((_, i) => (
            <PopoverComponent.ListItem key={i} className="hover:bg-gray-100 cursor-pointer">
              Item {i + 1}
            </PopoverComponent.ListItem>
          ))}
        </PopoverComponent.List>
      </PopoverComponent>
    </div>
  );
}

export default App;

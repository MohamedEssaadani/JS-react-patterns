import { useEffect } from "react";
import UsersContainer from "./container-presentational/UsersContainer";
import Users from "./HOC/Users";
import { useHover } from "./hooks/usehover";

function App() {
  const [ref, isHovering] = useHover();

  useEffect(() => {
    if (isHovering) {
      console.log("Hovering..");
    } else {
      console.log("Not hovering...");
    }
  }, [isHovering]);
  return (
    <div className="App" ref={ref}>
      {/* <UsersContainer /> */}
      <Users />
    </div>
  );
}

export default App;

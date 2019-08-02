import React from "react";
import "./App.scss";
import { StateProvider, ActiveProvider } from "./state/StateContext";
import Main from "./Main";
import CalendarContainer from "./components/CalendarContainer";
import Calendar from "./components/Calendar";
import Week from "./components/Week";

function App() {
  return (
    <StateProvider>
      <div className="App">
        <ActiveProvider>
          <Main>
            <CalendarContainer>
              <Calendar>
                <Week />
              </Calendar>
            </CalendarContainer>
          </Main>
        </ActiveProvider>
      </div>
    </StateProvider>
  );
}

export default App;

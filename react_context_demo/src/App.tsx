import React from 'react';
import InputComponent from "./Components/Input/index";
import './App.css';
import { MyContext } from "./Components/UserContext/MyContext";
import { StudentDisplay } from "./Components/StudentDisplay/index";

class App extends React.Component<{}, { user: [{ key: string, value: number }] }> {

  constructor(props: {}) {
    super(props);
    this.state = {
      user: [
        { key: "Honey", value: 100 }
      ]
    }
  }

  AddUser = (usr: { key: string, value: number }) => {
    const temp = this.state.user;
    temp.push(usr);
    this.setState({
      user: temp
    })
  }

  render() {

    return (
      <MyContext.Provider value={{
        user: this.state.user,
        updateUser: this.AddUser
      }}>
        <StudentDisplay filter='all' />
        <InputComponent />
        <StudentDisplay filter='Above' grad={90} />
        <StudentDisplay filter='Below' grad={70} />
      </MyContext.Provider>
    );
  }
}

export default App;

import React from 'react';
import { inputPros, inputState } from './interface';
import { Btn } from "../Button/index"
import { MyContext } from "../UserContext/MyContext";

class InputComponent extends React.Component<inputPros, inputState>{

    static contextType = MyContext;
    // context!: React.ContextType<typeof MyContext>;
    context!: React.ContextType<typeof MyContext>

    constructor(props: inputPros) {
        super(props);

        this.state = {
            UserName: "",
            Grad: 0
        }

    }

    handaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        this.setState({
            [name]: value
        } as unknown as any)
    }

    stopSubmition = (event: React.FormEvent<HTMLFormElement>) => {

        const { UserName, Grad } = this.state;

        this.setState({
            UserName: "",
            Grad: 0
        })

        this.context.updateUser({ key: UserName, value: Grad });

        event.preventDefault()
    }

    render() {
        const { UserName, Grad } = this.state;
        return (
            <div className="InputBox">
                <h1>Add User</h1>
                <form onSubmit={this.stopSubmition}>
                    <label> Student Name </label>
                    <input type="text" name="UserName" value={UserName} onChange={this.handaleChange} id="" />
                    <label> Grade </label>
                    <input type="number" name="Grad" value={Grad} onChange={this.handaleChange} id="" />

                    <Btn type="submit">Add user</Btn>
                </form>
            </div>
        )
    }
}

export default InputComponent
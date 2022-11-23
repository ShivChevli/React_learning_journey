import React from "react";
import { BtnProperties, UserManCompProp, UserManCompStat, ApiData, Diaplayuser } from "./propInterface";
import "./style.css";

export const Btn: React.FC<BtnProperties> = (props) => {

    return <button className={props.typeBtn} onClick={props.onClick} > {props.children} </button>
}

export class UsersManagementComponent extends React.Component<UserManCompProp, UserManCompStat>{

    constructor(propes: UserManCompProp) {
        super(propes);

        this.state = {
            counter: 1,
            UseList: [],
            message: ""
        }
    }

    removeCounter = () => {
        if (this.state.counter !== 1) {
            let tempArray: ApiData[] = this.state.UseList;
            tempArray.pop();
            this.setState(function (preStat: UserManCompStat) {
                return {
                    counter: preStat.counter - 1,
                    UseList: tempArray,
                    message: ""
                }
            });
        }
        else {
            this.setState({
                message: "There is no user to Remove"
            })
        }
    }

    addCounter = () => {
        if (this.state.counter !== 11) {
            fetch(`https://reqres.in/api/users/${this.state.counter}`)
                .then(res => res.json())
                .then(data => {
                    let tempArray: ApiData[] = this.state.UseList;
                    tempArray.push(data.data);
                    this.setState(function (preStat: UserManCompStat) {
                        return {
                            counter: preStat.counter + 1,
                            UseList: tempArray,
                            message: ""
                        }
                    });

                })
                .catch(error => {
                    console.log("This is loged Error From Code :- ", error)
                })
        }
        else {
            this.setState({
                message: "You have reached the limit"
            })
        }
    }


    render() {
        const { counter } = this.state;
        return (
            <div className="UserManagementDiv">
                <h1> {this.props.children}</h1>
                <h2>User List</h2>
                <div>
                    {this.state.UseList.map(data => < UserDiaplay key={data.id} UserData={data} />)}
                </div>
                <h1> <span>Count :- </span> {counter - 1}</h1>
                <h3>{this.state.message} </h3>
                <Btn typeBtn="default" onClick={this.removeCounter}>Minus</Btn>
                <Btn typeBtn="primary" onClick={this.addCounter}>Add</Btn>
            </div>
        )

    }
}

const UserDiaplay: React.FC<Diaplayuser> = (props) => {
    const { id, first_name, last_name, avatar, email } = props.UserData;
    return (
        <div className="fram">
            <img src={avatar} className="imgBox" alt="This is Avater Image" />
            <div className="UserDetail">
                <p><span>User Id :- </span> {id}</p>
                <p><span>Name :- </span> {first_name + " " + last_name}</p>
                <p><span>Email :- </span> {email}</p>
            </div>
        </div>
    )
}
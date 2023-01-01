import React from "react";
import { MyContext } from "../UserContext/MyContext";
import { displayState, displayProps } from "./interFace";

export class StudentDisplay extends React.Component<displayProps, displayState>{

    static contextType = MyContext;
    context!: React.ContextType<typeof MyContext>;

    displayData = (item: { key: string, value: number }) => {
        if (this.props.filter === 'all') {
            return true;
        }
        else if (this.props.filter === 'Above') {
            return item.value >= this.props.grad!;
        }
        else {
            return item.value <= this.props.grad!;
        }

    }

    render() {
        const { filter, grad } = this.props;
        let heading;
        if (filter === 'all') {
            heading = "All Student Grade";
        }
        else {
            heading = `Student With ${grad}% and ${filter}`;
        }
        return (
            <div className="DisplayShowCase">
                <h1>{heading}</h1>
                <ol>
                    {this.context.user.filter(this.displayData).map(filterItem => <li key={filterItem.key}> {filterItem.key} : {filterItem.value} </li>)
                    }
                </ol>
            </div>
        )
    }
}
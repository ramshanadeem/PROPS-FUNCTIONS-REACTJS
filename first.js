import React from 'react'
import Second from './second'
class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            student:
                [{ name: 'ramsha', age: 20 }, { name: 'zain', age: 16 }],
            toDoList: [{}]

        }
    }

    render() {
        let newstd = this.state.student.filter(item => item.age > 19)
        {
            this.state.student.filter(item => item.age > 19).map(item => (
                <>
                    <h1>{item.name}</h1>
                </>
            ))
        }
        return (
            <div>
                {newstd.map(item => (
                    <h2>{item.name}</h2>
                ))}
                <Second name={this.name} />
                {this.state.student.map(item => (

                    <h4>{item.name}</h4>

                ))
                }
            </div >
        )
    }
}
export default Show;

import React from "react";

class SurgeriesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            procedures: []
        }
    }
    componentDidUpdate() {
        fetch(`http://localhost:4000/procedures?name_like=^` + this.props.searchInput + '.*')
            .then(res => res.json())
            .then(result => this.setState({ procedures: result }))
    }
    render() {
        return (
            <div>
                {console.log(this.state.procedures)}
                Procedures: {this.state.procedures.map(obj => obj.name)}            
            </div>
        )
    }
}

export default SurgeriesComponent;
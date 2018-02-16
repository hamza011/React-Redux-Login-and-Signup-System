import React from 'react';
import { connect } from 'react-redux';
import './huts.css';

function mapStateToProps(store) {
    return {
        hutsFromStore: store.hutsArr
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatchHuts: (hutsArr) => {
            dispatch({ type: "SHOW_HUTS", payload: hutsArr })
        }
    }
}

class Huts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Huts: {
                registeredHuts: this.props.hutsFromStore
            }
        };
        // this.details = false;
        // console.log(this.details);
    }

    componentDidMount() {
        this.props.dispatchHuts(this.state.HutsArray);
        console.log('huts : ', this.state.Huts)
    }
    render() {
        return (
            <div className="huts-comp-cont">
                <h1>ALL REGISTERED HUTS</h1>
                <div className="huts">
                    {this.state.Huts.registeredHuts.map((obj, i) => {
                        if(obj){
                            return <div obj={obj} key={i} className="hut">
                                    <img src={'/images/' + obj.thumbnailURI} className="hut-img" />
                                    <p>
                                        <span className="hut-txt"> {obj.name} </span>
                                        <span><button className="details-btn" onClick={this.showDetails.bind(this, obj.id)}>Show Details</button></span>
                                    </p>
                                </div>;
                        }
                    })}
                </div>
            </div>
        );
    }

    showDetails(id) {
        console.log('id : ', id);
        this.props.history.push('/hutDetails/' + id);
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Huts);
import React, {Component} from 'react';

class Photo extends Component{
    render(){
        const props=this.props;
        //console.log(props);
        const imageUrl = props.location.state.imageUrl;
        return (<div>
            <img src={imageUrl} alt=""></img>
        </div>)
    }
}

export default withRouter(Photo);
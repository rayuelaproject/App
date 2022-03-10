import React from 'react';


export default class Cuerpo extends React.Component {
    
	render() {
        const {foto} = this.props;
		return(
			<div className="attachment">
				<img className="foto" alt="" src={"App/images/"+foto}/>
			</div>
		) 



	}

}
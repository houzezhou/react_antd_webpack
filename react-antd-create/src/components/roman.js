import React from 'react';
class myRoman extends React.Component{
	constructor(props) {
        super(props)
    }
	render(){
		return(
			<div className="roman">
				Hi! RomanPearce!
			</div>
		);
	}
}

class myWuxin extends React.Component{
	constructor(props) {
        super(props)
    }
	render(){
		return(
			<div className="roman">
				Hi! WuXin!
			</div>
		)
	};
}
export {myRoman,myWuxin};

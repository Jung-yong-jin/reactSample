import React from 'react';

class Search extends React.Component{

    render(){
        const name = this.props.match.params.search;
        return 
        <>
            <div>{name}111</div>
        </>
    }
}

export default Search;
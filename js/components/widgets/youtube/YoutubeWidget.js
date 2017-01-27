import React, { Component } from 'react';
import { connect } from 'react-redux';



class YoutubeWidget extends Component {

  render() {
    console.log(this.props.search)
    return(
      <div>VIDEO</div>
    )
  }
}


function mapStateToProps(state) {
   return {search: state.youtube}
}

export default connect(mapStateToProps)(YoutubeWidget);

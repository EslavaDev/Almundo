import React, { Component } from 'react';
import {connect} from 'react-redux';
import { searchApiInpunt } from '../../store/actions';
import Filtro from '../../components/filtros/filtros'

class Filtros extends Component {
  state={
    search:true,
    counter:0,
    input:'',
    start:true
  }

  toggleSearch = env => {

    this.setState({ search: !this.state.search });
  }
  toggleStart = env => {

    this.setState({ start: !this.state.start });
  }

  changeData=(e)=>{
    let data;
    data = parseInt(e.target.value)
    this.setState({counter:data})
  }
  changeInput=(e)=>{
    let data = e.target.value
    this.setState({input:data})
  }
  handleSubmit = event =>{
    event.preventDefault();
    const { input, counter } = this.state;
    this.props.searchApiInpunt({ name: input, start: counter })
}
  ClickSearch=(e)=>{
    const {input, counter} = this.state;
    this.props.searchApiInpunt({name:input,start:counter})
  }
  render() {
    return (
        <Filtro 
        handleSubmit={this.handleSubmit}
        toggleSearch={this.toggleSearch} 
        CollapseSearch={this.state.search} 
        toggleStart={this.toggleStart} 
        CollapseStart={this.state.start} 
        changeData={this.changeData}
        inputSearch={this.changeInput}
        inputValue={this.inputValue}
        ClickSearch={this.ClickSearch}
        />   
    );
  }
}
const mapDispatchToProps = {
  searchApiInpunt
};

export default connect(null,mapDispatchToProps)(Filtros);
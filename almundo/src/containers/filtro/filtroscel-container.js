import React, { Component } from 'react';
import FiltroCel from '../../components/filtros/filtroscel';
import { searchApiInpunt } from '../../store/actions';
import { connect } from 'react-redux';
class Filtros extends Component {

  state = {
    collapse: false,
    start: false,
    search: false,
    counter: 0,
    input: ''
  };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleSearch = env => {

    this.setState({ search: !this.state.search });
  }
  toggleStart = env => {

    this.setState({ start: !this.state.start });
  }

  changeData = (e) => {
    let data;
    data = parseInt(e.target.value)
    this.setState({ counter: data })
  }
  changeInput = (e) => {
    let data = e.target.value
    this.setState({ input: data })
  }

  handleSubmit = event =>{
    event.preventDefault();
    const { input, counter } = this.state;
    this.props.searchApiInpunt({ name: input, start: counter })
}

  ClickSearch = (e) => {
    const { input, counter } = this.state;
    this.props.searchApiInpunt({ name: input, start: counter })
  }
  render() {
    return (
      <FiltroCel 
      toggle={this.toggle} 
      collapseToT={this.state.collapse} 
      toggleSearch={this.toggleSearch} 
      handleSubmit={this.handleSubmit}
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

export default connect(null, mapDispatchToProps)(Filtros);
import React from 'react';
import { Button, Row, Collapse } from 'mdbreact';
import './style.css';

const Filtros = (props) => {
    return (
        <div>
            <div className="bgfiltro p-2 mt-1 align-items-center">
                <p><b>Filtros</b></p>
            </div>
            <div className="bgfiltro p-2 my-1 align-items-center">
                <form className="form-inline p-2" onSubmit={props.handleSubmit}>
                    <label style={{ color: 'indigo' }}>
                        <img style={{ width: 15, height: 15, margin: 3 }} src={require('../../assets/icons/filters/search.svg')} />
                        <b>Nombre del hotel</b>
                        <i className="fa fa-caret-down" onClick={props.toggleSearch}></i>
                    </label>
                    <Collapse isOpen={props.CollapseSearch}>
                        <Row className="pl-3">
                            <Col-9>
                                <input className="form-control form-control-sm mt-2 w-100" type="text" placeholder="Search" aria-label="Search" onChange={props.inputSearch} />
                            </Col-9>
                            <Col-3>
                                <Button color="indigo" size="sm" onClick={props.ClickSearch} >Aceptar</Button>
                            </Col-3>
                        </Row>
                    </Collapse>
                </form>
            </div>
            <div className="bgfiltro p-2 my-1 pl-3">
                <span style={{ color: 'indigo' }} className="fa fa-star checked"><b>  Estrellas</b>
                    <i className="fa fa-caret-down" onClick={props.toggleStart}></i>
                </span>
                <div className="">
                    <Collapse isOpen={props.CollapseStart}>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="start"
                                    value="0"
                                    onChange={props.changeData}

                                /> Todas las estrellas
                        </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="start" value="5" onChange={props.changeData} />
                                <span className="fa fa-star excelent"></span>
                                <span className="fa fa-star excelent"></span>
                                <span className="fa fa-star excelent"></span>
                                <span className="fa fa-star excelent"></span>
                                <span className="fa fa-star excelent"></span>
                                <br />
                                <input type="radio" className="form-check-input" name="start" value="4" onChange={props.changeData} />
                                <span className="fa fa-star excelent"></span>
                                <span className="fa fa-star excelent"></span>
                                <span className="fa fa-star excelent"></span>
                                <span className="fa fa-star excelent"></span>
                                <br />
                                <input type="radio" className="form-check-input" name="start" onChange={props.changeData} value="3" />
                                <span className="fa fa-star excelent"></span>
                                <span className="fa fa-star excelent"></span>
                                <span className="fa fa-star excelent"></span>
                                <br />
                                <input type="radio" className="form-check-input" name="start" onChange={props.changeData} value="2" />
                                <span className="fa fa-star excelent"></span>
                                <span className="fa fa-star excelent"></span>
                                <br />
                                <input type="radio" className="form-check-input" name="start" onChange={props.changeData} value="1" />
                                <span className="fa fa-star excelent"></span>
                            </label>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    );
}

export default Filtros;
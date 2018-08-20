import React, { Component } from 'react';


import HomeLayout from '../../components/home/home-layout';
import FiltrosCelLayout from '../../components/filtros/filtro-cel-layout';
import FiltrosLayout from '../../components/filtros/filtro-layout';
import Filtros from '../filtro/filtros-container';
import Hoteles from '../../components/hotels/hoteles';
import Filtroscel from '../filtro/filtroscel-container';
import { dataApiAsync } from '../../store/actions';
import { connect } from 'react-redux';
class Home extends Component {
    componentDidMount() {
        this.props.dataApiAsync();
    }
    render() {
        console.log('home', this.props.data.query)
        return (
            <HomeLayout>
                <FiltrosLayout>
                    <Filtros />
                </FiltrosLayout>
                <FiltrosCelLayout>
                    <Filtroscel />
                </FiltrosCelLayout>
                <div className="col-md-8 col-sm-12">

                    {this.props.data.query ?
                        this.props.data.query.map((item, i) => {
                            return (<Hoteles
                                key={i}
                                amenities={item.amenities}
                                start={item.stars}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                            />)

                        }) : console.log('aca toy')}
                </div>
            </HomeLayout>
        );
    }
}

const mapStateToProps = (state, props) => {
    let query = state.data.data
    let search = state.data.search.query
    if (query.query) {
        query = query.query;
        if (query.name) {
            query = search.filter(data => {
                if (data.name.toLowerCase().includes(query.name.toLowerCase()))
                    return true
            })
        } else if (query.start != 0) {
            query = search.filter(data => {
                if ((data.stars == query.start))
                    return true
            })
        } else { query = search }
    } else { query = search }
    return { data: { query } }
}

const mapDispatchToProps = {
    dataApiAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


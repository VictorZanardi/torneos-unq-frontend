import React, { Component } from 'react';
import '../css/style.css';
import '../fonts/icomoon/style.css';
import '../css/bootstrap.min.css';
import '../css/magnific-popup.css';
import '../css/owl.theme.default.min.css';
import '../css/aos.css';
import '../css/style.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class MatchesList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            matches: []
        };
    }

    componentDidMount() {
        fetch('/api/matchesNotPlayed')
            .then(response => response.json())
            .then(data => this.setState({ matches: data }))
            .catch(error => { console.log(error.response) });
    }

    render() {

        const { matches } = this.state;
        var matchesHtml = []
        if (matches.length > 0) {
            matchesHtml.push(
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            {matches.map((match, index) => {

                                return index >= 0 ?
                                    <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                                        <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                                            <div className="text-center text-lg-left">
                                                <div className="d-block d-lg-flex align-items-center">

                                                    <div className="text">
                                                        <h3 className="h5 mb-0 text-black">{match.teamA.name}</h3>
                                                        <span className="text-uppercase small country">Argentina</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
                                            <div className="d-inline-block">
                                                <Link to={"/matchBy/" + match.id + "/" + match.teamA.id + "/" + + match.teamB.id} className="btn btn-primary">Gestionar</Link>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4 text-center text-lg-right">
                                            <div className>
                                                <div className="d-block d-lg-flex align-items-center">

                                                    <div className="text order-1 w-100">
                                                        <h3 className="h5 mb-0 text-black">{match.teamB.name}</h3>
                                                        <span className="text-uppercase small country">Argentina</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : <div></div>
                            })}
                        </div>
                    </div>
                </div>
            )
        } else {
            matchesHtml.push(
                <div></div>
            )
        }

        return (
            <div>
                <Header />
                <div className="site-section">
                    <div className="container">
                        <h2 className="h6 text-uppercase text-black font-weight-bold mb-3">Partidos Pendientes</h2>
                        <div className="tab-content" id="pills-tabContent">
                            {matchesHtml}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

} export default MatchesList; 
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
        fetch('/api/matches')
            .then(response => response.json())
            .then(data => this.setState({ matches: data }))
            .catch(error => { console.log(error.response) });
    }

    render() {

        const { matches } = this.state;
        var matchesHtml = []
        if (matches.length > 0) {
            matchesHtml.push(
                matches.map((match) =>

                    <div className="row">
                        <li></li>
                        <div className="col-lg-3 col-md-6 mb-4">
                            {match.teamA.name + " vs " + match.teamB.name}
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4" >
                            <Link to={"/matchBy/" + match.id + "/" + match.teamA.id + "/" + + match.teamB.id} className="btn btn-primary">Gestionar</Link>
                        </div>
                    </div>
                )
            )
        }

        return (
            <div>
                <Header />
                <div className="site-section">
                    <div className="container">
                        <h2 className="text-black">Partidos</h2>
                        <div className="row text-center">
                            {matchesHtml}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

} export default MatchesList; 
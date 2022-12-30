import {Component} from "react";
import './App.css';

//Components
import Card from '../card/card';
import NavbarItem from '../navbar-item/navbar-item';
import WishList from '../wishlist/wishlist';

//Services
import HttpService from '../services/http-service';
const http = new HttpService();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { products: [], cards: [] };

        //Bind functions
        this.loadData = this.loadData.bind(this);
        //this.productList = this.productList.bind(this);
        this.cardList = this.cardList.bind(this);

        this.loadData();
    }

    loadData = () => {
        var self = this;
        setTimeout(function () {
            const user = window.location.pathname.length > 1? window.location.pathname: '/danil';
            http.getCardsData(user)
                .then(function (data) {
                    self.setState({ cards: data.cards, main: data.main });
                });
        }, 0);
    };

    cardList = (navbar) => {
        if (navbar) {
            const list = this.state.cards.map((card, i) =>
                <div key={i} ><NavbarItem key={i}  card={card}/></div>
            );
            return (list);
        } else {
            const list = this.state.cards.map((card, i) =>
                <div key={i} className="col-sm-12">
                    <Card key={i} card={card}/>
                </div>
            );
            return (list);
        }
    };

    render() {
        if (this.state.onWishList) {

        } else {

        }
        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-headershot-wrapper">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="App-headershot" alt="profile image">
                                    <div className="brand">{this.state.main? this.state.main.name: ''}<span className="sensei"> {this.state.main? this.state.main.surname: ''}</span></div>
                                    <div className="brand"><span className="sensei">{this.state.main? this.state.main.title1: ''}</span> {this.state.main? this.state.main.title2: ''}</div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="author">{this.state.main? this.state.main.author: ''}</div>
                                <img className="headershot-img" src={this.state.main? this.state.main.me_t: ''} alt=""></img>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container-fluid App-main">
                    <div className="add-top-menu topnav" id="navbar-toggle">
                        {this.cardList(true)}
                    </div>
                    <div className="row">
                        <div className="remove-side-menu body-div col-sm-5">
                            <div className="col-sm-12">
                                {this.cardList()}
                            </div>
                        </div>
                        <div className="body-div col-sm-5">
                            <WishList/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default App;

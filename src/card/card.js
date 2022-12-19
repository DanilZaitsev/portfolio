import React, {Component} from 'react';
import './card.css';
import DataService from '../services/data-service';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

//Services
import HttpService from '../services/http-service';
const http = new HttpService();

let ds = new DataService();
let ns = new NotificationService();

class Card extends Component {

    constructor(props) {
        super(props);

        this.state = { onWishList: ds.itemOnWishList() };

        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }

    componentDidMount() {
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
    }

    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }

    onWishListChanged(newWishList) {
        this.setState({ onWishList: ds.itemOnWishList(this.props.card) });
    }

    onButtonClicked = () => {
        http.eventCount('Card clicked', this.props.card.title);
        ds.addWishList(this.props.card);
    };

    render() {
        var btnClass;
        if (this.state.onWishList) {
            btnClass = "card card-style card-style-scaled";
        } else {
            btnClass = "card card-style card-style-not-scaled";
        }
        if (this.props.card.clicked) {
            this.props.card.clicked = false;
            btnClass = "card card-style card-style-scaled";
            var id = this.props.card._id;
            setTimeout(function () {
                var el = document.getElementsByName(id);
                el[0].click()
            }, 0);
        }
        const ListItem = ({ value, onClick }) => (
            <li onClick={onClick}>{value}</li>
        );
        const List = ({ items }) => (
            <ul>{items.map((item, i) => <ListItem key={i} value={item.highlight}/>)}</ul>
        );
        return (
            <div className={btnClass} onClick={() => this.onButtonClicked()} name={this.props.card._id}>
                <div className="row">
                    <div className={`card-block col-sm-4 ${this.props.card.order}`}>
                        <img className="card-img-top headershot" src={this.props.card.imgUrl} alt="Card"></img>
                    </div>
                    <div className="card-block col-sm-8">
                        <h4 className="card-title">{this.props.card.title}</h4>
                        <List items={this.props.card.themes} onItemClick={this.onButtonClicked}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
import React, {Component} from 'react';
import './navbar-item.css';
import DataService from '../services/data-service';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

//Services
import HttpService from '../services/http-service';
const http = new HttpService();

let ds = new DataService();
let ns = new NotificationService();

class NavbarItem extends Component {

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
        http.eventCount('NavBar clicked', this.props.card.title);
        ds.addWishList(this.props.card);
    };

    render() {
        var btnClass;
        if (this.state.onWishList) {
            btnClass = "nav-link nav-style nav-style-scaled";
        } else {
            btnClass = "nav-link nav-style nav-style-not-scaled";
        }
        return (
            <div className={btnClass} onClick={() => this.onButtonClicked()} name={this.props.card._id}>{this.props.card.title.split(' ')[0]}</div>
        );
    }
}

export default NavbarItem;
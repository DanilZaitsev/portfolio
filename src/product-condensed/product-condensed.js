import React, {Component} from 'react';
import './product-condensed.css';
import DataService from '../services/data-service';
let ds = new DataService();

class ProductCondensed extends Component {
    constructor(props) {
        super(props);

        this.removeProduct = this.removeProduct.bind(this)
    }

    removeProduct = () => {
        ds.removeWishList(this.props.product);
    };

    render() {
        const ListItem = ({ details_title, details, icon }) => (
            <div className="row">
                <div className="col-sm-1 no-padding">
                    <img className="icon" src={icon} alt="Card"></img>
                </div>
                <div className="col-sm-11">
                    <h3 className="blurb-header">{details_title}</h3>
                    {/*<p className="blurb-info">{details}</p>*/}
                    <p className="blurb-header" dangerouslySetInnerHTML={{ __html: details }} />
                </div>
            </div>
        );
        const List = ({ items, onItemClick }) => (
            <li className="set-position list-group-item pc-condensed">
                {items.map((item, i) => <ListItem key={i} details_title={item.details_title} details={item.details} icon={item.icon}/>)}
            </li>
        );

        const style = {
            "backgroundImage": `url(${this.props.product.imgUrlT})`,
            "backgroundSize": "100%",
            "backgroundRepeat": "round"
        };
        return (
            <div className="pc-darken-img" style={style}>
                {/*<img className="card-img-top headershot pc-darken-img" src={this.props.product.imgUrl} alt="Card"></img>*/}
                <List items={this.props.product.themes}/>
            </div>
        );
    }
}

export default ProductCondensed;
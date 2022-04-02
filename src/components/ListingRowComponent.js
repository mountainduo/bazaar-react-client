import React from "react";
import {Link} from "react-router-dom"
import {parseDate} from "../utils/StringUtils"
import './ListingRowComponent.css'

class ListingRowComponent extends React.Component {

    render() {
        return (
            <li className="list-group-item" key={this.props.idx}>
                <span className="row">
                    <div className="col-3">
                        {this.props.type === "craigslist" &&
                            <img className="row-img"
                            src={`https://images.craigslist.org/${this.props.listing.imagePaths[0]}_300x300.jpg`}
                            alt='No Images Available'></img>
                        }
                        {this.props.type === "bazaar" &&
                            <img className="row-img"
                            src={this.props.listing.imageUrl}
                            alt='No Images Available'></img>
                        }

                    </div>
                    <div className="col-9">
                        <div className ="d-flex w-100 justify-content-between">
                            {this.props.type === "craigslist" && <Link to={`/posts/${this.props.city}/${this.props.listing.pid}`}>
                                <h5>{this.props.listing.title}</h5>
                            </Link>}

                            {this.props.type === "bazaar" && <Link to={`/listings/${this.props.listing.id}`}>
                                <h5>{this.props.listing.title}</h5>
                            </Link>}

                            <small>Posted: {parseDate(this.props.listing.date.replace(/-/g, "/"))}</small>
                        </div>
                        <p className="mb-1">
                            Price: {this.props.listing.price}
                        </p>
                    </div>

                </span>

            </li>

        )
    }
}

export default ListingRowComponent
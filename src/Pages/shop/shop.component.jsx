import React from 'react';

import SHOP_DATA from "./shop.data.js"

import CollectionPreview from "../../Components/preview-collection/collection-preview.component";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map( ({id, ...otherCollectionPops}) => (
                        <CollectionPreview key={id} {...otherCollectionPops}/>
                    ))
                }
            </div>
        )
    }
    
}

export default ShopPage;
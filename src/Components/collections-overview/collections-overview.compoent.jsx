import React from 'react';
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"

import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors.js"

import "./collections-overview.styles.scss";
import CollectionPreview from "../preview-collection/collection-preview.component";

const CollectionsOverviews = ({ collections }) => (
    <div className="collections-overview">
    {
        collections.map( ({id, ...otherCollectionPops}) => (
            <CollectionPreview key={id} {...otherCollectionPops}/>
        ))
    }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverviews);
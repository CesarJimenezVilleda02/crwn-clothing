import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverviews from '../../Components/collections-overview/collections-overview.compoent';
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviews}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)

export default ShopPage;
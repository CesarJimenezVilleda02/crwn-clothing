import React from 'react';
import {withRouter} from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import "./collection-preview.styles.scss"

const CollectionPreview = ({title, items, history, routeName}) => (
    <div className="collection-preview">
        <h1 className="title" style={{cursor: "pointer"}} onClick={() => history.push(`/shop/${routeName}`)}>{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, id) => id < 4)
                .map(item => (
                <CollectionItem key={item.id} item={item}/>
                ))
            }

        </div>
    </div>
)

export default withRouter(CollectionPreview);
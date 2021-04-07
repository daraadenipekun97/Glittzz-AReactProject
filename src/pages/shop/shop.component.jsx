import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component.jsx';
import SHOP_DATA from './shop.data.js'


class ShopPage extends React.Component{
    constructor(){
        super();

        this.state = {
            collections:SHOP_DATA
        }
    }

    render(){
        const {collection} = this.state;
        return(
            <div className = "shop-page">
                {
                    this.state.collections.map(({id, ...otherCollectionProps}) => (
                            <PreviewCollection key = {id} {...otherCollectionProps} />
                    ))
                }

            </div>
           
        )
    }
}

export default ShopPage;
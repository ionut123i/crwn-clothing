import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import './collections-overview.styles.scss'
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import PreviewCollection from '../collection-preview/collection-preview.component'

const CollectionsOverview=({collections})=>(
    <div className='collections-overview'>
    {
        collections.map(({id,...otherCollectionProps})=>(
            <PreviewCollection key={id} {...otherCollectionProps}/>
        ))  
      }
    </div>
)

const mapStateToProps=createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
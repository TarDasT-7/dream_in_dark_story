import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss'

class Directory extends React.Component{

    constructor(){
        super();

        this.state={
            sections:[
                {
                    title: 'Hat' , 
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id:  1,
                    linkUrl: 'hats'
                },
                {
                    title: 'Jacket' , 
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id:  2,
                    linkUrl: ''

                },
                {
                    title: 'Sneakers' , 
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id:  3,
                    linkUrl: ''
                },
                {
                    title: 'Womens' , 
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size:'large',
                    id:  4,
                    linkUrl: ''
                },
                {
                    title: 'Mens' , 
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size:'large',
                    id:  5,
                    linkUrl: ''
                },


            ]
        }

    }

    render(){

        return(
            // <div className="directory-menu">
            //     {this.state.sections.map(({title , imgUrl , id , size}) =>(<MenuItem key={id} title={title} imageUrl={imgUrl} size={size} />))}
            // </div>

            <div className='directory-menu'>
            {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
            ))}
            </div>
        );

    }
}

export default Directory;
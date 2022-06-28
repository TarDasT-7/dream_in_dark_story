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
                    imgUrl: 'https://www.ynotmade.com/shop/products/basicshats/galleryimages/basicshats_6.jpg' , 
                    id:  1
                },
                {
                    title: 'Jacket' , 
                    imgUrl: 'https://www.fashionbeans.com/wp-content/uploads/2017/08/leatherguidemain5.jpg' , 
                    id:  2
                },
                {
                    title: 'Sneakers' , 
                    imgUrl: 'https://images.unsplash.com/photo-1463080197951-ea6abbd2bb9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80' ,   
                    id:  3
                },
                {
                    title: 'Womens' , 
                    imgUrl: 'https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/45912/article_featured%403x.jpg', 
                    size:'large',
                    id:  4
                },
                {
                    title: 'Mens' , 
                    imgUrl: 'https://modelcentral.co/wp-content/uploads/2019/04/model_central_0968.jpg' , 
                    size:'large',
                    id:  5
                },


            ]
        }

    }

    render(){

        return(
            <div className="directory-menu">
                {this.state.sections.map(({title , imgUrl , id , size}) =>(<MenuItem key={id} title={title} imageUrl={imgUrl} size={size} />))}
            </div>
        );

    }
}

export default Directory;
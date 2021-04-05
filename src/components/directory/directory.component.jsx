import React from 'react'
import MenuItem from './../menu-item/menu-item.component';
import './directory.styles.css'
class Directory extends React.Component{
    
    constructor(){

        super();

        this.state = {
            sections:[
                {
                    title: 'hats',
                    imageUrl: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    id:1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    id:2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://images.pexels.com/photos/1750045/pexels-photo-1750045.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    id:3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.pexels.com/photos/953266/pexels-photo-953266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    size: 'large',
                    id:4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    size: 'large',
                    id:5
                },
            ]
        }
    }

    render(){
        return(
            <div className = "directory-menu">
                
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key = {id} title= {title} imageUrl = {imageUrl} size = {size} />
                    ))
                }
                

            </div>
        );
    }
}

export default Directory;
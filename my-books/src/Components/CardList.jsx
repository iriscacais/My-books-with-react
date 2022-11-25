import React from 'react';
import Cards from './Cards';
import data from '../data';

class CardList extends React.Component {
    render() {
        return (
            <div className='Books_container'>
                {data.map((book) => (
                  <Cards
                    key={book.id}
                    name={book.name}
                    author={book.author}
                    genre={book.genre}
                    pages={book.pages}
                    rate={book.rate}
                    img={book.img}
                    characters={book.characters}
                  />
                ))}
                
            </div>
        )
    }
}
export default CardList
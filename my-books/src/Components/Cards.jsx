import React from 'react';

class Card extends React.Component {
    render () {
        const { name, author, genre, pages, img, rate, characters} = this.props;
        return (
            <div className='Card'>
                <div className='Card__Image'>
                    <img src={img} alt='capa do livro' />
                </div>
                <div className='Card_Body'>
                    <h1>{name}</h1>
                    <p>
                        <small>{author}</small>
                        <small>{genre}</small>
                        <small>{pages}</small>
                    </p>
                    <p className='stars'>{rate}</p>
                    <h2>Personagens</h2>
                    <ul>
                        {characters.map((person, index) => (
                            <li key={index}>{person}</li>
                        ))}
                    </ul>
                </div>
            </div> 
        )
    }
}
export default Card
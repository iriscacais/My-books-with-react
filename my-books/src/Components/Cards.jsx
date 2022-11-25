import React from 'react';

class Card extends React.Component {
    render () {
        return (
            <div className='Card'>
                <div className='Card__Image'>
                    <img src='test' alt='test' />
                </div>
                <div className='Card_Body'>
                    <h1>Título</h1>
                    <p>
                        <small>Autor</small>
                        <small>Genero</small>
                        <small>Paginas</small>
                    </p>
                    <p className='stars'>classificacao</p>
                    <h2>Personagens</h2>
                    <ul></ul>
                </div>
            </div> 
        )
    }
}
export default Card
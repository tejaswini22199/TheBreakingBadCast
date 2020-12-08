import React from 'react'
import {Card} from 'react-bootstrap'

const Characterview = ({item}) => {
    return (
        <div>
           <Card style={{ width: '18rem' }}>
                <Card.Img className="Image" style={{width:'10rem'}} variant="top" src={item.img}/>
                <Card.Body >
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text >
                        NickName:
                       {item.nickname}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Characterview

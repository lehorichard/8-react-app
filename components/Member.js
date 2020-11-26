/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { Button, Card } from 'react-bootstrap'
import styles from './Member.module.css'

export const occupations = {
    cooker: 'cooker',
    policeman: 'policeman',
}

export function Member({ name, occupation }) {
    const [editing, setEditing] = useState(false)
    const onClick = () => {
        setEditing(prevEditing => !prevEditing)
    }
    console.log(editing)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img  as="div" variant="top" className={styles.memberImageWrapper} > 
                <img className={styles.memberImage} src={`/images/avatar-${occupation}.png`}></img>
            </Card.Img>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className={styles.example}>
                    I am {occupation}
                </Card.Text>
                <Button variant="primary" onClick={onClick}>Edit</Button>
            </Card.Body>
        </Card>
    )
}

export default Member
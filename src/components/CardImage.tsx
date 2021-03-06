import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { FiExternalLink } from 'react-icons/fi'

interface ICardImage {
  border?: string
  title: string
  description: string
  buttonLink?: string
  buttonText?: string
  buttonVariant?: string
  external: boolean
}

const CardMarginTopBottom = {
  margin: '5px 0px',
}

function CardImage(props: ICardImage): React.ReactNode {
  return (
    <Card border={props.border} style={CardMarginTopBottom}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <a href={props.buttonLink}>
          <Button variant={props.buttonVariant}>
            {props.buttonText} {props.external && <FiExternalLink />}
          </Button>
        </a>
      </Card.Body>
    </Card>
  )
}
export default CardImage

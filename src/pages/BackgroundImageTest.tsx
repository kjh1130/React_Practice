import {Title, Div, Subtitle} from '../components'
import * as D from '../data'

const src = D.randomImage(1200,400)
export const b = ()=> {
    return (
        <section className="mt-4">
            <Title>BackgroundImageTest</Title>
            <Div className="mt-4 bg-gray-300 h-80" src={src}>
                <Subtitle className="text-gray-500">Some Text Here</Subtitle>
            </Div>
        </section>
    )
}
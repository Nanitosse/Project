import {Card, CardImg,CardImgOverlay,CardTitle} from "reactstrap";

const ArrayCard = (props)=>{
    return(
        <Card>
            <CardImg  width='100%' src={props.arr.imageUrl}/>
            <CardImgOverlay>
                <CardTitle>
                    {props.arr.name}
                </CardTitle>
            </CardImgOverlay>

        </Card>
    )


}

export default ArrayCard;
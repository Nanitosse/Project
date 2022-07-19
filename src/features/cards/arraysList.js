import ArrayCard from "./arrayCard";
import { Col, Row } from "reactstrap";
import { ARRAY } from '../../app/shared/array';
//import arrayCard from "./arrayCard";

const ArraysList = () => {
    return (
        <Row className="ms-auto">
            {ARRAY.map((arr) => {
                return (
                    <Col Col md="5" className='m-4' key={arr.id}>
                        <ArrayCard arr={arr} />
                    </Col>

                  

                )
            })}

        </Row>
    )
}
export default ArraysList;
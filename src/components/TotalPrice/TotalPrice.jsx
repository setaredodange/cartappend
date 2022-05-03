import React from "react";
import { Card} from "antd";


const TotalPrice = ({data}) => {
    const totalPayment = data.reduce((total, item) => total + (item.count*(+item.price - (+item.price*item.discount/100))), 0)
    const totalPrice = data.reduce((total, item) => total + item.price*item.count, 0)
    const totalDiscount =totalPayment ? Math.floor(100-(totalPayment*100/totalPrice)) : 0

    return (
        <Card className={`summery-container`}>
            <Card.Grid>
                <span>
                     Total Price
                </span>
                <h3>
                    {totalPrice}   $
                </h3>
            </Card.Grid>
            <Card.Grid>
                <span>
                     Total Discount
                </span>
                <h3>
                {totalDiscount}%
                </h3>
            </Card.Grid>
            <Card.Grid className={`total-payment`}>
                <span>
                     Total Payment :
                </span>
                <h3>
                    {totalPayment}$
                </h3>
            </Card.Grid>
        </Card>
    )
}

export default TotalPrice

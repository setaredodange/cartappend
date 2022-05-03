import React, {useState} from "react";
import {Button, Form, Input, InputNumber, Slider} from "antd";

const EditForm = ({editData,finishHandler}) =>{
    const [name, setName] = useState(editData.name)
    const [price, setPrice] = useState(editData.price)
    const [disc, setDisc] = useState(editData.discount)
    const [count, setCount] = useState(editData?.count)

    return (
        <>
            <Form onFinish={finishHandler} preserve={false}
            initialValues={editData}
            >
                <Form.Item label="name" labelAlign={"left"} labelCol={{span: 24}}>
                    <Form.Item name="name" rules={[{required: true, message: "Name is Required"}]}>
                        <Input size={"large"} placeholder="edit your product name" />
                    </Form.Item>
                </Form.Item>
                <Form.Item label="price" labelAlign={"left"} labelCol={{span: 24}}>
                    <Form.Item name="price" rules={[{required: true, message: "Price is Required"}]}>
                        <InputNumber onChange={value => setPrice(value)} size={"large"} style={{width: "100%"}}  controls={false} min={0}
                                     placeholder="edit your product price"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="Count of product" labelAlign={"left"} labelCol={{span: 24}}>
                    <Form.Item name="count" rules={[{required: true, message: "edit thr number of products"}]}>
                        <InputNumber onChange={value => setCount(value)} size={"large"} style={{width: "100%"}} min={1} placeholder="enter your product name"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="discount" name={"discount"} labelAlign={"left"} labelCol={{span: 24}} rules={[{required: true, message: "edit the discount"}]}>
                    <Slider tipFormatter={(value) => `${value}%`} onChange={value => setDisc(value)} min={0} max={100} />
                </Form.Item>
                <Form.Item>
                    <span>Final Price :</span>
                    <span style={{padding: "0 5px", fontWeight: "bold", fontSize: "24px"}}>
                        {count * (price - (price * disc / 100))} $
                    </span>
                </Form.Item>
                <Form.Item>
                    <Button htmlType={"submit"} shape={"round"} type="primary" block style={{marginTop: "30px", height: "50px"}} size={"large"}>
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default EditForm
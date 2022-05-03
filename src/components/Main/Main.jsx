import React, {useEffect, useState} from "react"
import {Layout,Modal,Divider} from "antd";
import Panel from "../Panel/Panel";
import ListContainer from "../ListContainer/ListContainer"
import TotalPrice from "../TotalPrice/TotalPrice";
import {uid} from "uid";
import EditForm from "../EditForm/EditForm";
const {Content,Sider} = Layout
const Main = () =>{
    const [editData,setEditData] = useState()
    const [formData,setFormData] = useState(()=>{
        const local = localStorage.getItem("cart")
        return local ? JSON.parse(local) : []
    })
    const finishEditHandler = (values) => {
        let temp = formData.filter (item => item.id !== editData.id)
        temp = [...temp,{
            ...values,
            id:editData.id
        }]
        setEditData(null)
        setFormData(temp)
        localStorage.setItem("cart",JSON.stringify(temp))
        Modal.destroyAll()
    }

    return(
        <Layout className={`layout-container `}>
                <Sider width={500} className={`side-container`} >
                    <Panel data={formData} setFormData={setFormData}/>
                </Sider>
                <Content>
                    <ListContainer data={formData} setData={setFormData} setEditData={setEditData}/>
                    <Divider />
                    <TotalPrice data={formData}/>
                </Content>
                <Modal  destroyOnClose={true} title={"Edit Products"} visible={editData} onCancel={()=>setEditData(null)} footer={null}>
                    <EditForm editData={editData} finishHandler={finishEditHandler} />
                </Modal>
        </Layout>
    )
}

export default Main

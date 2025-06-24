import React, { useEffect, useState } from 'react'
import img6 from '../assets/img1 (6).png'
import img7 from '../assets/img1 (7).png'
import img8 from '../assets/img1 (8).png'
import img9 from '../assets/img1 (5).png'
import axios from 'axios'
import { Button, Input, Modal } from 'antd'


const Card = () => {
    let api = "https://to-dos-api.softclub.tj/api/categories"
    let [User, setUser] = useState([])

    async function get() {
        try {
            let { data } = await axios.get(api)
            setUser(data.data)
        } catch (error) {
            console.error(error);

        }
    }

    async function DeletUser(id) {
        try {
            await axios.delete(`https://to-dos-api.softclub.tj/api/categories?id=${id}`)
            get()
        } catch (error) {
            console.error(error);

        }
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    let [Addname, setAddname] = useState("")

    async function AddUser() {
        let newUser = {
            name: Addname
        }
        try {
            await axios.post(api, newUser)
            get()
            setIsModalOpen(false);
        } catch (error) {
            console.error(error);

        }
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setIsModalEdit(false)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setIsModalEdit(false)
    };


    const [isModalEdit, setIsModalEdit] = useState(false);
    let [Editname, setEditname] = useState("")
    let [idx, setidx] = useState(null)
    async function EditnewUser() {
        let newEdit = {
            name: Editname,
            id: idx,
        }
        try {
            await axios.put(api, newEdit)
            get()
            setIsModalEdit(false)
        } catch (error) {
            console.error(error);

        }

    }

    function Edituser(el) {
        setIsModalEdit(true)
        setEditname(el.name)
        setidx(el.id)
    }

    let [Search,setSearch]=useState("")

    useEffect(() => {
        get()
    }, [])



    return (
        <div className='text-center my-[50px]'>
          
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={AddUser}
                onCancel={handleCancel}
            >
                <Input value={Addname} onChange={(e) => setAddname(e.target.value)} placeholder='Name...'  ></Input>
            </Modal>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalEdit}
                onOk={EditnewUser}
                onCancel={handleCancel}
            >
                <Input value={Editname} onChange={(e) => setEditname(e.target.value)} placeholder='Name...'  ></Input>
            </Modal>
            <h1 className='font-black text-3xl my-[60px]'>Новые поступления обуви</h1>
            <div className='flex justify-around items-center'>
            <input className='lg:w-[30%] w-[50%] border p-[10px] rounded-[5px]' type="text" placeholder='Search...' value={Search} onChange={(e)=>setSearch(e.target.value)} />
              <Button type="primary" onClick={showModal}>
                Add New Producs
            </Button>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 my-[30px] w-[95%] mx-auto gap-[20px] mb-[50px]'>
                {User.filter(el=>el.name.toLowerCase().includes(Search.toLowerCase())).map(el => {
                    return (
                        <div key={el.id} className='border  p-[20px]'>
                            <img src={img6} alt="" />
                            <h1>{el.name}</h1>
                            <div className='flex justify-around my-[10px]'>
                                <Button type="primary" className='border px-[10px]' onClick={() => DeletUser(el.id)}>Delete</Button>
                                <Button type="primary" className='border px-[10px]' onClick={(e) => Edituser(el)} >Edit</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='flex justify-center gap-[30px] my-[30px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className='font-black'>1/9</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>
            <button className='w-[150px] p-[10px] my-[20px] rounded-[5px] bg-[#1F2A37] text-white'>Посмотреть все</button>
        </div>
    )
}

export default Card
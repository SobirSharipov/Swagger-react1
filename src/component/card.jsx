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
            setAddname("")
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

    let [Search, setSearch] = useState("")

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
                <input className='lg:w-[30%] w-[50%] border p-[10px] rounded-[5px]' type="text" placeholder='Search...' value={Search} onChange={(e) => setSearch(e.target.value)} />
                <Button type="primary" onClick={showModal}>
                    Add New Producs
                </Button>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 my-[30px] w-[95%] mx-auto gap-[20px] mb-[50px]'>
                {User.filter(el => el.name.toLowerCase().includes(Search.toLowerCase())).map(el => {
                    return (
                        <div key={el.id} className='border  p-[20px]'>
                            <img src={img6} alt="" />
                            <h1>{el.name}</h1>
                            <div className='flex justify-around gap-[20px] my-[10px]'>
                                <button type="primary" className='border px-[10px] text-red-600' onClick={() => DeletUser(el.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>

                                </button>
                                <button type="primary" className='border px-[10px] text-blue-600' onClick={(e) => Edituser(el)} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>

                                </button>
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
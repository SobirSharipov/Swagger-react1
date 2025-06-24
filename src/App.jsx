
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Button, Input, Modal } from 'antd';
import Card from './component/card'

import img from './assets/Logo (3).png'
import img1 from './assets/img1.png'
import img2 from './assets/img1 (2).png'
import img3 from './assets/img1 (3).png'
import img4 from './assets/img1 (4).png'
import img5 from './assets/img1 (1).png'
import img9 from './assets/img1 (9).png'
import img10 from './assets/img1 (10).png'

function App() {

  return (
    <div>
      <header className='flex justify-between lg:px-[30px] items-center py-[20px]'>
        <div>
          <img src={img} alt="" />
        </div>
        <div className='lg:flex hidden gap-[20px]'>
          <a href="">Одежда</a>
          <a href="">Обувь</a>
          <a href="">Аксессуары</a>
          <a href="">Калькулятор стоимости</a>
          <a href="">Помощь</a>
          <a href="">Подобрать размер</a>
        </div>
        <div className='flex  items-center gap-[20px]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <div className='w-[250px] bg-[#57BFC1] text-white flex gap-[20px] items-center rounded-2xl px-[10px]'>
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <p className='font-black'>Наш телеграм канал</p>
              <p>Telegram web app</p>
            </div>
          </div>
        </div>
      </header>
      <div className='lg:flex justify-around items-center bg-[#E2E8F0] py-[20px]'>
        <div className='lg:w-[33%] w-[90%] mx-auto'>
          <h1 className='font-extrabold text-4xl my-[30px]'> Оригинальные товары от POIZON </h1>
          <li>Доставка по всей России бесплатно</li>
          <li>Официально зарегистрированное юридическое лицо</li>
          <li>Оформление и оплата заказа как в магазине</li>
          <li>Только сертифицированные товары из каталога POIZON</li>
          <li>Доставили более 10 000 посылок за 3 года</li>
        </div>
        <div className='lg:w-[40%] my-[20px]'>
          <img src={img2} alt="" />
        </div>
      </div>
      <div className='flex justify-around mx-[20px] items-center my-[30px]'>
        <h1 className='font-black lg:text-2xl '>Категории. <span className='text-gray-500 font-bold'>Гарантированно оригинальные товары</span></h1>
        <div className='flex gap-[50px]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-[30px] h-[30px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-[30px] h-[30px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
      </div>
      <div className='box'>
        <div className='lg:w-[52%]  w-[200%]  flex-shrink-0 rounded-2xl p-[10px] gap-[20px] flex  bg-[#F1F5F9]'>
          <div className='lg:w-[70%] w-[80%]'>
            <p className='font-black'>Одежда</p>
            <p className='font-light my-[20px]'>Откройте для себя мир роскоши
              и качества с одеждой от ведущих
              мировых брендов: Addidas,
              Timberland, The North Face и других
              знаменитых брендов</p>
            <button className='w-[60%] p-[5px] rounded-2xl bg-white'>Выбрать</button>
          </div>
          <div className='w-[30%]'>
            <img src={img3} alt="" className='w-[95%]' />
          </div>
        </div>
        <div className='lg:w-[52%]  w-[200%] flex-shrink-0 rounded-2xl p-[10px] gap-[20px] flex  bg-[#F1F5F9]'>
          <div className='lg:w-[70%] w-[80%]'>
            <p className='font-black'>Обувь</p>
            <p className='font-light my-[20px]'>Откройте для себя мир роскоши
              и качества с одеждой от ведущих
              мировых брендов: Addidas,
              Timberland, The North Face и других
              знаменитых брендов</p>
            <button className='w-[60%] p-[5px] rounded-2xl bg-white'>Выбрать</button>
          </div>
          <div>
            <img src={img4} alt="" className='w-[85%]' />
          </div>
        </div>
        <div className='lg:w-[52%]  w-[200%]  flex-shrink-0 rounded-2xl p-[10px] gap-[20px] flex  bg-[#F1F5F9]'>
          <div className='lg:w-[70%] w-[80%]'>
            <p className='font-black'>Ассортимент</p>
            <p className='font-light my-[20px]'>Откройте для себя мир роскоши
              и качества с одеждой от ведущих
              мировых брендов: Addidas,
              Timberland, The North Face и других
              знаменитых брендов</p>
            <button className='w-[60%] p-[5px] rounded-2xl bg-white'>Выбрать</button>
          </div>
          <div className='w-[30%]'>
            <img src={img5} alt=""  className='w-[95%]'/>
          </div>
        </div>
      </div>
      <Card />
      <Card />
      <Card />
      <div className='lg:flex justify-around my-[60px]'>
        <div className='lg:w-[30%] bg-[#57BFC10F] text-center p-[20px] rounded-2xl'>
          <h1 className='font-black text-2xl'>Рассчитай стоимость заказа прямо на сайте</h1>
          <button className='border-[#57BFC1] border text-[#57BFC1] w-[300px] my-[20px] p-[10px] rounded-4xl'>Цена на товар в юанях</button>
          <div className='flex items-center justify-around my-[20px]'>
            <button className='w-[160px] p-[10px] rounded-4xl bg-[#57BFC126] font-bold text-[#57BFC1]'>Обувь</button>
            <button className='w-[45px] h-[45px] rounded-[50%] bg-[#57BFC1] p-[10px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
            </button>
          </div>
          <p className='font-bold my-[15px]'>Итоговая стоимость: 3500₽</p>
          <p>С учётом доставки</p>
        </div>
        <div className='lg:w-[45%]'>
          <img src={img9} alt="" />
          <button className='w-[200px] absolute z-10 mt-[-20px] ml-[30px] rounded-2xl flex justify-center gap-[20px] p-[10px] bg-[#266163] text-white'>Сделать заказ <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          </button>
        </div>
      </div>
      <footer className='my-[70px] mt-[100px]'>
        <div className='lg:flex grid grid-cols-2 my-[50px] mx-[30px] justify-around'>
          <div>
            <p>Помощь</p> <br />
            <p>Частые вопросы</p> <br />
            <p>Доставка и самовывоз</p>
          </div>
          <div>
            <p>Политика и условия</p> <br />
            <p>Обмен и возврат</p> <br />
            <p>Политика конфиденциальности</p> <br />
            <p>Условия предоставления услуг</p>
          </div>
          <div  className='lg:block hidden'>
            <p>Служба клиентской поддержки</p><br />
            <p>support@thesortage.com <br />
              +7(995)788-00-58</p> <br />
            <p>Звонки принимаются ежедневно <br /> с 10:00 до 22:00 по МСК.</p>
          </div>
          <div className='lg:block hidden'>
            <p>Адреса складов</p> <br />
            <p>Москва, Кутузовский проспект <br /> 48ТЦ Галереи "Времена Года", 3 этаж.</p> <br />
            <p>Время работы: ежедневно с 11:00 <br />до 22:00.</p> <br />
            <p>Московская область, деревня Воронки,<br />
              1 к. 4. ТЦ Архангельское Аутлет.</p>
            <p>Время работы: ежедневно с 10:00 <br />до 22:00.</p>
          </div>
        </div>
        <div className='w-[95%] mx-auto'>
          <img src={img10} alt="" />
        </div>
      </footer>




    </div>
  )
}

export default App

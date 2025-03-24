import Maincard from "./maincard";
import Contentcard from "./contentcard";
import React, { useState,useEffect } from 'react'
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from 'framer-motion';
import './News.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function News() {
    const [data, setData] = useState([]);//fetch data tu db
    const [content, setContent] = useState([]);//fetch data tu db
    useEffect(() => {
      axios.get("https://be.fuct.gay/articles").then((res) => {
        setData(res.data.slice(res.data.length-5,res.data.length).reverse());
        setContent(res.data.slice().reverse());
      });
    }, []);
    //---------ket thuc fetch data--------------------------------
    const [curMainPage,setCurMainPage] = useState(0);//ghi card hien tai
    const [prevMainPage, setPrevMainPage] = useState(0);//ghi trang truoc do, su dung de so sanh xem trang moi la < > de tao huong cho animation
    const mainCards = data.slice();//noi dung fetch vao
    const offsetMainCard = curMainPage * 1;//sau khi chuyen trang fetch trang moi tu dau
    const mainCardsToShow = mainCards.slice(offsetMainCard,offsetMainCard + 1)//sao ra mot mang moi de hien thi tai 1 thoi diem
    // console.log(mainCardsToShow);
    function handleMainClick({selected}){//xu ly khi click vao cac dau cham trang, set lai trang da duyet
      setPrevMainPage(curMainPage);
      setCurMainPage(selected);
    }
    function iconClick(direction){//xu ly click vao nut trai va phai,set lai trang da duyet
      setPrevMainPage(curMainPage);
      setCurMainPage((curMainPage) =>
        direction === 1
          ? (curMainPage + 1) % mainCards.length
          : (curMainPage - 1 + mainCards.length) % mainCards.length
      );
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        if(data.length != 0){
          setPrevMainPage(curMainPage);
          setCurMainPage((curMainPage + 1) % mainCards.length);
        }
      }, 5000); // 5000 milliseconds = 5 seconds

      return () => clearTimeout(timer);
    }, [curMainPage,mainCards.length]);
    const direction = curMainPage > prevMainPage ? "left" : "right";
    const variants = {
      enter: (direction) => ({//set animation
          x: direction === "left" ? 1000 : -1000,
          opacity: 1,
      }),
      center: {
          x: 0,
          opacity: 1,
      },
  };
    //---------ket thuc pagination the main--------------------------------------------------
    const itemsPerPage = 4;//so card content tren trang
    const [curPage,setCurPage] = useState(0);//vi tri trang news
    const cards = content.slice();//fetch tu db

    const offset = curPage * itemsPerPage;//vi tri bat dau cua content card render tren moi trang
    const curCards = cards.slice(offset,offset + itemsPerPage);//sao mang hien thi tren 1 thoi diem

    function handlePageClick({selected}){//xu ly click chuyen trang
        setCurPage(selected);
    }
    //----------ket thuc pagination cac bai viet--------------------------------------------
    const navigate = useNavigate();
    const handleCardClick = (news,date,id) => {
      navigate(`/news/content/`,{state : {content: news,date: date,id:id}});
    }
    return (
    <div>
      <div className="button-with-maincard">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={curMainPage}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          transition={{ duration: 0.5 }}
        >
        {mainCardsToShow.map((card,index)=> (
        <Maincard key={index + offsetMainCard} title={card.title} content={card.content} onClick={() =>handleCardClick(card.content,card.created_at,card.id)}/>
        ))}
        </motion.div>
      </AnimatePresence>
        <div className="news-slider-button">
          <img src="/image/arrowleft.png" alt="" className="arrow-left" onClick={() => iconClick(0)} />
          <img src="/image/arrow.png" alt="" className="arrow-right" onClick={() => iconClick(1)} />
        </div>
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={data.length}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handleMainClick}
        containerClassName={"pagination-top"}
        pageLinkClassName={"page-link"}
        activeClassName={"active-top"}
        forcePage={curMainPage}
      />
{/* ----------------------------------------------- */}
      {curCards.map((card, index) => (
        <Contentcard key={index + offset} title={card.title} content={card.content} date={card.created_at} onClick={() => handleCardClick(card.content,card.created_at,card.id)} />
      ))}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={Math.ceil(content.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  )
}

export default News

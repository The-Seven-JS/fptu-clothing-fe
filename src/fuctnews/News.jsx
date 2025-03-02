import Maincard from "./maincard";
import Contentcard from "./contentcard";
import React, { useState,useEffect } from 'react'
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from 'framer-motion';
import './News.css'
import axios from "axios";
function News() {
    const [data, setData] = useState([]);//fetch data tu db
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        setData(res.data.slice(0,5));
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
          setPrevMainPage(curMainPage);
          setCurMainPage((curMainPage + 1) % mainCards.length);
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
    const cards = Array.from({length:200});//fetch tu db

    const offset = curPage * itemsPerPage;//vi tri bat dau cua content card render tren moi trang
    const curCards = cards.slice(offset,offset + itemsPerPage);//sao mang hien thi tren 1 thoi diem

    function handlePageClick({selected}){//xu ly click chuyen trang
        setCurPage(selected);
    }
    //----------ket thuc pagination cac bai viet--------------------------------------------
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
        <Maincard key={index + offsetMainCard} title={card.title} content={card.body}/>
        ))}
        </motion.div>
      </AnimatePresence>
        <div className="button">
          <img src="src/fuctnews/arrowleft.png" alt="" className="arrow-left" onClick={() => iconClick(0)} />
          <img src="src/fuctnews/arrow.png" alt="" className="arrow-right" onClick={() => iconClick(1)} />
        </div>
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={5}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handleMainClick}
        containerClassName={"pagination-top"}
        pageLinkClassName={"page-link"}
        activeClassName={"active-top"}
        forcePage={curMainPage}
      />
{/* ----------------------------------------------- */}
      {curCards.map((_, index) => (
        <Contentcard key={index + offset} number={index + offset} />
      ))}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={Math.ceil(200 / itemsPerPage)}
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

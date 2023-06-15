"use client";

import React, { useEffect, useState } from "react";
// import Rectangle66 from "../../asset/images/blogs/Rectangle66.png";
// import Rectangle67 from "../../asset/images/blogs/Rectangle67.png";
// import Rectangle85 from "../../asset/images/blogs/Rectangle85.png";
// import Rectangle94 from "../../asset/images/blogs/Rectangle94.png";
// import "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png" from "../../asset/images/blogs/"https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png".png";
// import Rectangle96 from "../../asset/images/blogs/Rectangle96.png";

// // import Slider from "react-slick";

// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // import "./index.scss";
// import Image from "next/image";
import {
  BasicCard,
  BlogCard,
  BlogTitle,
  CardBody,
  CardButton,
  CardDate,
  CardDescription,
  CardImage,
  CardTitle,
  CardWrapper,
  Container,
  Main,
  MainCard,
  MainCardBody,
  MainCardDate,
  MainCardDescription,
  MainCardImage,
  MainCardTitle,
  QuateCard,
  QuateOne,
  QuateText,
  QuateTwo,
  QuateWrapper,
} from "../../src/style";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { GET } from "../../src/services/methods";

const blogData = [
  {
    image:
      "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png",
    title:
      "The Cut or Clarity Factor: Which Matters Most for Lab Grown Diamonds?",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "normal",
  },
  {
    image:
      "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png",
    title:
      "The Cut or Clarity Factor: Which Matters Most for Lab Grown Diamonds?",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "normal",
  },
  {
    image:
      "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png",
    title:
      "The Cut or Clarity Factor: Which Matters Most for Lab Grown Diamonds?",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "qoute",
  },
  {
    image:
      "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png",
    title:
      "The Cut or Clarity Factor: Which Matters Most for Lab Grown Diamonds?",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "main",
  },
  {
    image:
      "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png",
    title:
      "The Cut or Clarity Factor: Which Matters Most for Lab Grown Diamonds?",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "normal",
  },
  {
    image:
      "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png",
    title:
      "The Cut or Clarity Factor: Which Matters Most for Lab Grown Diamonds?",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "normal",
  },
  {
    image:
      "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png",
    title:
      "The Cut or Clarity Factor: Which Matters Most for Lab Grown Diamonds?",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "normal",
  },
  {
    image:
      "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png",
    title:
      "The Cut or Clarity Factor: Which Matters Most for Lab Grown Diamonds?",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "normal",
  },
];

export const BasicBlogCard = ({ image, title, date, focusWord, desc }) => (
  <BasicCard>
    <BlogCard>
      <CardImage src={image} alt="..." />
      <CardBody>
        <CardTitle>{title}</CardTitle>

        <CardDate>{date}</CardDate>

        <CardDescription>{desc}</CardDescription>
        <div>
          <CardButton>Read more</CardButton>
        </div>
      </CardBody>
    </BlogCard>
  </BasicCard>
);

export const QuateBlogCard = ({ title, date }) => (
  <QuateCard>
    <QuateWrapper>
      <QuateOne>
        <svg
          width="47"
          height="33"
          viewBox="0 0 47 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.896 32.28C5.16533 32.28 3.16 31.5973 1.88 30.232C0.685334 28.7813 0.0880003 26.9467 0.0880003 24.728V22.936C0.0880003 19.4373 1.112 15.5973 3.16 11.416C5.208 7.14933 8.06667 3.43733 11.736 0.279999H20.312C17.752 3.01067 15.6613 5.61333 14.04 8.088C12.504 10.4773 11.3947 13.1653 10.712 16.152C12.4187 16.5787 13.656 17.3893 14.424 18.584C15.2773 19.7787 15.704 21.2293 15.704 22.936V24.728C15.704 26.9467 15.064 28.7813 13.784 30.232C12.5893 31.5973 10.6267 32.28 7.896 32.28ZM33.752 32.28C31.0213 32.28 29.016 31.5973 27.736 30.232C26.5413 28.7813 25.944 26.9467 25.944 24.728V22.936C25.944 19.4373 26.968 15.5973 29.016 11.416C31.064 7.14933 33.9227 3.43733 37.592 0.279999H46.168C43.608 3.01067 41.5173 5.61333 39.896 8.088C38.36 10.4773 37.2507 13.1653 36.568 16.152C38.2747 16.5787 39.512 17.3893 40.28 18.584C41.1333 19.7787 41.56 21.2293 41.56 22.936V24.728C41.56 26.9467 40.92 28.7813 39.64 30.232C38.4453 31.5973 36.4827 32.28 33.752 32.28Z"
            fill="white"
          />
        </svg>
      </QuateOne>
      <QuateText>{title}</QuateText>
      <QuateTwo>
        <svg
          width="47"
          height="33"
          viewBox="0 0 47 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.104 0.720001C41.8347 0.720001 43.84 1.40267 45.12 2.76801C46.3147 4.21867 46.912 6.05333 46.912 8.272V10.064C46.912 13.5627 45.888 17.4027 43.84 21.584C41.792 25.8507 38.9333 29.5627 35.264 32.72H26.688C29.248 29.9893 31.3387 27.3867 32.96 24.912C34.496 22.5227 35.6053 19.8347 36.288 16.848C34.5813 16.4213 33.344 15.6107 32.576 14.416C31.7227 13.2213 31.296 11.7707 31.296 10.064V8.272C31.296 6.05333 31.936 4.21867 33.216 2.76801C34.4107 1.40267 36.3733 0.720001 39.104 0.720001ZM13.248 0.720001C15.9787 0.720001 17.984 1.40267 19.264 2.76801C20.4587 4.21867 21.056 6.05333 21.056 8.272V10.064C21.056 13.5627 20.032 17.4027 17.984 21.584C15.936 25.8507 13.0773 29.5627 9.408 32.72H0.831997C3.392 29.9893 5.48266 27.3867 7.104 24.912C8.64 22.5227 9.74933 19.8347 10.432 16.848C8.72533 16.4213 7.488 15.6107 6.72 14.416C5.86666 13.2213 5.44 11.7707 5.44 10.064V8.272C5.44 6.05333 6.08 4.21867 7.36 2.76801C8.55466 1.40267 10.5173 0.720001 13.248 0.720001Z"
            fill="white"
          />
        </svg>
      </QuateTwo>
    </QuateWrapper>
    <div className="date-text">{date}</div>
  </QuateCard>
);

export const MainBlogCard = ({ image, title, date, focusWord, desc }) => (
  <MainCard>
    <BlogCard>
      <MainCardImage
        src={
          "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png"
        }
        width={200}
        alt="..."
      />
      <MainCardBody>
        <MainCardTitle>{title}</MainCardTitle>
        <MainCardDate>{date}</MainCardDate>

        <MainCardDescription>{desc}</MainCardDescription>
        <div>
          <CardButton>Read more</CardButton>
        </div>
      </MainCardBody>
    </BlogCard>
  </MainCard>
);

const BlogNews = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "myCustomCarousel",
    arrows: false,
    autoplay: true,
  };

  const [blogDatas, setBlogDatas] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await GET("/blog");
      console.log(res);
      const result = res.data.map((item) => ({
        ...item,
        focusWord: "abcd",
        metaDesc: item.metaDescription,
      }));
      setBlogDatas(result);
    })();
  }, []);

  return (
    <div className="blog-news-page">
      <div className="">
        {/* <Slider {...settings}>
          {[1, 2, 3, 4].map((_, ind) => (
            <div className="news-hero">
              <div className="container">
                <div className="news-wrapper">
                  <div className="hash-title">#{ind}.</div>
                  <div className="news-title">
                    Diamonds are forever. are lab grown diamond too ?
                  </div>
                  <div className="sub-news-title">
                    Some may call them manmade diamonds; others would prefer CVD
                    or man-made diamonds. The truth is lab grown diamonds have
                    as names as it has myths .........
                  </div>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </Slider> */}
      </div>
      <Container>
        <BlogTitle>News & Blog</BlogTitle>

        {/* {blogsData.map(
            (blog, index) => {
              return (() => {
                if (index === 2) {
                  return <ThirdElement key={index} />;
                } else if (index === 3) {
                  return <FourthElement key={index} />;
                }
                return (

                );
              })();
            } */}

        <CardWrapper>
          {/* first two data */}
          {blogDatas &&
            blogDatas.slice(0, 2).map((blog, index) => {
              return (() => {
                if (blog.blogType === "qoute" && index === 2) {
                  return (
                    <QuateBlogCard
                      key={index}
                      title={blog.title}
                      date={blog.date}
                    />
                  );
                } else if (blog.blogType === "main" && index === 3) {
                  return (
                    <MainBlogCard
                      key={index}
                      image={blog.image}
                      title={blog.title}
                      date={blog.date}
                      focusWord={blog.focusWord}
                      desc={blog.metaDesc}
                    />
                  );
                }
                return (
                  <BasicBlogCard
                    key={index}
                    image={blog.image}
                    title={blog.title}
                    date={blog.date}
                    focusWord={blog.focusWord}
                    desc={blog.metaDesc}
                  />
                );
              })();
            })}
          {/* third image data */}

          <QuateBlogCard title={blogData[2].title} date={blogData[2].date} />
          <MainBlogCard
            image={blogData[3].image}
            title={blogData[3].title}
            date={blogData[3].date}
            focusWord={blogData[3].focusWord}
            desc={blogData[3].metaDesc}
          />
          {/* last all data */}
          {blogDatas &&
            blogDatas.slice(2).map((blog, index) => {
              return (() => {
                // if (blog.blogType === "qoute" && index === 2) {
                //   return (
                //     <QuateBlogCard
                //       key={index}
                //       title={blog.title}
                //       date={blog.date}
                //     />
                //   );
                // } else if (blog.blogType === "main" && index === 3) {
                //   return (
                //     <MainBlogCard
                //       key={index}
                //       image={blog.image}
                //       title={blog.title}
                //       date={blog.date}
                //       focusWord={blog.focusWord}
                //       desc={blog.metaDesc}
                //     />
                //   );
                // }
                return (
                  <BasicBlogCard
                    key={index}
                    image={blog.image}
                    title={blog.title}
                    date={blog.date}
                    focusWord={blog.focusWord}
                    desc={blog.metaDesc}
                  />
                );
              })();
            })}
        </CardWrapper>

        {/* <CardWrapper>
          <BasicCard>
            <BlogCard>
              <CardImage src={"https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png"} alt="..." />
              <CardBody>
                <CardTitle>
                  The Cut or Clarity Factor: Which Matters Most for Lab Grown
                  Diamonds?
                </CardTitle>

                <CardDate>April 07, 2023</CardDate>

                <CardDescription>
                  Among the 4 C's in a lab grown diamond - cut, color, clarity,
                  and carat, the cut of the stone plays a significant role in
                  determining its beauty and look.
                </CardDescription>
                <div>
                  <CardButton>Read more</CardButton>
                </div>
              </CardBody>
            </BlogCard>
          </BasicCard>
          <BasicCard>
            <BlogCard>
              <CardImage src={"https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png"} alt="..." />
              <CardBody>
                <CardTitle>
                  Revolution of the Lab grown diamond in modern times!
                </CardTitle>

                <CardDate>March 30, 2023</CardDate>

                <CardDescription>
                  Shining like a diamond in this era is one of the biggest
                  revolutions. Lab grown diamond is a type of diamond produced
                  by the manufacturing method. A genuine diamond with the help
                  of a geological process gets extracted through mining.
                </CardDescription>
                <div>
                  <CardButton>Read more</CardButton>
                </div>
              </CardBody>
            </BlogCard>
          </BasicCard>
          <QuateCard>
            <QuateWrapper>
              <QuateOne>
                <svg
                  width="47"
                  height="33"
                  viewBox="0 0 47 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.896 32.28C5.16533 32.28 3.16 31.5973 1.88 30.232C0.685334 28.7813 0.0880003 26.9467 0.0880003 24.728V22.936C0.0880003 19.4373 1.112 15.5973 3.16 11.416C5.208 7.14933 8.06667 3.43733 11.736 0.279999H20.312C17.752 3.01067 15.6613 5.61333 14.04 8.088C12.504 10.4773 11.3947 13.1653 10.712 16.152C12.4187 16.5787 13.656 17.3893 14.424 18.584C15.2773 19.7787 15.704 21.2293 15.704 22.936V24.728C15.704 26.9467 15.064 28.7813 13.784 30.232C12.5893 31.5973 10.6267 32.28 7.896 32.28ZM33.752 32.28C31.0213 32.28 29.016 31.5973 27.736 30.232C26.5413 28.7813 25.944 26.9467 25.944 24.728V22.936C25.944 19.4373 26.968 15.5973 29.016 11.416C31.064 7.14933 33.9227 3.43733 37.592 0.279999H46.168C43.608 3.01067 41.5173 5.61333 39.896 8.088C38.36 10.4773 37.2507 13.1653 36.568 16.152C38.2747 16.5787 39.512 17.3893 40.28 18.584C41.1333 19.7787 41.56 21.2293 41.56 22.936V24.728C41.56 26.9467 40.92 28.7813 39.64 30.232C38.4453 31.5973 36.4827 32.28 33.752 32.28Z"
                    fill="white"
                  />
                </svg>
              </QuateOne>
              <QuateText>
                THE CUT OR CLARITY FACTOR: WHICH MATTERS MOST FOR LAB GROWN
                DIAMONDS?
              </QuateText>
              <QuateTwo>
                <svg
                  width="47"
                  height="33"
                  viewBox="0 0 47 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.104 0.720001C41.8347 0.720001 43.84 1.40267 45.12 2.76801C46.3147 4.21867 46.912 6.05333 46.912 8.272V10.064C46.912 13.5627 45.888 17.4027 43.84 21.584C41.792 25.8507 38.9333 29.5627 35.264 32.72H26.688C29.248 29.9893 31.3387 27.3867 32.96 24.912C34.496 22.5227 35.6053 19.8347 36.288 16.848C34.5813 16.4213 33.344 15.6107 32.576 14.416C31.7227 13.2213 31.296 11.7707 31.296 10.064V8.272C31.296 6.05333 31.936 4.21867 33.216 2.76801C34.4107 1.40267 36.3733 0.720001 39.104 0.720001ZM13.248 0.720001C15.9787 0.720001 17.984 1.40267 19.264 2.76801C20.4587 4.21867 21.056 6.05333 21.056 8.272V10.064C21.056 13.5627 20.032 17.4027 17.984 21.584C15.936 25.8507 13.0773 29.5627 9.408 32.72H0.831997C3.392 29.9893 5.48266 27.3867 7.104 24.912C8.64 22.5227 9.74933 19.8347 10.432 16.848C8.72533 16.4213 7.488 15.6107 6.72 14.416C5.86666 13.2213 5.44 11.7707 5.44 10.064V8.272C5.44 6.05333 6.08 4.21867 7.36 2.76801C8.55466 1.40267 10.5173 0.720001 13.248 0.720001Z"
                    fill="white"
                  />
                </svg>
              </QuateTwo>
            </QuateWrapper>
            <div className="date-text">April 07, 2023</div>
          </QuateCard>
          <MainCard>
            <BlogCard>
              <MainCardImage src={Rectangle85} alt="..." />
              <MainCardBody>
                <MainCardTitle>
                  Go Environment Friendly With Surat’s Bhanderi Lab Grown
                  Sustainable Diamonds Which Have Set A Benchmark In The CVD
                  Diamond Industry
                </MainCardTitle>
                <MainCardDate>March 30, 2023</MainCardDate>

                <MainCardDescription>
                  Among the 4 C's in a lab grown diamond - cut, color, clarity,
                  and carat, the cut of the stone plays a significant role in
                  determining its beaut
                </MainCardDescription>
                <div>
                  <CardButton>Read more</CardButton>
                </div>
              </MainCardBody>
            </BlogCard>
          </MainCard>
          <BasicCard>
            <BlogCard>
              <CardImage src={"https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png"} alt="..." />
              <CardBody>
                <CardTitle>
                  Man Made Diamonds: The Growing Competition In Industry
                </CardTitle>

                <CardDate>March 27, 2023</CardDate>

                <CardDescription>
                  Man made diamonds have been ruling the domain of diamond
                  industry for quite some time now. With vital factors favoring
                  them, their future is promising.
                </CardDescription>
                <div>
                  <CardButton>Read more</CardButton>
                </div>
              </CardBody>
            </BlogCard>
          </BasicCard>
          <BasicCard>
            <BlogCard>
              <CardImage src={"https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png"} alt="..." />
              <CardBody>
                <CardTitle>How Does a CVD Diamond Work?</CardTitle>

                <CardDate>Feb 17, 2023</CardDate>

                <CardDescription>
                  Check out our comprehensive guide on the working growth
                  process of CVD diamond that will help you have core knowledge
                  of sustainable alternatives.
                </CardDescription>
                <div>
                  <CardButton>Read more</CardButton>
                </div>
              </CardBody>
            </BlogCard>
          </BasicCard>
          <BasicCard>
            <BlogCard>
              <CardImage src={"https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png"} alt="..." />
              <CardBody>
                <CardTitle>
                  CVD Diamonds vs. Natural Diamonds – A comparison of properties
                  and uses
                </CardTitle>

                <CardDate>Feb 09, 2023</CardDate>

                <CardDescription>
                  Although CVD diamonds and natural diamonds appear exactly the
                  same, let us explore some of the basic differences in their
                  characteristics and uses.
                </CardDescription>
                <div>
                  <CardButton>Read more</CardButton>
                </div>
              </CardBody>
            </BlogCard>
          </BasicCard>
          <BasicCard>
            <BlogCard>
              <CardImage src={"https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png"} alt="..." />
              <CardBody>
                <CardTitle>
                  Choosing lab grown diamonds are better for the planet
                </CardTitle>

                <CardDate>November 30, 2022</CardDate>

                <CardDescription>
                  Choosing lab grown diamonds will make you a step closer to
                  sustainable lifestyle, conflict-free choices, contributing
                  towards the betterment of the planet.
                </CardDescription>
                <div>
                  <CardButton>Read more</CardButton>
                </div>
              </CardBody>
            </BlogCard>
          </BasicCard>
        </CardWrapper> */}
      </Container>
    </div>
  );
};

export default BlogNews;

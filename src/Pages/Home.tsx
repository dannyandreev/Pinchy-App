import React from 'react';
import { isPropertySignature } from 'typescript';
import '../App.css';

interface infoBlockContent {
  title: string;
  text: string;
  imgURL: string;
}

function InfoBlock(props: infoBlockContent){
  return(
    <div className="mt-28 flex flex-col md:flex-row justify-around items-center">
      <div className="w-64">
        <div className="font-bold text-4xl">{props.title}</div>
        <div className="body1 mt-2 ">
          {props.text}
        </div>
      </div>
      <div className="class=mt-10 md:mt-0">
        <div>
          <img alt="" src={props.imgURL}></img>
        </div>
      </div>
    </div>
  )
}

function HomePage(){
  return(
    <div className="flex-1 mt-20 container mx-auto max-w-screen-xl px-4">
      <div className="mt-28 mx-auto max-w-screen-md">
        <div className="text-center">
          <div className="font-bold text-8xl">
            Pinchy
          </div>
          <div className="mt-4 font-bold text-4xl">
            The New Way To Shop
          </div>
        </div>
        <InfoBlock
          title="Organize"
          text="all of your shopping from thousands of merchants in one place! use the pinchy mobile app or chrome extension to instantly save items to collections"
          imgURL="./media/block1image.webp"
        />
        <InfoBlock
          title="Collaborate"
          text="with your friends & family on collections to plan events, share wishlists, or simply shop online together"
          imgURL="./media/block2image.webp"
        />
        <InfoBlock
          title="Organize"
          text="your favorite products to your friends and the chums community"
          imgURL="./media/block3image.webp"
         />
      </div>
    </div>
  )
}

export default HomePage;

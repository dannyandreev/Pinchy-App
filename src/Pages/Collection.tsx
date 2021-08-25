import React from 'react';
import { isPropertySignature } from 'typescript';
import '../App.css';

interface collectionItem {

  text: string;
  URL: string;
}

function CollectionItem(props: collectionItem){
  return(
    <div className="relative">
        <div className="transform transition false"></div>
        <a draggable="false" href={props.URL} target="_blank" rel="noreferrer" className="block relative mx-auto w-56 h-64 md:w-44 md:h-56 rounded-xl rounded-tl-none overflow-hidden">
          <div style={{display: 'block', 'overflow':'hidden', position: 'absolute', top: '0', left: '0', bottom: '0', right:'0', boxSizing: 'border-box', margin: '0'}}>
            <img draggable="false" src={props.URL} alt="" decoding="async" style={{position: 'absolute', top: '0', left:'0', bottom:'0', right: '0', boxSizing: 'border-box', padding: '0', border:'none', margin: 'auto', display: 'block', width: '0', height: '0', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'}}></img>

          </div>
          <div className="absolute top-1/2 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
          <div className="absolute bottom-0 m-2 line-clamp-2 body2 text-white" title={props.text}>{props.text}</div>
        </a>
    </div>
  )
}

function Collection(){
  return(
    <div className="flex-1 mt-20 container mx-auto max-w-screen-xl px-4">
      <div className="mx-auto mt-20">
        <div className="text-center">
          <div className="font-bold text-4xl">
            Fall 2021 Haul
          </div>
          <div className="mt-2 font-semibold">
            16 Products
          </div>
          <div className="mt-4 text-xl">
            Pretty things
          </div>
        </div>
        <div className="mt-20 mx-auto grid gap-5 sm:grid-cols-2 sm:max-w-lg md:grid-cols-3 md:max-w-xl lg:grid-cols-4 lg:max-w-3xl">
          <CollectionItem

            text="Billabong Dream Big Wide Brim Hat at PacSun.com"
            URL="./media/hat.webp"
          />
          <CollectionItem

            text="Black Floral High Neck Shirred Mini Dress | Missguided"
            URL="./media/dress.webp"
          />
          <CollectionItem

            text="Luka Duffel | CALPAK"
            URL="./media/bag.webp"
          />
          <CollectionItem

            text="Malory Booties | Altar'd State"
            URL="./media/shoes.webp"
          />
        </div>
      </div>
    </div>
  )
}

export default Collection;

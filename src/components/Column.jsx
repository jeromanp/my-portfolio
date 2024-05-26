import React from 'react'

export default function Column({ title, description, svg }) {
  return (
    <div className="flex-1 flex flex-row items-start justify-start gap-[12px] min-w-[200px] max-w-[300px] text-center text-xl text-black font-h3">
      <img
        className="h-12 w-12 relative overflow-hidden shrink-0"
        alt=""
        src={svg}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch relative mq450:text-base">
          {title}
        </div>
        <div className="self-stretch relative text-lg font-paragraph">
          {description}
        </div>
      </div>
    </div>
  )
}

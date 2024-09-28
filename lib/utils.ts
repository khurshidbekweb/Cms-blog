import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTimeReading(content: string){
  const WPS = 250/ 60
  let images = 0
  const regex = /\w/

  const words = content.split(' ').filter(word => {
    if(word.includes('<img>')){
      images += 1
    }
    return regex.test(word)
  }).length

  const imageAdjust= images*4
  let imageSace= 0
  let imageFactor= 12


  while(images){
    imageSace += imageFactor 
    if(imageFactor>3){
      imageFactor -= 1
    }
    images -= 1
  }

  const minutes = Math.ceil(((words - imageAdjust)/WPS+imageSace)/60)

  if(minutes <9){
    return '0'+minutes
  }else{
    return minutes
  }
}
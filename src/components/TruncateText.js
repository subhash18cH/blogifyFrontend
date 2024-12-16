export const truncateText=(text)=>{
  if(text.length<100) return text
  return text.substring(0, 100) + ".....";
}
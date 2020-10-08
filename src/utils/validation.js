// export function isRangeLength(data,min,max){
//     let length=data.lenngth;
//     if(length<min||length>max){
//         return false;
//     }
//     return  true;
// }
/**
 * 判断是参数否为空
 * @param {内容} data
 */
export const isEmpty=(data)=>{
    return (data==null||data=="")?true:false;
}
/**
 * 判断参数不为空
 * @param data
 * @returns {boolean}
 */
export const isNotEmpty=(data)=>{
  return !isEmpty(data);
}
/**
 * 是否在指定范围
 * @param {输入内容} data
 * @param {最小值} min
 * @param {最大值} max
 */
export const isRangeLength=(data,min,max)=>{
    let length=data.length;
    if(length<=min||length>=max){
        return false;
    }
    return  true;
}

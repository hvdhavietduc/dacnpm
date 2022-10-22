/* File này chưa mảng và function mảng*/

/* mảng */

const arr_commercial=[
    {
        URL_img:'https://bucket.nhanh.vn/store3/92233/bn/Banner_web_sneaker.jpg'
    },
    {
        URL_img:'https://bucket.nhanh.vn/store3/92233/bn/SNEAKER_BANNER_WEB.jpg'
    },
    {
        URL_img:'https://shondoshoes.com/search?q=sneaker'
    }
]

/* function */

function runCommercial(name)
{
    let index=-1,len_arr=arr_commercial.length;
    return <img className={name} src={arr_commercial[index].URL_img}></img>
    setInterval(() => {
        index++;
        if(index===len_arr) index=0;
        
        return <img className={name} src={arr_commercial[index].URL_img}></img>
        
    }, 3000);
}



export {arr_commercial};
import MainPage from './Component/MainPage'
import './App.css'

const data = [
  {id:1,
    imageUrl:'https://indiaglitz-media.s3.amazonaws.com/telugu/home/kalki-2898-ad-review-1.jpg',
    ytUrl:'https://youtu.be/W1Zt5pBGOac?si=AWkV86Fw0ZDZ8M_i',
    name:'Kalki'
  },
  {id:2,
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpQHb2hXxIYY4IgWeWD4JtoCkhjWlwcuzCg&s',
    ytUrl:'https://youtu.be/4GPvYMKtrtI?si=wFoEplQ4dKqUCiZZ',
    name:'Salaar'
  },
  {id:3,
    imageUrl:'https://pbs.twimg.com/media/FyLmYURXgAAS_bO.jpg:large',
    ytUrl:'https://youtu.be/e3ew7YUeeQc?si=3kMAXjbI2TykVtdn',
    name:'Adipurush'
  },
  {id:4,
    imageUrl:'https://www.animationxpress.com/wp-content/uploads/2020/10/Beats-Of-Radhe-Shyam-1200-1024x569.jpg',
    ytUrl:'https://youtu.be/ZAP6q_Zv-4g?si=hegFWEKKWzjP-_-i',
    name:'radhe shyam'
  },
  {id:5,
    imageUrl:'https://images.indianexpress.com/2019/08/saaho-759-2.jpeg',
    ytUrl:'https://youtu.be/lD0-ztCFydA?si=iEGPQJm49kHEJ8__',
    name:'saaho'
  },
  {id:6,
    imageUrl:'https://wallpapercave.com/wp/wp4027437.jpg',
    ytUrl:'https://youtu.be/G62HrubdD6o?si=DBSxk230ROtuiRns',
    name:'bahubali 2'
  },
  {id:7,
    imageUrl:'https://lh5.googleusercontent.com/proxy/SSOT2LkUtslVvuELYt1NIBpoHp6neW752zXQYsvqL4P3E7_fSVjoeyhHeg31XnzaYspO5vHPffQY1AHpnYuHErBR_u8H97odPtKfs3L_jZeSkpUWBzlpkZ4box2EskGXV5SHtGhouMg',
    ytUrl:'https://youtu.be/sOEg_YZQsTI?si=W5L8ZxxsIJaIh2mC',
    name:'bahubali'
  },
  {id:8,
    imageUrl:'https://i.ytimg.com/vi/Wq3j0TunOmw/maxresdefault.jpg',
    ytUrl:'https://youtu.be/I5cJMydo5Hc?si=XvCIEPOP05MBBrho',
    name:'mirchi'
  },

]

const App = ()=>(
  <>
  <MainPage data={data}/>
  </>
)


export default App

import './latest.css'

const Latest = () => {
  return (
    <>
        <div id='items'>
            <div className="text-link">
                <h3>
                    LATEST POSTS
                </h3>
                <a href="#"> READ BLOGS</a>
            </div>
            <div className="items">
                <div className="item-latest">
                    <div className="img-latest">
                        <img src="https://media.currys.biz/i/currysprod/tech-talk-PS5-slim-hero" alt="" />
                        <p>FEB 22,2023 . GADGETS</p>
                        <h5>GET SOME COOL GADGETS IN 2023</h5>
                    </div>
                </div>
                <div className="item-latest">
                    <div className="img-latest">
                        <img src="https://www.rollingstone.com/wp-content/uploads/2022/09/Apple-AirPods-Pro-2nd-gen-hero-220907.jpg" alt="" />
                        <p>FEB 22,2023 . TECHNOLOGY</p>
                        <h5>TECHNOLOGY HACK YOU WON`T GET</h5>

                    </div>
                </div>
                <div className="item-latest">
                    <div className="img-latest">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nm8F02oqPEsgRcSo9--V__sS0aHw1dyCOg&usqp=CAU" alt="" />
                        <p>FEB 22,2023 . WATCH</p>
                        <h5>IWATCH ...</h5>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Latest
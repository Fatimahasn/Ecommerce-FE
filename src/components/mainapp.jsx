import './mainapp.css';
function MainApp() {
    return (
        <div className='mainapp'>
            <div className="slideshow" >
            <div id="myCarousel" className="carousel slide"  data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="images/ad1.jpg" style={{height: "600px"}} alt="Chania" />
                        </div>
                        <div className="item">
                            <img src="images/ad2.jpg" style={{height: "600px"}} alt="Chania"/>
                        </div>
                    </div>
                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
};
export default MainApp;
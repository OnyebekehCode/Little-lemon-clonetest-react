function Intro (Props) {
	return (
		    <>

                <div className="Intro">
                    <h1>{Props.h1}</h1>
                    <h2>{Props.h2}</h2>
                    <h3>{Props.h3}</h3>
                </div>

		        <section>
                    <article>
                        <h2>product1</h2>
                        <img src="food3.jpg" alt="food3"></img>
                    </article>
                    <article>
                        <h2>product2</h2>
                        <img src="pic1.jpg" alt="pic1"></img>
                    </article>
                    <article>
                        <h2>product3</h2>
                        <img src="pic2.jpeg" alt="pic2"></img>
                    </article>
                    <article>
                        <h2>product4</h2>
                        <img src="pic3.jpg" alt="pic3"></img>
                    </article> 
                    <article>
                        <h2>product5</h2>
                        <img src="pic4.jpeg" alt="pic4"></img>
                    </article>   
                    </section>
            </>

           )
   }
 export default Intro
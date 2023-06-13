import React from "react";

function HomePage() {
  return (
    <>
      <div id="mainPage">
        <nav className="nav1">
          <h1 className="nav1h1">Our Story</h1>
          <p>
            We believe in good.We launched Fresh Pan Pizza best excuse awards on
            our facebook fan pag. fan were given situation where they had to
            come up with wackly and fun excuses. The perso with the best excuse
            won the Best Excuse Badge and won Pizzeria's vouchers. Their
            enthusiastic respinse proved that Pizzeria's Fresh Pan Pizza is the
            Tastiest Pan Pizza.Ever!
          </p>
          <p>
            Ever since we launched the stage in the middle of a performance and
            even finding excuses to be disqualified in a football match.
          </p>

          <p>
            We launched Fresh Pizza Best Excuse on our facebook fan page. Fans
            were given where they had to come up with wacky and fun excuses. The
            person with the best excuses won Best Excuses Badge and won Domino's
            vouhes. Their enthusiastic response proved that Pizzeria's Fresh Pan
            Pizza is the Tastiest Pan Pizza. Ever!{" "}
          </p>
        </nav>

        <nav className="nav2">

            <img
              src="ingredients.png"
              alt="Error"
              width={"25%"}
              className="img2"
              />
            <p className="nav2p">
              We're ruthless about goodness. We have no qualms about tearing up
              a dat-old lettuce leaf (straight from the farm), or streaming a
              baby (carrot). Cut. Cut. Chop. Chop. Stream. Stream. Stir.
              Stir.While they're still young and fresh - that's our motto.It
              makes the kitchen a better place
            </p>
            <h2 className="nav2h2">Ingrediens</h2>

         
        </nav>

        <nav className="nav3">
          <div className="div4">
            <img src="chief.png" alt="Error" className="img2 chiefImg"/>
          </div>
          <div>
            <div className="div5">
              <h2 className="div5h2">Our Chefs</h2>
              <p className="nav3p">
                They make sauces sing and salads dance. They create magic with
                skill, knowledge, passion, and stirring spoons (among other
                things). They make godness so good, it doesn't know what to do
                with itself. We do though. We send it to you.{" "}
              </p>
            </div>
          </div>
        </nav>

        <nav className="nav4">
            <h2 className="nav4h2">45 Min Delivery</h2>
          <div className="div6">
            <img src="watch.jpg" alt="Error" className="img2 nav4img" />
          </div>
         
          
        </nav>
      </div>
    </>
  );
}

export default HomePage;

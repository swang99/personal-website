import Footer from '~/components/Footer';
import MainNav from '~/components/MainNav';
import Image from '~/components/Image';

export default function photography() {
    const fallPath = "styles/img/Photo/Fall";
    const summerPath = "styles/img/Photo/Summer";

    return (
        <body className="personal-slide">
            <MainNav />
            <header className="photo-bg"></header> 
            <section className="section-fall">
                <div className="row" id="aniimated-thumbnials">
                    <h2><b>Fall 🍂 </b></h2>
                    <ul className="photos-showcase clearfix">
                        <Image path={`${fallPath}/Baker1.jpg`} alt="Baker 1"/>
                        <Image path={`${fallPath}/Baker2.jpg`} alt="Baker 2"/> 
                        <Image path={`${fallPath}/Occom2.jpg`} alt="Occom 2"/> 
                        <Image path={`${fallPath}/Green2.jpg`} alt="Green 2"/> 
                        <Image path={`${fallPath}/Connecticut1.jpg`} alt="CTRiver 1"/> 
                        <Image path={`${fallPath}/Connecticut2.jpg`} alt="CTRiver 2"/> 
                        <Image path={`${fallPath}/Connecticut3.jpg`} alt="CTRiver 3"/> 
                        <Image path={`${fallPath}/Connecticut4.jpg`} alt="CTRiver 4"/> 
                        <Image path={`${fallPath}/Arch1.jpg`} alt="Arch 1"/> 
                        <Image path={`${fallPath}/RedTree.jpg`} alt="Red Tree"/>
                        <Image path={`${fallPath}/Rollins1.jpg`} alt="Rollins Chapel"/> 
                        <Image path={`${fallPath}/Golf3.jpg`} alt="Golf 3"/>
                    </ul>
                </div>
            </section>
            <section className="section-features js--section-features" id="features">
                <div className="row">
                    <h2><b>Summer ⛱</b></h2>
                    <ul className="photos-showcase clearfix">
                        <Image path={`${summerPath}/Rainchain1.jpg`} alt="Rain Chain 1"/>
                        <Image path={`${summerPath}/Photo-deck-min.jpg`} alt="Deck"/>
                        <Image path={`${summerPath}/PurpleFlower.jpg`} alt="Purple Flower"/>
                        <Image path={`${summerPath}/Rainchain3.jpg`} alt="Rain Chain 3"/>
                        <Image path={`${summerPath}/Sunset2.jpg`} alt="Sunset 2"/>
                        <Image path={`${summerPath}/PinkLily.jpg`} alt="Pink Lily"/>
                        <Image path={`${summerPath}/RedFlower.jpg`} alt="Red flower"/>
                        <Image path={`${summerPath}/Landing3.jpg`} alt="Wilson's Landing 3"/>
                        <Image path={`${summerPath}/LandingB&W.jpg`} alt="Wilson's Landing B&W"/>
                        <Image path={`${summerPath}/YellowLily.jpg`} alt="Yellow Lily"/>   
                    </ul>
                </div>
            </section>
            <Footer />
        </body>
    )
}
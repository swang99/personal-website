import Footer from '~/components/Footer';
import MainNav from '~/components/MainNav';
import Image from '~/components/Image';
import { photoData } from '~/data/websiteData';

export default function photography() {
    return (
        <body className="personal-slide">
            <MainNav />
            <header className="photo-bg"></header> 
            <section className="section-fall">
                <div className="row" id="aniimated-thumbnials">
                    <h2><b>{photoData.fallHeader}</b></h2>
					<ul className="photos-showcase clearfix">
					{
					  photoData.fallPhotos.map((item, index) =>
                        <Image key={`fall-${index}`} 
					           path={`${photoData.fallPath}/${item[0]}`} 
							   alt={item[1]}/>
					  )
					}
					</ul>
                </div>
            </section>
            <section className="section-features js--section-features" id="features">
                <div className="row">
                    <h2><b>{photoData.summerHeader}</b></h2>
                    <ul className="photos-showcase clearfix">
					{
					  photoData.summerPhotos.map((item, index) =>
                        <Image key={`summer-${index}`} 
					           path={`${photoData.summerPath}/${item[0]}`} 
							   alt={item[1]}/>
					  )
					}
					</ul>
                </div>
            </section>
            <Footer />
        </body>
    )
}
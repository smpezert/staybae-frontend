import luxuryHouse from "src/assets/images/luxury-house.mp4";
import property from "src/assets/images/property.jpg";
import teamMember from "src/assets/images/team-member.jpeg";

const AboutUs = () => {
    return (
        <div className="flex flex-col mx-0">
            <div className="m-10 flex flex-col">
                <h1 className="font-bold md:text-4xl py-3 text-center">ABOUT US</h1>
                <p className="pt-3 text-center"><i>"Our mission is to support you in any step of your travel"</i></p>
            </div>
            <div className="my-3">
                <img className="h-80 w-full object-cover" src={property} alt="A property to rent" height={50} width={50} />
            </div>
            <div className="m-10">
                <h2 className="font-bold md:text-2xl text-center py-5">Made with love to new adventures</h2>
                <p className="py-2 text-justify">We are a small team of passionate people who are working tirelessly to offer you the best quality of your journey. StayBae was founded in 2023 in Manchester as a startup company to offer you the best standard of renting houses in the world. Our mission is to <b>make your life easier when you are traveling around the globe</b> and looking for a property to rent.</p>
                <div className="my-8 ml-10 text-center">
                    <p><i>"You will never feel alone!"</i></p>
                </div>
                <p className="py-2 text-justify">Our website is available in English and offers a 24/7 customer support no matter where you want to go or what you want to do. In our website there is <b>a variety of properties for all budgets while keeping the quality as first priority</b>. The website offers apartments and houses for families, young couples and individuals who either want to occupy the property or to share with their owners.</p>
                <p className="py-3 text-justify">Our team of experienced professionals is committed to ensuring that your vacation rental experience is seamless and enjoyable from start to finish. We carefully select and vet each property to ensure that it meets our high standards of quality and comfort. From the moment you book your rental, our friendly and knowledgeable staff is available to assist you with any questions or concerns you may have.</p>
                <div className="flex flex-col items-center mt-8 ml-10 text-center">
                    <p className="text-center"><i>"A dedicated team for your needs!"</i></p>
                    <img className="flex items-center h-40 mt-4 rounded-full" src={teamMember} alt="dedicated team member" height={50} width={150} />
                </div>

                <div className="mt-30 my-10">
                    <p className="py-2 text-justify">We are dedicated to providing you with the best selection of properties for your next getaway. With our extensive database of vacation rentals, you can choose from a wide range of accommodations to suit your preferences and budget. Whether you're looking for a cozy cottage by the beach or a luxurious villa in the mountains, we have the perfect property for you. Our team works tirelessly to ensure that every listing is accurate and up-to-date, so you can book with confidence. We also offer <b>a secure booking process and excellent customer support</b> to make your vacation planning experience as smooth as possible.</p>
                </div>
                <div className="my-8 ml-10 text-center">
                    <p><i>"Follow us for your travel inspiration and your next unforgettable journey!"</i></p>
                </div>
                <div className="mt-30 my-10">
                    <p className="pt-2 text-justify">At our vacation property rental service, we understand that your vacation is a time to relax and unwind. That's why we go above and beyond to provide you with exceptional service and amenities. From convenient online booking to personalized recommendations for local attractions and activities, we are here to <b>make your vacation as memorable as possible</b>. Trust us to help you find the perfect rental property for your next vacation and experience the difference of our dedicated service.</p>
                </div>
                <div className="my-8 ml-10 text-center">
                    <video className="relative h-80 w-full object-cover" src={luxuryHouse} controls autoPlay />
                    <h2 className="mt-10"><i>"Our team wishes you an inspirational journey on our website!"</i></h2>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
import banner from "../assets/images/avatar.png"
import Banner from "../shared/Banner";

const Home = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24 ">
            <Banner banner={banner} heading="This  is the place" subheading="kjhsdnbskjhdsoiueoiurerelkdlkjdshjkckndkhjcdkjfdlkjfbckjlakwapoiwpqoieojfdnmfd" btn1="Get Started" btn2="Discount"/>
        </div>
    )
};
export default Home;
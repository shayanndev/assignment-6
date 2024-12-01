import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import Explore from '../components/Explore';
import Achievement from '../components/Achievement';
import Courses from '../components/Courses';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Navbar></Navbar>
        <Hero></Hero>
        <Trust></Trust>
        <Explore></Explore>
        <Achievement></Achievement>
        <Courses></Courses>
        <Team></Team>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </main>
    </>
  );
}

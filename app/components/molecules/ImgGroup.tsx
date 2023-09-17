import ImgCarrousel from "../atoms/ImgCarrousel";
import HeroList from "../atoms/HeroList";

export default function ImgGroup() {
return(
<section className="flex flex-col items-center">
<ImgCarrousel />
<HeroList />
</section>

);   
}
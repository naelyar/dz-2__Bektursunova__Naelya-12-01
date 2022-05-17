import {Header} from "../../components/header/Header";
import {News} from "../../components/news/News";

function BlogPage() {

    const news = ["Each ready-to-use layout rocks the latest trends and regulations to ensure mobile-readiness and cross-browser compatibility.", "Magazine Pro", "You will discover a whopping collection of fifty demos (and counting!). By the way, expect new ones to drop with future theme updates."];

    return (
        <div>
        <Header/>
        <News news={news}/>
        
        </div>
    )
}

export default BlogPage;

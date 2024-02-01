import AddCard from "../AddCard"
import Card from "../Card"
import TopHead from "../TopHead"

import './index.css'

const Home = () => {

    const designData = [
        {
            type: "Design",
            imgLink: "",
            colors: ["#E1BA17"],
            cardHeading: "Old fashioned recipe for preventing allergies and chemical sensitivities",
            cardDescription: "",
            followingProfileImageUrls: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUZx_LL5Cu4SwnCQhMgHqQr16KSxmuylU0CehcQDluZ5l5pjmlFFUeuaXElS87dwzFh4&usqp=CAU"],
            comments: 34,
            likes: 14,
            followers: 34
        },
        {
            type: "Design",
            imgLink: "",
            colors: ["#173FE1","#E1175D","#8817E1","#17E176"],
            cardHeading: "Home business advertising ideas",
            cardDescription: "Successful businesses know the importance of building and maintaining good working.",
            followingProfileImageUrls: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUttRzIyicZGpfcHVryzRiTx_rRdYTJH-SA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUZx_LL5Cu4SwnCQhMgHqQr16KSxmuylU0CehcQDluZ5l5pjmlFFUeuaXElS87dwzFh4&usqp=CAU"],
            comments: 34,
            likes: 14,
            followers: 34
        },
        {
            type: "Design",
            imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStiU7euChzvRjesy5goEc2tlpfrvlyHmikEg&usqp=CAU",
            colors: ["#1776E1"],
            cardHeading: "Cosmetic surgery abroad making the right choice",
            cardDescription: "",
            followingProfileImageUrls: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUZx_LL5Cu4SwnCQhMgHqQr16KSxmuylU0CehcQDluZ5l5pjmlFFUeuaXElS87dwzFh4&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUttRzIyicZGpfcHVryzRiTx_rRdYTJH-SA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYlze3zqrBi9OZLPUfdLsVyYqFZNKoip0Kw&usqp=CAU"],
            comments: 34,
            likes: 14,
            followers: 34
        }
    ]

    const prototipData = [
        {
            type: "Prototip",
            imgLink: "",
            colors: ["#1738E1","#E11768","#6B13CE"],
            cardHeading: "Home business advertising ideas",
            cardDescription: "Successful businesses know the importance of building and maintaining good working",
            followingProfileImageUrls: [],
            comments: 76,
            likes: 45,
            followers: 12
        },
        {
            type: "Prototip",
            imgLink: "https://www.shutterstock.com/image-photo/two-happy-women-drink-hot-600nw-1894192273.jpg",
            colors: ["#0C85D0","#D08F0C"],
            cardHeading: "Unmatched toner cartridge quality 20 less than oem price",
            cardDescription: "Why read motivational saying? For motivation! You might need a bit, if you can use last year's list of goals this year because it's as good as new.",
            followingProfileImageUrls: ["https://d1b5fx1reua6f1.cloudfront.net/wp-content/uploads/2022/08/Profile-67.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYlze3zqrBi9OZLPUfdLsVyYqFZNKoip0Kw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJlUhlV--rPwiMBkxbqSraEYCdVmVyDrWfQ&usqp=CAU"],
            comments: 76,
            likes: 32,
            followers: 66
        },
        {
            type: "Prototip",
            imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pR-0TCgNIZqVbI60AEO_HO5wfU3tpIlwxw&usqp=CAU",
            colors: ["#0CD034"],
            cardHeading: "How to look up",
            cardDescription: "Are you considering buying a compatible inkjet cartridge for your printer?",
            followingProfileImageUrls: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUttRzIyicZGpfcHVryzRiTx_rRdYTJH-SA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJlUhlV--rPwiMBkxbqSraEYCdVmVyDrWfQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYlze3zqrBi9OZLPUfdLsVyYqFZNKoip0Kw&usqp=CAU"],
            comments: 54,
            likes: 76,
            followers: 11
        }
    ]

    const trelloData = [
        {
            type: "Trello",
            imgLink: "https://img.freepik.com/premium-photo/watercolor-painting-blue-eye-with-rainbow-colored-eye_786688-2597.jpg",
            colors: ["#5218DD","#DD1842","#1895DD"],
            cardHeading: "Types of paper in catalog printing",
            cardDescription: "Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).",
            followingProfileImageUrls: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJlUhlV--rPwiMBkxbqSraEYCdVmVyDrWfQ&usqp=CAU","https://d1b5fx1reua6f1.cloudfront.net/wp-content/uploads/2022/08/Profile-67.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUZx_LL5Cu4SwnCQhMgHqQr16KSxmuylU0CehcQDluZ5l5pjmlFFUeuaXElS87dwzFh4&usqp=CAU"],
            comments: 34,
            likes: 23,
            followers: 98
        },
        {
            type: "Trello",
            imgLink: "",
            colors: ["#1833DD","#18DD9E"],
            cardHeading: "There is no competetion",
            cardDescription: "This article is floated online with an aim to help you find the best dvd printing solution.",
            followingProfileImageUrls: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUttRzIyicZGpfcHVryzRiTx_rRdYTJH-SA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUZx_LL5Cu4SwnCQhMgHqQr16KSxmuylU0CehcQDluZ5l5pjmlFFUeuaXElS87dwzFh4&usqp=CAU"],
            comments: 23,
            likes: 12,
            followers: 44
        }
    ]
    const testData = [
        {
            type: "Test",
            imgLink: "",
            colors: ["#1887DD","#DD182C"],
            cardHeading: "Linux or windows which is it",
            cardDescription: "Saving money - is something we would all like.",
            followingProfileImageUrls: ["https://d1b5fx1reua6f1.cloudfront.net/wp-content/uploads/2022/08/Profile-67.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYlze3zqrBi9OZLPUfdLsVyYqFZNKoip0Kw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJlUhlV--rPwiMBkxbqSraEYCdVmVyDrWfQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUttRzIyicZGpfcHVryzRiTx_rRdYTJH-SA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUZx_LL5Cu4SwnCQhMgHqQr16KSxmuylU0CehcQDluZ5l5pjmlFFUeuaXElS87dwzFh4&usqp=CAU"],
            comments: 32,
            likes: 87,
            followers: 31
        },
        {
            type: "Test",
            imgLink: "https://nebula.wsimg.com/d809bc652445c15f44fb866395fa9619?AccessKeyId=4CC834CEF1812F42D6B0&disposition=0&alloworigin=1",
            colors: ["#8018DD","#DD1832","#188DDD"],
            cardHeading: "Be single minded",
            cardDescription: "Create a list with all possible keywords that fit to your product service or business field.",
            followingProfileImageUrls: ["https://d1b5fx1reua6f1.cloudfront.net/wp-content/uploads/2022/08/Profile-67.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUttRzIyicZGpfcHVryzRiTx_rRdYTJH-SA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUZx_LL5Cu4SwnCQhMgHqQr16KSxmuylU0CehcQDluZ5l5pjmlFFUeuaXElS87dwzFh4&usqp=CAU"],
            comments: 21,
            likes: 34,
            followers: 17
        },
        {
            type: "Test",
            imgLink: "",
            colors: ["#DDA518"],
            cardHeading: "Linux or windows which is it",
            cardDescription: "Saving money - is something we would all like.",
            followingProfileImageUrls: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJlUhlV--rPwiMBkxbqSraEYCdVmVyDrWfQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUttRzIyicZGpfcHVryzRiTx_rRdYTJH-SA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUZx_LL5Cu4SwnCQhMgHqQr16KSxmuylU0CehcQDluZ5l5pjmlFFUeuaXElS87dwzFh4&usqp=CAU"],
            comments: 55,
            likes: 23,
            followers: 19
        },
        {
            type: "Test",
            imgLink: "",
            colors: ["#185ADD","#18DD6E"],
            cardHeading: "Dna the future of nutrition",
            cardDescription: '"Why does anyone want a vasectomy reversal?"This is a question I hear any time I tell someone what I do for a living.',
            followingProfileImageUrls: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUttRzIyicZGpfcHVryzRiTx_rRdYTJH-SA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUZx_LL5Cu4SwnCQhMgHqQr16KSxmuylU0CehcQDluZ5l5pjmlFFUeuaXElS87dwzFh4&usqp=CAU"],
            comments: 12,
            likes: 33,
            followers: 66
        }
    ]

    const finalData = [
        {
            type: "Final",
            imgLink: "",
            colors: ["#EDB309","#ED1D09","#7409ED"],
            cardHeading: "At home treatments for beauty on a budget",
            cardDescription: "The holidays bring with them thoughts of carving and serving delicious turkey dinners to your family and  friends. Tradition has its fans, but perhaps the year you'd like to try a twist to your turkey recipe.",
            followingProfileImageUrls: [],
            comments: 87,
            likes: 54,
            followers: 32
        },
        {
            type: "Final",
            imgLink: "",
            colors: ["#6609ED","#09ED97"],
            cardHeading: "Home business advertising ideas",
            cardDescription: "Successful businesses know the importance of building and maintaining good working.",
            followingProfileImageUrls: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUttRzIyicZGpfcHVryzRiTx_rRdYTJH-SA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUZx_LL5Cu4SwnCQhMgHqQr16KSxmuylU0CehcQDluZ5l5pjmlFFUeuaXElS87dwzFh4&usqp=CAU"],
            comments: 13,
            likes: 11,
            followers: 43
        },
        {
            type: "Final",
            imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAUYlTnibmfGVi7r59eZTiFEypF4fuQez5BsReVpkQhjZmDjEyH9dL3GeFo0tXs_1AZvw&usqp=CAU",
            colors: ["#09C7ED","#EDB609"],
            cardHeading: "Tips for choosing the perfect glass for your lips",
            cardDescription: "With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users",
            followingProfileImageUrls: ["https://d1b5fx1reua6f1.cloudfront.net/wp-content/uploads/2022/08/Profile-67.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYlze3zqrBi9OZLPUfdLsVyYqFZNKoip0Kw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJlUhlV--rPwiMBkxbqSraEYCdVmVyDrWfQ&usqp=CAU"],
            comments: 21,
            likes: 23,
            followers: 12
        }
    ]

    return(
        <>
            <div className="home">
                <div className="design">
                    <TopHead name="Design" />
                    {
                        designData.map((item,index) => {
                            return(
                                <Card data={item} key={index} />
                            )                            
                        })
                    }
                    <AddCard />
                    
                </div>
                <div className="prototip">
                <TopHead name="Prototip" />
                    {
                        prototipData.map((item,index) => {
                            return(
                                <Card data={item} key={index} />
                            )                            
                        })
                    }
                    <AddCard />
                </div>
                <div className="trello">
                    <TopHead name="Trello" />
                    {
                        trelloData.map((item,index) => {
                            return(
                                <Card data={item} key={index} />
                            )                            
                        })
                    }
                    <AddCard />
                </div>
                <div className="test">
                <TopHead name="Test" />
                {
                        testData.map((item,index) => {
                            return(
                                <Card data={item} key={index} />
                            )                            
                        })
                    }
                    <AddCard />
                </div>
                <div className="final">
                <TopHead name="Final" />
                {
                        finalData.map((item,index) => {
                            return(
                                <Card data={item} key={index} />
                            )                            
                        })
                    }
                    <AddCard />
                </div>
            </div>
        </>
    )
}

export default Home
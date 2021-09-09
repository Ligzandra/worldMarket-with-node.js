const express= require("express");
const path= require("path");
const app= express();
const exhbs= require("express-handlebars")

const PORT = 3657;




const VIEWS=path.resolve(__dirname, "views");
const LAYOUTS=path.join(VIEWS, "layouts");
const LAYOUTSDIR=path.join(VIEWS, "pages");
const DEFAULTLAYOUT=path.join(LAYOUTS,"main");


app.engine("hbs", exhbs({

	layoutsDir:LAYOUTSDIR,
	defaultLayout:DEFAULTLAYOUT,
	extname:"hbs"

}));

app.set("view engine", "hbs");
app.set("views", VIEWS)


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));





app.get("/",(req,res) => {
	let data={
		title:"WorldMarket-Index",
	}
// let indexPath = path.resolve(__dirname,"index.html")
	res.render("pages/index", data)

})

app.get("/contact",(req,res) => {
	let data={title:"WorldMarket-Contact"}
	// let contactPath = path.resolve(__dirname,"contact.html")
	res.render("pages/contact", data)
	
})

app.get("/join",(req,res) => {
	let data={title:"Join us page",
				toplogo:`
					<div class="Discover flex sbw">
						<div class="WM_Logo">
								<a href="/"><img src="img/logo.png"/></a>
						</div>
						
					</div>
				`
			}
	// let contactPath = path.resolve(__dirname,"contact.html")
	res.render("pages/join", data)
	
})

app.get("/signin",(req,res) => {
	let data={title:"Sign in page",
				toplogo:`
					<div class="Discover flex sbw">
						<div class="WM_Logo">
								<a href="/"><img src="img/logo.png"/></a>
						</div>
						
					</div>	
				`
		}
	// let signPath = path.resolve(__dirname,"signIn.html")
	res.render("pages/signin", data)
	
})

app.post("/",(req,res) => {
    console.log(req.body);
    // res.send("hello World");
   res.redirect("/");
   
});





app.listen(PORT);
console.log(`WorldMarket Server is running on PORT ${PORT}`)
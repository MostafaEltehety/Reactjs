import "./App.css";
import Card from "./components/CourseCard";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

function App() {
  return (
    <>
      <Header />
      <br></br>
      
<main id="courses" className="courses">
   <div className="course" >
    <Card title="HTML" lessons={25} price={15} />
    </div> 
    <div  className="course" >
      <Card className="course" title="Css" lessons={40} price={25} />
      </div>  
     <div  className="course" >
      <Card className="course" title={"reactjs".toUpperCase()} lessons={70} price={60} />
     </div>
      <div  className="course" >
      <Card className="course" title={"js".toUpperCase()} lessons={50} price={30} />
     </div>

 <div  className="course" >
      <Card className="course" title= "typeScript"  lessons={26} price={20} />
     </div>

 <div  className="course" >
      <Card className="course" title= "SQL"  lessons={105} price={80} />
     </div>

 <div  className="course" >
      <Card className="course" title= "ASP.NET Core"  lessons={75} price={40} />
     </div>

<div  className="course" >
      <Card className="course" title= "MVC Core"  lessons={54} price={35} />
     </div>


      </main>
      <Footer />
    </>
  );
}

//  function App(){

//   const courseName='Reactjs';
//   const instructor='Elzero';
//   const course={
// title:'Reactjs',
// lessons:60,
// duration:10
//   };

//   return  (
//     <>
//     <h1>Welcome to {courseName}</h1>
//     <p className="pargraph">Elzero Web School by {instructor}</p>
//     <p>{50 * 50}</p>
//     <p>{"reactjs".toUpperCase()}</p>
//     <p>Course Name Is : {course.title}</p>
//     <p>Course Lessons Number Is : {course.lessons} </p>
//     <p>Course Total Duration In Minutes Is : {course.lessons * course.duration}</p>
//     </>
//   );
//  }

export default App;

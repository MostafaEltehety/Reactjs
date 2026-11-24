
function CourseCard(courseDetails){
return <>
<h2>{courseDetails.title}</h2>
<p>Number of lessons : {courseDetails.lessons}</p>
<p>Price : {courseDetails.price} $</p>
<hr></hr>
</>
}


// function CourseCard(){
//   const course={
// title:'Reactjs',
// lessons:60,
// duration:10,
// price : 100
//   };

//   return  (
//     <>
//     <p>Course Name Is : {course.title}</p>
//     <p>Course Lessons Number Is : {course.lessons} </p>
//     <p>Course Total Duration In Minutes Is : {course.lessons * course.duration}</p>
//     <p>Price : {course.price} $</p>
//     <hr></hr>
//     </>
//   );

// }

export default CourseCard;
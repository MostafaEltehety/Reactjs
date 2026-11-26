// function CourseCard(courseDetails){
// function CourseCard({title:courseName , lessons,price}){ // Destructuring 02
// title:courseName  معناه:
// استخرج قيمة title من الـ Object، وخزّنها في متغير اسمه courseName.
// لاحظ إننا مش بنعمل Rename للـ Property، إحنا بنعمل Rename للمتغير اللي استخرجنا فيه القيمة.

// title: courseName	استخراج title وتخزينها في متغير courseName
// lessons	استخراج قيمة lessons بنفس اسمها

// const {title,lessons,price}=courseDetails; // Destructuring 01

function CourseCard({ title = "Unkown", lessons , price = 0, children }) {
    console.log('***********');
    console.log(children);
    //must declear as  children 

// let priceText;
// let lessonsText ;
// if(price===0){
// priceText="Free";
// }else   {
//     priceText= `${price} EGP`;
// }

// if(lessons===undefined){
// lessonsText="This Course has no lessons";
// }else{
// lessonsText=`Number of lessons : ${lessons}`;
// }

  return (
    <>
      {/* <h2>{courseDetails.title}</h2> */}
      <h2>{title}</h2>
      {/* <h2>{courseName}</h2> */}
      {/* <p>Number of lessons : {lessons}</p> */}
      <p>{lessons===undefined?"This Course has no lessons":`Number of lessons : ${lessons}` }</p>
      <p>Price : {price===0 ?  "Free" :`${price} EGP`}</p>
      {children}
      <hr></hr>
    </>
  );
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

// // Destructuring
// // Normal
// function Component(props) {
//     return <h2>{props.title}</h2>;
// }

// // Destructuring inside function
// function Component(props) {
//     const { title } = props;
//     return <h2>{title}</h2>;
// }

// // Destructuring inside parameters (Best practice)
// function Component({ title }) {
//     return <h2>{title}</h2>;
// }

// // Rename property
// function Component({ title: courseName }) {
//     return <h2>{courseName}</h2>;
// }

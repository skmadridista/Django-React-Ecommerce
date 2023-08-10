// import React from "react";

// function Ratings({ value}) {
//   const Rating = value;
//   const fullStars = Math.round(value * 2) / 2;
//   const halfStar = value - fullStars >= 0.5;
//   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//   const starElements = [];

// starElements.push(Rating)
//   // Render full stars
//   for (let i = 0; i < fullStars; i++) {
//     starElements.push(<i key={i} className="fas fa-star" />);
//   }

//   // Render half star
//   if (halfStar) {
//     starElements.push(
//       <i key={starElements.length} className="fas fa-star-half-alt" />
//     );
//   }

//   // Render empty stars
//   for (let i = 0; i < emptyStars; i++) {
//     starElements.push(<i key={starElements.length} className="far fa-star" />);
//   }

//   return starElements;
// }

// export default Ratings;
import React from "react";

function Ratings({value,text}) {
  let n = Math.floor((value * 10) / 10);
  let e = Math.round(((value - n) * 100) / 10);
  //   console.log(value.value, "numb:", n, "expo:", e);
  if (e <= 5) {
    if (e === 5) {
      console.log(e, 5);
    } else e = 0;
  } else {
    n = n + 1;
  }

  console.log(value, "numb:", n, "expo:", e);
  const arr = [];

  for (let i = 0; i < 5; i++) {
    if (i < n) {
      arr.push(<i key={i} className="fas fa-star" />);
    } else {
      if (e === 5) {
        arr.push(<i key={i} className="fas fa-star-half-alt" />);
        e = 0;
      } else {
        arr.push(<i key={i} className="far fa-star" />);
      }
    }
  }
  return (
    <div>
      <span>{value} {arr} from {text} Reviews</span>
    </div>
  );
}

export default Ratings;

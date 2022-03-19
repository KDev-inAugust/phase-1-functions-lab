// Code your solution in this file!


function distanceFromHqInBlocks(origin) {
    let blocks;
    if (origin < 42){
        blocks = 42 - origin
    }
    else blocks = origin - 42
    return blocks;
  }

//returns the number of blocks given a value

  function distanceFromHqInFeet(feetOrigin) {
    let feet = distanceFromHqInBlocks(feetOrigin)*264;
      return feet;
  }

   // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet

    function distanceTravelledInFeet(start, destination) {
        let distInFeet;
        if (start>destination){
            distInFeet = (start-destination)*264}
        else distInFeet = (destination - start) * 264
        return distInFeet;
      }
      console.log(distanceTravelledInFeet)
        //returns the number of feet traveled

        function calculatesFarePrice(start, destination) {
            let feetMath = distanceTravelledInFeet (start, destination);
            let fare;
            console.log(feetMath);
           if (feetMath <= 400){
               fare = 0
            }
            else if (feetMath >=401 && feetMath<=2000){
                fare = (feetMath*2)-800
                fare = fare/100;
            }
            else if (feetMath>2000 && feetMath<2500){
                fare = 25;
            }
            else if (feetMath>2500){
                fare = 'cannot travel that far'
            }

            return fare; 
         
          }

          console.log(calculatesFarePrice(34,32));

 //returns the fare for the customer

 
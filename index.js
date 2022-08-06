// Code your solution in this file!

function distanceFromHqInBlocks(block){
    let distance;
   if (block == 43){
        distance=1;
   }
   else if (block > 43){
        distance=block-42;
   }
   else if (block <43){
        distance=42-block;
   }
   return distance;

}
function distanceFromHqInFeet(block){
    let feetdes=(distanceFromHqInBlocks(block))*264;
        
    return feetdes;
}
function distanceTravelledInFeet(start,destination){
      let travelFeet;
       if (start>=43){
          travelFeet=(destination-start)*264;
       }else if (start<43){
          travelFeet=(start-destination)*264;
       }
       return travelFeet;
}
function calculatesFarePrice(start, destination){
    let charge;
    let totalFeet=distanceTravelledInFeet(start,destination);
    if (totalFeet<=400){
        charge=0;
    }
    else if (totalFeet>400 && totalFeet<=2000){
        charge=(totalFeet-400)*0.02;
    }else if(totalFeet>2000 && totalFeet<=2500){
        charge=25;
    }else {
        charge='cannot travel that far';
    }
    return charge;
}
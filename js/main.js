const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4,
  },
    {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 3,
  },
     {
    id: 4,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 1,
  },
];

var a=[],b,c,d=[];
for(i=0;i<passengers.length;i++){
    a[i]=passengers[i].connectedFlights;
}
for(i=0;i<a.length;i++){
    b=Math.max(...a)
    c=a.indexOf(b);
    a[c]=null;
    for(j=0;j<passengers.length;j++){
        if(b==passengers[j].connectedFlights){
            d[i]=passengers[j];
        }
    }
}
console.log(d)
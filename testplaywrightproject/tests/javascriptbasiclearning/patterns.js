/*
    Design the below pattern:
 
        # # # # #
        # # # # #
        # # # # #
 
        Make sure how many rows availalbe, in the above example 3 Rows
        Make sure how many columns availalbe, in the above example 5 columns
*/
 
let pattern=""
for(let i=1;i<=3;i++)
{
    for(let j=1;j<=5;j++)
    {
        pattern=pattern+"# "
           
    }
    pattern=pattern+"\n"
}
 
console.log(pattern);
 
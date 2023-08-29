var num=7;
var count=0;
for(let i=0; i<=num; i++)
{
    if(num%i==0)
    {
        count++
    }
}
(count>2)?console.log("Yes"):console.log("No");

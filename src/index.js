module.exports = function toReadable (num) {
 let a = ['zero','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
let res;
let x = num%100;
let y = num%10;
	if(num<20) {
		res = a[num];
		}
	
	else if(num>19 && num<100) {
		res = b[Math.trunc(num/10)] + ((num%10!=0)?" " + a[num%10]:"");
		}
	else if(num>99) {
		res = a[Math.trunc(num/100)] +" hundred" + ((x < 20)?((x == 0)?"":" " + a[num%100]):((y == 0)?" " + b[Math.trunc(x/10)]:" " + b[Math.trunc(x/10)] + " "+a[y]));
				}
  return res;
  
}

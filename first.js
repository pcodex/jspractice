let mbtn = document.querySelector('#mybtn');
        let cnt=0;

        mbtn.addEventListener('click',doSomething, false);

        function doSomething(e)
        {

            let myname = "joseph antony britto prabhu missier";
            let names = myname.split(' ');
            //console.log(names);

            let ss = myname.substr(-10, 5);
            //console.log(ss);

            let yy = myname.slice(10,-5);
            //console.log(yy);

            let x = "299px";
            console.log(parseInt(x));

            /*cnt++;
            
            console.log('Button clicked ' + e.target.id);
            if(cnt > 8)
            {
                callErr();
            }
            else if(cnt>5){
                callWarn();
            }*/


            //Arrays
            /*
            let myarr = ['apple','banana', 'orange', 'pear'];
            myarr.push('peach');
            myarr.unshift('avocado');

            console.log(myarr);

            let vp = myarr.pop();
            console.log(vp);


            console.log('New length ' + myarr.length);

            let arrmap = myarr.map(arrmapfn);
            console.log('Modified array '+arrmap);

            let arrfiltered = arrmap.filter(function(item){
                if(item.length >= 4 && item.length < 6 )
                return true;
            })

            console.log('Filtered array '+arrfiltered);

            let anotarr = [1, 2, 3, 4, 5, 6];
            let total = anotarr.reduce(function(tot, curr, idx)
            {      
                               
                if(idx%2 == 0){
                  return tot-curr;
                }
                else{
                  return tot+curr;
                }
                 
            }, 0);

            console.log("Total reduced "+total);
            */
        }      

        function callWarn()
        {
            console.warn("This is a warning");
        }
        
        function callErr()
        {
            console.error("This is an error");
        }

        

        function arrmapfn(item)
        {
            let stlet = item.charAt(0).toUpperCase();
            return item.slice(1) + stlet;
            //return item.toUpperCase();
        }
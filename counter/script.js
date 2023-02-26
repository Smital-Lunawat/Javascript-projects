//buttons and counter text
const counter = document.getElementById('counter')
const btns = document.querySelectorAll('.btn')
// console.log(btns)

let count=0

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const styles = e.currentTarget.classList

        if(styles.contains('increase'))
        {
            count++;
            counter.textContent=count;
        }
        
        else if(styles.contains('decrease'))
        {
            count--;
            counter.textContent=count;
        }
        else if(styles.contains('reset'))
        {
            count=0;
            counter.textContent=count;
        }
    })
})
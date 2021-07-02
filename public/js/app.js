const search = document.querySelector('input')
const searchForm =  document.querySelector('form');
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')
const msg3 = document.querySelector('#msg3')


searchForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    msg1.textContent = 'Loading.....'
    const address = search.value
    fetch('/weather?location='+address)
    .then((resp)=>{resp.json()
    .then((data)=>{
        if(data.error)
            msg1.textContent = data.error
        else{
            msg1.textContent = "Location : "+data.Location
            msg2.textContent = "Temperature : "+data.Temperature
            msg3.textContent = "Condition : "+data.Condition
        }
    })
    })
})
const body = document.querySelector('body'); 
export const createNotification = (isError, message) => {
    const div = document.createElement('div');
    div.classList.add('fixed', 'top-20', 'right-0', 'left-0','hidden');
    
    if(isError){
        div.innerHTML = `
        <div class="max-w-7xl max-auto px-4 flex justify-end">
        <p class="bg-red-500 p-4 w-3/4 rounded-lg font-bold">${message}</p>
      </div>
        `

    }else{
        div.innerHTML = `
        <div class="max-w-7xl max-auto px-4 flex justify-end">
        <p class="bg-green-500 p-4 w-3/4 rounded-lg font-bold">${message}</p>
      </div>
        `
    }

    body.appendChild(div)
}
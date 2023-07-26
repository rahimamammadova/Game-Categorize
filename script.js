(()=>{
 
    document.querySelectorAll('.item').forEach((item, key) => {
        item.addEventListener('dragstart', dragStart);

        item.addEventListener('dragend', dragEnd);
    });

    document.querySelectorAll('.category').forEach((category, key)=>{
        category.addEventListener('dragover', dragover);
        category.addEventListener('drop', drop);
    });

    function dragStart(event) {
        event.target.classList.add('dragging');

        event.dataTransfer.clearData();

        event.dataTransfer.setData('text/plain', event.target.id);
    }

    function dragEnd(event){
        event.target.classList.remove('dragging');
    }

    function dragover(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();

        var element = document.getElementById(event.dataTransfer.getData("text"));

        var subTarget = event.currentTarget.querySelector('.col');

        if(element.getAttribute('data-categoryId') == event.currentTarget.getAttribute('data-id')){
            subTarget.appendChild(element);

            setTimeout(() => {
                if(document.querySelector('#items .item') == null){
                    alert('Congratulations! You win!');
                }
            }, 300);
        }
        else{
            alert('That is not correct! Try again!');
        }
    }


    document.getElementById('reset').onclick = () => {
        location.reload();
    }
})()